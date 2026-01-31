import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, ShoppingCart, CheckCircle } from 'lucide-react';

export default function ICTServices() {
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

  const ictServices = [
    { name: 'Web Development', description: 'Custom websites and web applications tailored to your business needs.' },
    { name: 'E-Commerce Solutions', description: 'Complete online store setup with secure payment integration.' },
    { name: 'ICT Consulting', description: 'Strategic technology planning and implementation guidance.' },
    { name: 'System Integration', description: 'Seamless integration of business systems and processes.' },
    { name: 'Cyber Security', description: 'Comprehensive cybersecurity solutions to protect your digital assets and data.' },
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                <Globe className="h-5 w-5" />
                ICT Services
              </div>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Digital solutions that drive business growth.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                We build and support the digital tools your teams rely on, from customer-facing platforms to internal systems that make operations simpler.
              </p>
            </div>
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Digital solutions workspace"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 text-[var(--moss)] font-semibold">
              <Globe className="h-6 w-6" />
              Our Services
            </div>
            <h2 className="font-display text-3xl mt-4 mb-6">Systems that make operations simpler.</h2>
            <p className="text-[var(--ink)]/70 mb-8">
              We build and support the digital tools your teams rely on, from customer-facing platforms to internal systems.
            </p>
            <div className="space-y-4">
              {ictServices.map((service) => (
                <div key={service.name} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[var(--moss)] mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-[var(--ink)]">{service.name}</h3>
                      <p className="text-sm text-[var(--ink)]/70">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="image-frame h-[240px]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                alt="Software delivery"
              />
            </div>
            <div className="rounded-3xl border border-black/10 bg-[var(--pearl)] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--clay)]">
                <ShoppingCart className="h-5 w-5" />
                Web & E-Commerce
              </div>
              <p className="mt-3 text-sm text-[var(--ink)]/70">
                Responsive websites, secure payment integration, and content support to power your digital presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[var(--ink)] text-white p-10 text-center">
          <h2 className="font-display text-3xl mb-4">Ready to digitalize your operations?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Let us handle your ICT needs while you focus on growth.
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
