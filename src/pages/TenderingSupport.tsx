import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, Upload, Package, Eye } from 'lucide-react';

export default function TenderingSupport() {
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

  const services = [
    'Tender document preparation and review',
    'Compliance verification and documentation',
    'Electronic and manual submission services',
    'Tender screening and analysis',
    'Packaging and presentation',
  ];

  const pricingOptions = [
    {
      title: 'E-Submission',
      price: 'From R372',
      description: 'Electronic tender submission per tender',
      icon: Upload,
      features: ['Electronic portal access', 'Document upload and verification', 'Submission confirmation'],
    },
    {
      title: 'Manual Submission',
      price: 'From R400+',
      description: 'Physical tender submission with packaging and transport',
      icon: Package,
      features: ['Professional document packaging', 'Secure packaging materials', 'Transport to submission point'],
    },
    {
      title: 'Screening + Submission',
      price: 'From R500',
      description: 'Complete review, manual submission, packaging, and transport',
      icon: Eye,
      features: [
        'Comprehensive tender screening',
        'Compliance verification',
        'Professional packaging',
        'Secure transport and delivery',
      ],
    },
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                <FileText className="h-5 w-5" />
                Tendering Support
              </div>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Precision submissions with full compliance.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                End-to-end tendering support that ensures accurate documentation, regulatory compliance, and professional presentation.
              </p>
            </div>
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Tender documentation"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Services</p>
            <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-6">A structured submission workflow.</h2>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service} className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-[var(--ink)]/80">
                  {service}
                </div>
              ))}
            </div>
          </div>
          <div className="image-frame h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
              alt="Tender review meeting"
            />
          </div>
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5 reveal-on-scroll" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Pricing</p>
            <h2 className="font-display text-3xl sm:text-4xl mt-4">Submission options to fit your workflow.</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.title} className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3 text-[var(--moss)] font-semibold">
                    <Icon className="h-6 w-6" />
                    {option.title}
                  </div>
                  <div className="mt-4 text-3xl font-semibold text-[var(--ink)]">{option.price}</div>
                  <p className="mt-2 text-sm text-[var(--ink)]/70">{option.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-[var(--ink)]/80">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[var(--clay)] mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[var(--ink)] text-white p-10 text-center">
          <h2 className="font-display text-3xl mb-4">Ready to submit your next tender?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Let our experienced team manage your tender submissions with precision and compliance.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[var(--sun)] px-8 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-white transition-colors"
          >
            Contact us for support
          </Link>
        </div>
      </section>
    </div>
  );
}
