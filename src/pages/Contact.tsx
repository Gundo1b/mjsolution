import { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
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
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['286 Pretorius Street', 'Central Towers', 'Pretoria CBD', 'Gauteng', 'South Africa'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['076 380 3862', '063 714 3167'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@mjsolutiongroup.co.za', 'projects@mjsolutiongroup.co.za'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri 08:00 - 16:00', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  const services = [
    'Business Solutions',
    'Engineering & Construction',
    'MJ Academy Training',
    'Security & Cleaning',
    'Tendering Support',
  ];

  return (
    <div>
      <section className="bg-[var(--ink)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/70">Contact</p>
              <h1 className="font-display text-4xl sm:text-5xl mt-4 mb-6">Start your brief with our team.</h1>
              <p className="text-lg text-white/80 leading-relaxed">
                Tell us about your project scope and we will connect you with the right division.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 reveal-on-scroll" data-reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-[var(--ink)] mb-8">Contact Information</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <div key={info.title} className="rounded-3xl border border-black/10 bg-white/80 p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[var(--fog)] rounded-2xl">
                        <Icon className="h-6 w-6 text-[var(--moss)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--ink)] mb-2">{info.title}</h3>
                        {info.details.map((detail) => (
                          info.title === 'Phone' ? (
                            <a
                              key={detail}
                              href={`https://wa.me/${detail.replace(/\s+/g, '').replace(/^0/, '27')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-[var(--ink)]/70 text-sm hover:text-[var(--moss)] underline mb-1"
                            >
                              {detail}
                            </a>
                          ) : (
                            <p key={detail} className="text-[var(--ink)]/70 text-sm">
                              {detail}
                            </p>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-black/10 bg-white/80 p-6">
              <h3 className="font-semibold text-[var(--ink)] mb-4">Divisions</h3>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <span key={service} className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-[var(--ink)]/70">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-black/10 bg-white/80 p-8 shadow-sm">
              <h2 className="font-display text-2xl text-[var(--ink)] mb-6">Send Us a Message</h2>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--ink)] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--moss)] outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--ink)] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--moss)] outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--ink)] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--moss)] outline-none"
                    placeholder="+27 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[var(--ink)] mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--moss)] outline-none"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--ink)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--moss)] outline-none resize-none"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--ink)] py-3 text-sm font-semibold text-white hover:bg-[var(--moss)] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/80 border-y border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="image-frame h-[300px]">
            <img
              src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80"
              alt="Pretoria city map"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
