import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const socials = [
  { icon: Instagram, link: "https://www.instagram.com/meekha_designs", label: "Instagram" },
  { icon: Twitter, link: "https://www.twitter.com/raji_thedev", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-foreground py-16 px-6 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.png" alt="Nexorra Studio" width={160} height={44} className="object-contain mb-4" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Crafting digital excellence since 2020.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                { label: "Web Design", href: "/services/web-design" },
                { label: "Web Development", href: "/services/web-development" },
                { label: "Branding", href: "/services/branding" },
                { label: "SEO", href: "/services/seo" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">Stay Updated</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Insights and updates delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2.5 bg-secondary border border-border rounded-full text-sm focus:outline-none focus:border-primary/50 transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <button className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Nexorra Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
