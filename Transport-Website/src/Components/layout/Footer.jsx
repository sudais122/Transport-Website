
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const PHONE_NUMBER = "0503023907";
const WHATSAPP_NUMBER = "971503023907";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello MOVANTIS, I would like to enquire about your moving services.",
)}`;

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Moving Locations", href: "/#locations" },
];

const services = [
  "Moving Services",
  "Packing Services",
  "Office Relocation",
  "Furniture Relocation",
  "Furniture Installation",
  "International Moving",
];

const locations = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah",
  "Ajman",
  "Al Ain",
];

function FooterReveal({ children, delay = 0, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 20 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: reduceMotion ? 0 : 0.6,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1F33] px-6 pb-8 pt-20 text-white sm:px-10 lg:px-16">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-96 w-96 rounded-full border border-[#C6A15B]/10" />

      <div className="relative mx-auto max-w-[1280px]">
        {/* Footer columns */}
        <div className="grid gap-12 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand information */}
          <FooterReveal className="lg:col-span-2">
            <a href="/" className="inline-block">
              <span className="block text-3xl font-extrabold tracking-[0.16em] text-white">
                MOVANTIS
              </span>

              <span className="mt-2 block text-[9px] font-bold tracking-[0.25em] text-[#D8B979]">
                MOVING YOUR WORLD FORWARD
              </span>
            </a>

            <p className="mt-7 max-w-[390px] text-sm leading-8 text-white/55">
              MOVANTIS provides moving, packing, and relocation
              solutions for residential and commercial requirements
              across selected locations in the UAE.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-[#D8B979] transition-colors hover:text-white"
            >
              <MessageCircle size={18} />
              Connect with MOVANTIS
              <ArrowUpRight size={15} />
            </a>
          </FooterReveal>

          {/* Quick links */}
          <FooterReveal delay={0.08}>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-[#D8B979]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FooterReveal>

          {/* Services */}
          <FooterReveal delay={0.16}>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Our Services
            </h3>

            <ul className="mt-7 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="/#services"
                    className="text-sm text-white/55 transition-colors hover:text-[#D8B979]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </FooterReveal>

          {/* Contact */}
          <FooterReveal delay={0.24}>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
              Contact Us
            </h3>

            <div className="mt-7 space-y-5">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#D8B979]"
              >
                <Phone
                  size={17}
                  className="shrink-0 text-[#D8B979]"
                />
                {PHONE_NUMBER}
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#D8B979]"
              >
                <MessageCircle
                  size={17}
                  className="shrink-0 text-[#D8B979]"
                />
                WhatsApp
              </a>

              <a
                href="mailto:info@movantis.com"
                className="flex items-center gap-3 break-all text-sm text-white/60 transition-colors hover:text-[#D8B979]"
              >
                <Mail
                  size={17}
                  className="shrink-0 text-[#D8B979]"
                />
                info@movantis.com
              </a>
            </div>
          </FooterReveal>
        </div>

        {/* Locations */}
        <div className="flex flex-col gap-5 border-b border-white/10 py-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <MapPin size={17} className="text-[#D8B979]" />

            <h3 className="text-xs font-extrabold uppercase tracking-[0.18em] text-white">
              Moving Locations
            </h3>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {locations.map((location) => (
              <a
                key={location}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-white/50 transition-colors hover:text-[#D8B979]"
              >
                {location}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} MOVANTIS. All rights reserved.
          </p>

          <a
            href="/"
            className="font-semibold tracking-wide transition-colors hover:text-[#D8B979]"
          >
            MOVING YOUR WORLD FORWARD.
          </a>
        </div>
      </div>
    </footer>
  );
}
