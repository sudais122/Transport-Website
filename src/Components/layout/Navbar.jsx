
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";

// MOVANTIS contact details
const PHONE_NUMBER = "0503023907";
const WHATSAPP_NUMBER = "971503023907";

const movingLocations = [
  "Abu Dhabi",
  "Dubai",
  "Ajman",
  "Sharjah",
  "Al Ain",
];


const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Moving Services", href: "/services/moving" },
      { name: "House Moving", href: "/services/house-moving" },
      { name: "Apartment Moving", href: "/services/apartment-moving" },
      { name: "Residential Moving", href: "/services/residential-moving" },
      { name: "Office Relocation", href: "/services/office-relocation" },
      { name: "Commercial Moving", href: "/services/commercial-moving" },
      { name: "Domestic Moving", href: "/services/domestic-moving" },
      { name: "Furniture Relocation", href: "/services/furniture-relocation" },
      { name: "Furniture Installation", href: "/services/furniture-installation" },
      { name: "Packing Services", href: "/services/packing" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
];

const whatsappLink = (city = "") => {
  const message = city
    ? `Hello MOVANTIS, I need moving services in ${city}.`
    : "Hello MOVANTIS, I would like to know more about your moving services.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setLocationsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
className={`fixed inset-x-0 top-10 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#102A43]/95 shadow-xl shadow-[#0B1F33]/10 backdrop-blur-xl"
          : "bg-[#102A43]"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

        {/* LOGO */}
        <a
          href="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-3"
        >
          <div>
            <span className="block text-[23px] font-extrabold tracking-[0.16em] text-white">
              MOVANTIS
            </span>
            <span className="block text-[9px] font-medium tracking-[0.25em] text-[#C6A15B]">
              MOVING YOUR WORLD FORWARD
            </span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-6 xl:flex">

          {/* Home */}
          <a
            href="/"
            className="relative py-3 text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-[#C6A15B] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C6A15B] after:transition-all hover:after:w-full"
          >
            Home
          </a>

          {/* About */}
          <a
            href="/about"
            className="relative py-3 text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-[#C6A15B] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C6A15B] after:transition-all hover:after:w-full"
          >
            About Us
          </a>

          {/* SERVICES DROPDOWN */}
          <div className="group relative">
            <a
              href="/services"
              className="flex items-center gap-1 py-3 text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-[#C6A15B]"
            >
              Services
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </a>

            <div className="invisible absolute left-0 top-full w-64 translate-y-3 rounded-xl border border-white/10 bg-[#0B1F33] p-2 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {navigation
                .find((item) => item.name === "Services")
                .children.map((child) => (
                  <a
                    key={child.name}
                    href={child.href}
                    className="block rounded-lg px-4 py-3 text-sm text-white/80 transition-all hover:bg-white/5 hover:pl-6 hover:text-[#C6A15B]"
                  >
                    {child.name}
                  </a>
                ))}
            </div>
          </div>

          {/* MOVING LOCATIONS DROPDOWN */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1.5 py-3 text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-[#C6A15B]"
            >
              Moving Locations
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </button>

            <div className="invisible absolute right-0 top-full w-72 translate-y-3 rounded-2xl border border-white/10 bg-[#0B1F33] p-3 opacity-0 shadow-2xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              {movingLocations.map((city) => (
                <a
                  key={city}
                  href={whatsappLink(city)}
                  target="_blank"
                  rel="noreferrer"
                  className="group/location flex items-center justify-between rounded-xl px-3 py-3 transition-all hover:bg-white/5"
                >
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      className="text-[#C6A15B]"
                    />
                    <span className="text-sm font-medium text-white/85 transition-colors group-hover/location:text-[#C6A15B]">
                      Movers in {city}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className="text-white/40 transition-all group-hover/location:translate-x-1 group-hover/location:text-[#C6A15B]"
                  />
                </a>
              ))}

            </div>
          </div>

          {/* Gallery */}
          <a
            href="/gallery"
            className="relative py-3 text-[13px] font-semibold tracking-wide text-white/90 transition-colors hover:text-[#C6A15B] after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C6A15B] after:transition-all hover:after:w-full"
          >
            Gallery
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="rounded-lg border border-white/20 p-2 text-white transition hover:border-[#C6A15B] hover:text-[#C6A15B] xl:hidden"
        >
          {mobileOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[80vh] overflow-y-auto border-t border-white/10 bg-[#0B1F33] xl:hidden"
          >
            <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-4">

              {/* Mobile Home */}
              <a
                href="/"
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-4 text-sm font-semibold text-white hover:text-[#C6A15B]"
              >
                Home
              </a>

              {/* Mobile About */}
              <a
                href="/about"
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-4 text-sm font-semibold text-white hover:text-[#C6A15B]"
              >
                About Us
              </a>

              {/* Mobile Services */}
              <div>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 text-sm font-semibold text-white"
                >
                  Services
                  <ChevronDown
                    size={17}
                    className={`transition-transform ${
                      servicesOpen
                        ? "rotate-180 text-[#C6A15B]"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-5"
                    >
                      {navigation
                        .find((item) => item.name === "Services")
                        .children.map((child) => (
                          <a
                            key={child.name}
                            href={child.href}
                            onClick={closeMobileMenu}
                            className="block border-b border-white/5 py-3 text-sm text-white/65 hover:text-[#C6A15B]"
                          >
                            {child.name}
                          </a>
                        ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Moving Locations */}
              <div>
                <button
                  type="button"
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 text-sm font-semibold text-white"
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={17} className="text-[#C6A15B]" />
                    Moving Locations
                  </span>

                  <ChevronDown
                    size={17}
                    className={`transition-transform ${
                      locationsOpen
                        ? "rotate-180 text-[#C6A15B]"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {locationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pl-5"
                    >
                      {movingLocations.map((city) => (
                        <a
                          key={city}
                          href={whatsappLink(city)}
                          target="_blank"
                          rel="noreferrer"
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between border-b border-white/5 py-3 text-sm text-white/70 transition-colors hover:text-[#C6A15B]"
                        >
                          <span className="flex items-center gap-2">
                            <MapPin
                              size={14}
                              className="text-[#C6A15B]"
                            />
                            Movers in {city}
                          </span>
                          <ArrowUpRight size={14} />
                        </a>
                      ))}

                      <a
                        href={`tel:${PHONE_NUMBER}`}
                        className="flex items-center gap-2 py-3 text-sm font-bold text-[#C6A15B]"
                      >
                        <Phone size={15} />
                        {PHONE_NUMBER}
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Gallery */}
              <a
                href="/gallery"
                onClick={closeMobileMenu}
                className="border-b border-white/10 py-4 text-sm font-semibold text-white hover:text-[#C6A15B]"
              >
                Gallery
              </a>

              {/* Mobile WhatsApp Button */}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                onClick={closeMobileMenu}
                className="mt-5 flex items-center justify-center gap-3 rounded-full bg-[#C6A15B] px-5 py-4 text-sm font-bold text-[#102A43] transition-all hover:bg-white"
              >
                <MessageCircle size={19} />
                Chat with us on WhatsApp
                <ArrowUpRight size={16} />
              </a>

              {/* Mobile Call Button */}
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
              >
                <Phone size={17} />
                Call {PHONE_NUMBER}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
