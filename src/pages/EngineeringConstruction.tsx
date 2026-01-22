import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Construction, Building, Zap, Bug, CheckCircle } from 'lucide-react';

export default function EngineeringConstruction() {
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

  const serviceBlocks = [
    {
      title: 'Building Services',
      description: 'New builds, renovations, and structural maintenance for commercial and residential sites.',
      icon: Building,
      items: [
        'New construction projects',
        'Renovations and refurbishments',
        'Structural repairs and maintenance',
        'Commercial and residential building',
        'Project management and supervision',
      ],
    },
    {
      title: 'Electrical & Mechanical',
      description: 'Certified installations and maintenance for safe, efficient operations.',
      icon: Zap,
      items: [
        'Electrical installations and wiring',
        'Mechanical system installations',
        'HVAC setup and maintenance',
        'Industrial electrical systems',
        'Energy-efficient solutions',
      ],
    },
    {
      title: 'Pest Control',
      description: 'Residential and commercial pest management with preventive programs.',
      icon: Bug,
      items: [
        'Residential pest control',
        'Commercial pest management',
        'Fumigation services',
        'Rodent control',
        'Preventive pest control programs',
      ],
    },
  ];

  const standards = [
    'SANS (South African National Standards)',
    'NHBRC (National Home Builders Registration Council)',
    'OHS Act (Occupational Health and Safety)',
    'SACPCMP Professional Standards',
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                <Construction className="h-5 w-5" />
                Engineering & Construction
              </div>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Structured delivery for high-stakes builds.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Professional building services, installations, and pest control aligned with regulatory requirements and
                industry standards.
              </p>
            </div>
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Construction site"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {serviceBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="rounded-3xl border border-black/10 bg-white/80 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-black/5">
                  <div className="flex items-center gap-3 text-[var(--moss)] font-semibold">
                    <Icon className="h-6 w-6" />
                    {block.title}
                  </div>
                  <p className="mt-3 text-sm text-[var(--ink)]/70">{block.description}</p>
                </div>
                <div className="p-6 space-y-3">
                  {block.items.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-[var(--ink)]/80">
                      <CheckCircle className="h-5 w-5 text-[var(--clay)] mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5 reveal-on-scroll" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
                alt="Engineering standards"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Standards & Compliance</p>
              <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-6">Governance built into every project.</h2>
              <p className="text-[var(--ink)]/70 mb-6">
                We align delivery with national standards to ensure safety, quality, and legal compliance throughout the
                project lifecycle.
              </p>
              <div className="space-y-3">
                {standards.map((standard) => (
                  <div key={standard} className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-[var(--ink)]/80">
                    {standard}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[var(--ink)] text-white p-10 text-center">
          <h2 className="font-display text-3xl mb-4">Plan your next build with confidence.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Talk to our engineering team for structured planning and dependable execution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[var(--sun)] px-8 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-white transition-colors"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  );
}
