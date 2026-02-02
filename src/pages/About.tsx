import { useEffect } from 'react';
import { Award, Eye, Target } from 'lucide-react';
import { AnimatedText } from '../components/ui/animated-underline-text-one';

export default function About() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  const values = [
    {
      title: 'Governance',
      description: 'Clear documentation, compliance checks, and transparent reporting.',
      icon: Award,
    },
    {
      title: 'Precision',
      description: 'Structured planning and delivery across every division.',
      icon: Target,
    },
    {
      title: 'Trust',
      description: 'Long-term partnerships built on accountability and service.',
      icon: Eye,
    },
  ];

  const milestones = [
    {
      title: 'Multi-division delivery',
      detail: 'Operations span ICT, engineering, training, security, and tendering support with shared governance.',
    },
    {
      title: 'Compliance-first operations',
      detail: 'Every engagement includes structured documentation, audits, and reporting checkpoints.',
    },
    {
      title: 'Local presence, national reach',
      detail: 'Based in Pretoria CBD with project delivery across South Africa.',
    },
  ];

  return (
    <div className="bg-[var(--sand)]">
      <section className="relative overflow-hidden bg-[var(--ink)] text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-16 right-0 h-64 w-64 rounded-full bg-[var(--clay)]/30 blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">About MJ Solution Group</p>
              <div className="mt-4 mb-6">
                <AnimatedText
                  text="Committed to compliant, high-impact delivery."
                  textClassName="font-display text-4xl sm:text-5xl text-white"
                />
              </div>
              <p className="text-lg text-white/80 leading-relaxed">
                We are a Pretoria-based service provider with multi-disciplinary teams, built to deliver reliable outcomes
                across public and private sector engagements.
              </p>
            </div>
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Leadership meeting"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-4">Mission Statement</h2>
            <p className="text-[var(--ink)]/70 leading-relaxed">
              Provide reliable, compliant, and professional services that support operational, technical, and administrative
              needs while maintaining high standards of quality, integrity, and customer satisfaction.
            </p>
          </div>
          <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm">
            <h2 className="font-display text-2xl text-[var(--ink)] mb-4">Vision Statement</h2>
            <p className="text-[var(--ink)]/70 leading-relaxed">
              Be a trusted and leading solutions provider in South Africa, recognized for excellence in service delivery,
              strong governance, and sustainable business practices across all divisions.
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm">
          <h2 className="font-display text-2xl text-[var(--ink)] mb-4">Who We Serve</h2>
          <p className="text-[var(--ink)]/70 leading-relaxed">
            We support public and private sector clients that require reliable, compliant service delivery. Our teams work
            across operational, technical, and administrative environments, adapting to sector-specific requirements while
            keeping governance consistent across engagements.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-[var(--moss)]">
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">Public sector</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">Infrastructure</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">Education</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">Facilities</span>
            <span className="rounded-full border border-black/10 bg-white px-3 py-1">Commercial</span>
          </div>
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5 reveal-on-scroll" data-reveal>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3 text-[var(--moss)] font-semibold">
                    <Icon className="h-6 w-6" />
                    {value.title}
                  </div>
                  <p className="mt-3 text-sm text-[var(--ink)]/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="image-frame h-[340px]">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
              alt="Project planning"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">How we partner</p>
            <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-6">Structured delivery from briefing to reporting.</h2>
            <p className="text-[var(--ink)]/70 leading-relaxed">
              We build clear service plans, align expectations early, and keep stakeholders informed throughout the lifecycle
              of each engagement. Our teams are trained to uphold governance requirements without slowing momentum.
            </p>
            <div className="mt-6 space-y-4">
              {milestones.map((item) => (
                <div key={item.title} className="rounded-2xl border border-black/10 bg-white/80 p-4">
                  <div className="text-sm font-semibold text-[var(--ink)]">{item.title}</div>
                  <div className="text-sm text-[var(--ink)]/70">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">100+</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/70 mt-2">Clients served</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">5</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/70 mt-2">Specialized divisions</div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-3xl font-semibold">9</div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/70 mt-2">Provinces covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
