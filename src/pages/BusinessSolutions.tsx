import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, FileCheck, CheckCircle } from 'lucide-react';

export default function BusinessSolutions() {
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

  const compliancePackages = [
    {
      title: 'Standard Registration',
      description: 'Essential compliance services to get your business registered and operational.',
      features: ['Company registration', 'CIPC registration', 'B-BBEE certification', 'SARS registration', 'CSD registration'],
      highlight: false,
    },
    {
      title: 'Premium Registration',
      description: 'Comprehensive registration with additional regulatory requirements.',
      features: [
        'CIPC registration',
        'B-BBEE certification',
        'SARS registration',
        'CSD registration',
        'Banking setup',
        'COIDA registration',
        'CIDB registration',
      ],
      highlight: true,
    },
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                <Monitor className="h-5 w-5" />
                Business Solutions
              </div>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Compliance support for growing organizations.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Full compliance support to keep your business registered, operational, and legally compliant.
              </p>
            </div>
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                alt="Digital solutions workspace"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5 reveal-on-scroll" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 text-[var(--moss)] font-semibold">
              <FileCheck className="h-6 w-6" />
              Compliance Services
            </div>
            <h2 className="font-display text-3xl sm:text-4xl mt-4">Compliance packages that keep you on track.</h2>
            <p className="mt-4 text-[var(--ink)]/70 max-w-3xl mx-auto">
              Choose a package that fits your business stage. We handle documentation and registration so you can focus
              on growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {compliancePackages.map((pkg) => (
              <div
                key={pkg.title}
                className={`rounded-3xl border ${pkg.highlight ? 'border-[var(--clay)]' : 'border-black/10'} bg-white p-8 shadow-sm`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl text-[var(--ink)]">{pkg.title}</h3>
                  {pkg.highlight && (
                    <span className="rounded-full bg-[var(--clay)] px-3 py-1 text-xs font-semibold text-white uppercase tracking-[0.2em]">
                      Recommended
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm text-[var(--ink)]/70">{pkg.description}</p>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[var(--ink)]/80">
                      <CheckCircle className="h-5 w-5 text-[var(--moss)] mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[var(--ink)] text-white p-10 text-center">
          <h2 className="font-display text-3xl mb-4">Ready to ensure compliance?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Let us handle your compliance needs while you focus on growth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[var(--sun)] px-8 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-white transition-colors"
          >
            Talk to our team
          </Link>
        </div>
      </section>
    </div>
  );
}
