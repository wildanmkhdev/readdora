import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li className="mb-2">
      <a
        href={href}
        className="text-sm text-gray-300 transition-colors duration-200 hover:text-white"
      >
        {children}
      </a>
    </li>
  );
};

interface SocialIconProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, label }) => {
  return (
    <a
      href={href}
      className="mx-2 text-gray-400 transition-colors duration-200 first:ml-0 last:mr-0 hover:text-white"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  );
};

const Footed: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="flex flex-col items-start justify-between md:flex-row">
          {/* Logo and description */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <div className="mb-4 flex items-center">
              <span className="text-xl font-bold text-white">Readdora</span>
            </div>
            <p className="pr-4 text-sm text-gray-400">
              Your premier destination for digital books and reading
              experiences.
            </p>
          </div>

          {/* Links - Simplified to two columns only */}
          <div className="mb-8 grid grid-cols-2 gap-8 sm:gap-16 md:mb-0">
            {/* Company links */}
            <div>
              <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
                Company
              </h2>
              <ul className="list-none p-0">
                <FooterLink href="/about">About</FooterLink>
                <FooterLink href="/catalog">Store</FooterLink>
                <FooterLink href="/contact">Contact</FooterLink>
              </ul>
            </div>

            {/* Support links */}
            <div>
              <h2 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">
                Support
              </h2>
              <ul className="list-none p-0">
                <FooterLink href="/help">Help Center</FooterLink>
                <FooterLink href="/privacy">Privacy</FooterLink>
                <FooterLink href="/terms">Terms</FooterLink>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-800"></div>

        {/* Bottom section - simplified for all screen sizes */}
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="mb-4 text-xs text-gray-400 sm:mb-0">
            © {new Date().getFullYear()} Readdora™. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center">
            <SocialIcon
              href="https://facebook.com"
              icon={FaFacebook}
              label="Facebook"
            />
            <SocialIcon
              href="https://twitter.com"
              icon={FaTwitter}
              label="Twitter"
            />
            <SocialIcon
              href="https://instagram.com"
              icon={FaInstagram}
              label="Instagram"
            />
            <SocialIcon
              href="https://discord.com"
              icon={FaDiscord}
              label="Discord"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footed;
