import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Sparkles, Clock, Users, CheckCircle } from 'lucide-react';

export default function SecurityCleaning() {
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

  const securityServices = [
    'Armed and unarmed security guards',
    'Access control and monitoring',
    'Patrol services',
    'Event security management',
  ];

  const cleaningServices = [
    'Office and commercial cleaning',
    'Industrial facility cleaning',
    'Floor care and maintenance',
    'Specialized deep cleaning',
  ];

  const features = [
    {
      title: 'Trained Personnel',
      description: 'Rigorous training and vetting for all deployed staff.',
      icon: Users,
    },
    {
      title: '24/7 Availability',
      description: 'Round-the-clock operations to protect your premises.',
      icon: Clock,
    },
    {
      title: 'Quality Assurance',
      description: 'Regular inspections and consistent service delivery.',
      icon: CheckCircle,
    },
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                <Shield className="h-5 w-5" />
                Security & Cleaning
              </div>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Protection and care for every facility.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Professional security guarding and commercial cleaning services to keep your spaces safe, secure, and pristine.
              </p>
            </div>
            <div className="image-frame h-[320px] mt-4">
              <img
                src="/images/security-cleaning.png"
                alt="Security services"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm">
            <div className="flex items-center gap-3 text-[var(--moss)] font-semibold">
              <Shield className="h-6 w-6" />
              Security Services
            </div>
            <p className="mt-3 text-sm text-[var(--ink)]/70">
              Comprehensive protection for business premises, assets, and personnel.
            </p>
            <ul className="mt-6 space-y-3">
              {securityServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-sm text-[var(--ink)]/80">
                  <CheckCircle className="h-5 w-5 text-[var(--clay)] mt-0.5" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm">
            <div className="flex items-center gap-3 text-[var(--clay)] font-semibold">
              <Sparkles className="h-6 w-6" />
              Cleaning Services
            </div>
            <p className="mt-3 text-sm text-[var(--ink)]/70">
              Commercial cleaning tailored to your industry standards and schedules.
            </p>
            <ul className="mt-6 space-y-3">
              {cleaningServices.map((service) => (
                <li key={service} className="flex items-start gap-3 text-sm text-[var(--ink)]/80">
                  <CheckCircle className="h-5 w-5 text-[var(--moss)] mt-0.5" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5 reveal-on-scroll" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-3xl border border-black/10 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-3 text-[var(--moss)] font-semibold">
                    <Icon className="h-6 w-6" />
                    {feature.title}
                  </div>
                  <p className="mt-3 text-sm text-[var(--ink)]/70">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-[var(--ink)] text-white p-10 text-center">
          <h2 className="font-display text-3xl mb-4">Secure and care for your premises.</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-6">
            Let our teams protect your site and maintain a pristine environment.
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
