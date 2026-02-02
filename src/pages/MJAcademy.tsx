import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, Award } from 'lucide-react';

export default function MJAcademy() {
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

  const trainingAreas = [
    {
      title: 'Technical Skills Development',
      description: 'Hands-on training in construction, engineering, and technical fields.',
      icon: Award,
    },
    {
      title: 'Business & Management',
      description: 'Leadership, project management, and business administration courses.',
      icon: Users,
    },
    {
      title: 'Compliance & Safety',
      description: 'Health and safety, regulatory compliance, and industry standards training.',
      icon: BookOpen,
    },
  ];

  const benefits = [
    'Accredited training programs',
    'Experienced and qualified instructors',
    'Flexible learning schedules',
    'Certification upon completion',
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-white/70">
                <GraduationCap className="h-5 w-5" />
                MJ Academy
              </div>
              <div className="block md:hidden mt-2 text-xs uppercase tracking-[0.2em] text-[var(--sun)] font-semibold">
                B-BBEE LEVEL 1 COMPLIANCE
              </div>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Skills development designed for impact.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Training programs that build practical capability, strengthen compliance knowledge, and support career growth.
              </p>
            </div>
            <div className="image-frame h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Training session"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Programs</p>
          <h2 className="font-display text-3xl sm:text-4xl mt-4">Training that keeps teams competitive.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainingAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="rounded-3xl border border-black/10 bg-white/80 p-7 shadow-sm">
                <div className="flex items-center gap-3 text-[var(--clay)] font-semibold">
                  <Icon className="h-6 w-6" />
                  {area.title}
                </div>
                <p className="mt-3 text-sm text-[var(--ink)]/70">{area.description}</p>
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
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Group workshop"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[var(--moss)]">Why MJ Academy</p>
              <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-6">Industry-driven learning outcomes.</h2>
              <ul className="space-y-3 text-sm text-[var(--ink)]/80">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-[var(--clay)] mt-0.5" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center rounded-full bg-[var(--ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--moss)] transition-colors"
              >
                Request training info
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
