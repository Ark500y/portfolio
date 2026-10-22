import {useEffect, useState, type FormEvent} from 'react';
import {brand, missions, reserve} from '../content';
import {useReveals} from '../hooks/useReveals';

type Status = 'idle' | 'invalid' | 'sent';

function useCountdown(target: string) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const ms = Math.max(0, new Date(target).getTime() - now);
  const s = Math.floor(ms / 1000);
  return {d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60};
}

/**
 * Waitlist / Contact Manifest. Ticking launch-window countdown on one side,
 * the manifest form and direct channels on the other.
 */
export function Reserve() {
  const ref = useReveals<HTMLElement>();
  const t = useCountdown(reserve.window);
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setStatus('invalid');
      form.reportValidity();
      return;
    }
    const data = new FormData(form);
    const mission = String(data.get('mission'));
    const name = String(data.get('name'));
    const email = String(data.get('email'));
    const subject = encodeURIComponent(`Project Inquiry: ${mission}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMission: ${mission}`);
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  const field =
    'w-full rounded-[4px] bg-white/[0.04] px-4 py-3.5 text-body text-white ring-1 ring-white/15 outline-none placeholder:text-regolith/40 focus:ring-earth user-invalid:ring-red-400/70';
  const units: [string, number][] = [
    ['Days', t.d],
    ['Hrs', t.h],
    ['Min', t.m],
    ['Sec', t.s],
  ];

  return (
    <section ref={ref} id="reserve" aria-labelledby="reserve-title" className="relative overflow-hidden bg-void px-4 pb-28 sm:px-6 md:px-[6vw] md:pb-40">
      {/* A sliver of the Earth rising at the bottom edge — the hero, bookended. */}
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-[62vw] left-1/2 size-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_30%,rgba(111,182,255,0.35),rgba(111,182,255,0.05)_55%,transparent_70%)]" />

      <div className="relative grid gap-12 border-t border-white/10 pt-20 md:grid-cols-2 md:gap-16 md:pt-28">
        <div data-reveal>
          <p className="font-mono text-label text-earth uppercase">{reserve.eyebrow}</p>
          <h2 id="reserve-title" className="mt-4 font-display text-display text-white">
            {reserve.heading}
          </h2>
          <p className="mt-5 max-w-[28rem] text-body text-regolith/70">{reserve.body}</p>

          <div className="mt-10">
            <p className="font-mono text-label text-regolith/50 uppercase">{reserve.windowLabel}</p>
            <div className="mt-3 flex gap-2 md:gap-3" role="timer" aria-label={`${t.d} days, ${t.h} hours, ${t.m} minutes until the next availability window`}>
              {units.map(([label, v]) => (
                <div key={label} className="brackets min-w-[4.25rem] px-3 py-3 text-center text-white/25 md:min-w-[5.5rem]">
                  <span className="block font-display text-[1.5rem] text-white tabular-nums md:text-[2.25rem]">{String(v).padStart(2, '0')}</span>
                  <span className="mt-1 block font-mono text-[0.625rem] tracking-[0.14em] text-regolith/60 uppercase">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Comms Channels */}
          <div className="mt-10 space-y-3 font-mono text-[0.8125rem]">
            <p className="text-label text-regolith/50 uppercase">Direct Channels</p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2.5 rounded-[4px] bg-white/[0.04] px-4 py-2.5 text-regolith ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white hover:ring-earth/50"
              >
                <span className="text-earth">✉</span>
                <span>{brand.email}</span>
              </a>
              <a
                href={`tel:${brand.phoneRaw}`}
                className="flex items-center gap-2.5 rounded-[4px] bg-white/[0.04] px-4 py-2.5 text-regolith ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white hover:ring-earth/50"
              >
                <span className="text-earth">📞</span>
                <span>{brand.phone}</span>
              </a>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 rounded-[4px] bg-[#25D366]/15 px-4 py-2.5 text-[#25D366] ring-1 ring-[#25D366]/40 transition-colors hover:bg-[#25D366]/25 hover:text-white"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp: {brand.phone}</span>
              </a>
            </div>
          </div>
        </div>

        <form noValidate onSubmit={onSubmit} aria-describedby="reserve-status" className="space-y-3" data-reveal>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Name</span>
            <input name="name" required autoComplete="name" placeholder="As it should appear on the manifest" className={field} onInput={() => setStatus('idle')} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Email</span>
            <input name="email" type="email" required autoComplete="email" placeholder="you@earth.com" className={field} onInput={() => setStatus('idle')} />
          </label>
          <label className="block">
            <span className="mb-1.5 block font-mono text-label text-regolith/60 uppercase">Engagement Model</span>
            <select name="mission" defaultValue="Product Build" className={`${field} appearance-none`}>
              {missions.items.map((m) => (
                <option key={m.name} value={m.name} className="bg-void">
                  {m.name} — {m.days} days
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="mt-2 w-full rounded-[4px] bg-white px-5 py-4 font-mono text-label text-void uppercase transition-colors hover:bg-earth">
            Submit Manifest Request
          </button>
          <p id="reserve-status" role="status" className="min-h-[1.25rem] text-[0.8125rem] text-regolith/70">
            {status === 'invalid' && 'Name and a valid email, please — the manifest is strict.'}
            {status === 'sent' && (
              <span>
                Your mail app should be open with your request drafted. Or connect directly via{' '}
                <a href={brand.whatsapp} target="_blank" rel="noreferrer" className="text-earth underline hover:text-white">
                  WhatsApp ({brand.phone})
                </a>.
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
