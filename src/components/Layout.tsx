import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import logoUrl from '../logo.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Business Solutions', href: '/business-solutions' },
    { name: 'Engineering & Construction', href: '/engineering-construction' },
    { name: 'MJ Academy', href: '/mj-academy' },
    { name: 'Security & Cleaning', href: '/security-cleaning' },
    { name: 'Tendering Support', href: '/tendering-support' },
    { name: 'ICT Services', href: '/ict-services' },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <nav className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(244,240,232,0.9)] backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:flex items-center justify-between text-xs uppercase tracking-[0.2em] text-[var(--moss)] pt-3">
            <div className="flex items-center gap-5">
              <span>B-BBEE LEVEL 1 COMPLIANCE</span>
            </div>
            <span>Mon-Fri 08:00 - 16:00</span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <img src={logoUrl} alt="MJ Solution Group logo" className="h-24 w-24 object-cover" />
                <div>
                  <div className="text-base font-semibold text-[var(--ink)] font-display">MJ Solution Group</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--moss)]"></div>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${isActive(item.href)
                    ? 'bg-[var(--ink)] text-white'
                    : 'text-[var(--ink)] hover:bg-white/70'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className="px-3 py-2 rounded-full text-sm font-medium transition-colors text-[var(--ink)] hover:bg-white/70 flex items-center gap-1"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="absolute top-full mt-2 w-64 bg-white border border-black/10 rounded-2xl shadow-lg py-2 z-50">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setServicesDropdownOpen(false)}
                        className={`block px-4 py-3 text-sm text-[var(--ink)] hover:bg-[var(--sand)] transition-colors ${isActive(item.href) ? 'bg-[var(--sand)] font-semibold' : ''
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                to="/contact"
                className="ml-2 inline-flex items-center rounded-full bg-[var(--clay)] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[var(--moss)] transition-colors"
              >
                Request Proposal
              </Link>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full text-[var(--ink)] hover:bg-white/80"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-black/10 bg-[var(--sand)]">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-full text-base font-medium ${isActive(item.href)
                    ? 'bg-[var(--ink)] text-white'
                    : 'text-[var(--ink)] hover:bg-white/80'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 text-xs uppercase tracking-[0.3em] text-[var(--moss)]">
                Divisions
              </div>
              {serviceLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-2xl border border-black/10 text-sm text-[var(--ink)] hover:bg-white/80"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="hidden lg:flex flex-wrap gap-2 pb-4">
          {serviceLinks.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--moss)] hover:bg-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <main className="page-fade">{children}</main>

      <footer className="bg-[var(--ink)] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src={logoUrl} alt="MJ Solution Group logo" className="h-28 w-28 object-cover" />
                <div>
                  <div className="text-sm font-semibold font-display">MJ Solution Group</div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/70">Pretoria, Gauteng</div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Professional service provider delivering compliant, cost-effective solutions across public and private sector clients. We combine governance, performance, and accountability.
              </p>

            </div>

            <div>
              <h3 className="font-semibold mb-4">Divisions</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {serviceLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="hover:text-[var(--sun)] transition-colors">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>286 Pretorius Street</li>
                <li>Central Towers</li>
                <li className="pt-2 font-medium text-white">076 380 3862</li>
                <li className="font-medium text-white">063 714 3167</li>
                <li className="pt-2 text-[var(--sun)]">info@mjsolutiongroup.co.za</li>
                <li>Mon-Fri 08:00 - 16:00</li>
              </ul>
              <Link
                to="/contact"
                className="mt-4 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white hover:bg-white/20 transition-colors"
              >
                Start a brief
              </Link>
            </div>
          </div>

          <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-white/60 uppercase tracking-[0.3em]">
            <p>&copy; {new Date().getFullYear()} MJ Solution Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
