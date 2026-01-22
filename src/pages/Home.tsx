import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Construction, GraduationCap, Shield, FileText, ChevronRight, Sparkles, MapPin } from 'lucide-react';

export default function Home() {
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

  const divisions = [
    {
      title: 'Business Solutions',
      description: 'ICT services, web development, e-commerce, and compliance support for growing organizations.',
      icon: Monitor,
      href: '/business-solutions',
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      tone: 'text-[var(--moss)]',
    },
    {
      title: 'Engineering & Construction',
      description: 'Building services, installations, and project execution aligned with industry standards.',
      icon: Construction,
      href: '/engineering-construction',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
      tone: 'text-[var(--clay)]',
    },
    {
      title: 'MJ Academy',
      description: 'Skills development and training programs for career advancement and compliance.',
      icon: GraduationCap,
      href: '/mj-academy',
      image:
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
      tone: 'text-[var(--sun)]',
    },
    {
      title: 'Security & Cleaning',
      description: 'Guarding and facilities care for safe, pristine environments.',
      icon: Shield,
      href: '/security-cleaning',
      image:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
      tone: 'text-[var(--moss)]',
    },
    {
      title: 'Tendering Support',
      description: 'End-to-end tender preparation, packaging, and compliant submissions.',
      icon: FileText,
      href: '/tendering-support',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      tone: 'text-[var(--clay)]',
    },
  ];

  const proofPoints = [
    { label: 'Clients served', value: '100+' },
    { label: 'Specialized divisions', value: '5' },
    { label: 'Nationwide coverage', value: '9 provinces' },
  ];

  const operatingModel = [
    {
      title: 'Assess',
      detail: 'Scope the opportunity, map compliance, align internal stakeholders.',
    },
    {
      title: 'Deliver',
      detail: 'Assign qualified teams, execute on time, share governance updates.',
    },
    {
      title: 'Support',
      detail: 'Maintain performance through reporting, audits, and refinement.',
    },
  ];

  const gallery = [
    'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  ];

  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--ink)] text-white">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[var(--clay)]/30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[var(--sun)]/30 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_60%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Pretoria-based service group</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 mb-6 leading-tight">
                Bold, compliant solutions for the work that matters.
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                MJ Solution Group partners with public and private sector clients to deliver ICT, engineering,
                training, security, and tendering support with governance at the core.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full bg-[var(--sun)] px-6 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-white transition-colors"
                >
                  Start a Brief
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Our Story
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 text-sm text-white/70">
                {proofPoints.map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                    <div>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="image-frame h-[320px] sm:h-[360px]">
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="image-frame h-40 sm:h-44">
                  <img
                    src="https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?auto=format&fit=crop&w=1200&q=80"
                    alt="Construction planning"
                  />
                </div>
                <div className="rounded-3xl border border-white/20 bg-white/10 p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/70">
                    <Sparkles className="h-4 w-4" />
                    Compliance focus
                  </div>
                  <div className="mt-4 text-2xl font-semibold">Quality assured delivery</div>
                  <p className="mt-3 text-sm text-white/70">
                    Structured governance, reporting, and operational support for every engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Divisions</p>
            <h2 className="font-display text-3xl sm:text-4xl mt-3">A full-service partner across five divisions.</h2>
          </div>
          <p className="text-base text-[var(--ink)]/70 max-w-xl">
            Each division operates with dedicated specialists while sharing one governance model for consistent outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
          {divisions.map((division) => {
            const Icon = division.icon;
            return (
              <Link
                key={division.title}
                to={division.href}
                className="group rounded-3xl border border-black/10 bg-white/80 shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-44 overflow-hidden">
                  <img src={division.image} alt={division.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold ${division.tone}`}>
                    <Icon className="h-5 w-5" />
                    {division.title}
                  </div>
                  <p className="mt-3 text-sm text-[var(--ink)]/70">{division.description}</p>
                  <div className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--ink)]">
                    View division
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5 reveal-on-scroll" data-reveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-[var(--moss)]">
                <MapPin className="h-4 w-4" />
                Operating model
              </div>
              <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-6">A clear delivery rhythm from brief to support.</h2>
              <p className="text-[var(--ink)]/70 mb-8">
                We align compliance, execution, and reporting to keep stakeholders informed and projects on track.
              </p>
              <div className="space-y-4">
                {operatingModel.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-black/10 bg-white p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] text-sm font-semibold text-white">
                      0{index + 1}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-[var(--ink)]">{step.title}</div>
                      <div className="text-sm text-[var(--ink)]/70">{step.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="image-frame h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                  alt="Digital delivery"
                />
              </div>
              <div className="image-frame h-[220px]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Operations and compliance"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Snapshots</p>
            <h2 className="font-display text-3xl sm:text-4xl mt-3">Operational snapshots from across our work.</h2>
            <p className="mt-4 text-sm text-[var(--ink)]/70">
              From boardrooms to sites, we maintain consistent standards across every engagement.
            </p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={image} className={`image-frame h-64 ${index === 1 ? 'md:translate-y-6' : ''}`}>
                <img src={image} alt="MJ Solution Group work snapshot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl mb-4">Ready to activate your next project?</h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Share your scope and timelines. We will route your brief to the right division and respond with a clear plan.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-[var(--sun)] px-8 py-3 text-sm font-semibold text-[var(--ink)] hover:bg-white transition-colors"
          >
            Start a Brief
          </Link>
        </div>
      </section>
    </div>
  );
}
