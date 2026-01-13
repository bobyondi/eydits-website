import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { footerColumns } from '@/data/footer';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-400 pt-24 pb-12 px-[5%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-extrabold text-white mb-6">eydits</h3>
            <p className="text-neutral-400 leading-relaxed mb-8">
              Professional human editors transform your AI outputs into flawless, ready-to-use deliverables.
            </p>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-bold mb-6 text-sm">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-400 hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-neutral-900 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="max-w-[1400px] mx-auto pt-12 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm">© 2025 eydits.com. All rights reserved.</p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:bg-accent hover:text-white transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-4 focus:ring-offset-neutral-900"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
