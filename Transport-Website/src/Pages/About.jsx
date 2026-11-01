import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  MapPin,
  Truck,
  Plane,
  Package,
  Globe2,
  Check,
} from "lucide-react";

const WHATSAPP_NUMBER = "971503023907";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello MOVANTIS, I would like to know more about your moving services."
)}`;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85";
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85";

const services = [
  {
    icon: Truck,
    title: "Moving Services",
    text: "Home and office relocation handled with care from start to finish.",
    href: "/services/moving",
  },
  {
    icon: Plane,
    title: "Air Cargo",
    text: "Fast and organised air cargo solutions for your belongings.",
    href: "/services/air-cargo",
  },
  {
    icon: Package,
    title: "Packing Services",
    text: "Careful packing of furniture, fragile items and everyday essentials.",
    href: "/services/packing",
  },
  {
    icon: Globe2,
    title: "International Moving",
    text: "Support for relocating abroad, with simple coordination.",
    href: "/services/international-moving",
  },
];

const cities = ["Abu Dhabi", "Dubai", "Ajman", "Sharjah", "Al Ain"];

const details = [
  { label: "Based in", value: "United Arab Emirates" },
  { label: "Serving", value: cities.join(", ") },
  {
    label: "Services",
    value: "Moving, Packing, Furniture Shifting, Air Cargo",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  // Parallax for the hero background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay, ease },
  });

  const titleWords = "ABOUT US".split(" ");

  return (
    <>
      {/* ───────────── HERO BANNER ───────────── */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[200px] items-center justify-center overflow-hidden bg-[#0B1F33] pt-[110px] sm:min-h-[430px]"
      >
        {/* Parallax background */}
        <motion.div
          style={reduceMotion ? undefined : { y: bgY }}
          className="absolute inset-0 -z-20"
        >
          <motion.div
            initial={reduceMotion ? false : { scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease }}
            className="h-[125%] w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 -z-10 bg-[#0B1F33]/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#081827]/80 via-transparent to-[#081827]/30" />

        {/* Floating gold orbs */}
        {!reduceMotion && (
          <>
            <motion.span
              aria-hidden
              animate={{ y: [0, -24, 0], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[12%] top-[40%] -z-10 h-24 w-24 rounded-full bg-[#C6A15B]/20 blur-2xl"
            />
            <motion.span
              aria-hidden
              animate={{ y: [0, 28, 0], opacity: [0.2, 0.45, 0.2] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-[15%] right-[14%] -z-10 h-32 w-32 rounded-full bg-[#D8B979]/20 blur-3xl"
            />
          </>
        )}

        {/* Title + breadcrumb */}
        <motion.div
          style={reduceMotion ? undefined : { y: textY, opacity: textOpacity }}
          className="mx-auto w-full max-w-[1280px] px-6 text-center"
        >

          {/* Expanding gold line */}
          <motion.span
            initial={reduceMotion ? false : { width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mx-auto mt-5 block h-[3px] rounded-full bg-[#C6A15B]"
          />

          <motion.nav
            aria-label="Breadcrumb"
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-5 flex items-center justify-center gap-3 text-sm font-semibold text-white/80"
          >
            <a href="/" className="transition-colors hover:text-[#D8B979]">
              Home
            </a>
            <span className="text-[#C6A15B]">/</span>
            <span className="text-[#D8B979]">About Us</span>
          </motion.nav>
        </motion.div>
      </section>

      {/* ───────────── INTRO: IMAGE + DETAILS ───────────── */}
      <section className="overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image card */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="relative"
          >
            {/* Offset gold frame */}
            <motion.div
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease }}
              className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl border-2 border-[#C6A15B]/60"
            />

            <div className="relative overflow-hidden rounded-3xl bg-[#F5F7FA] shadow-2xl shadow-[#102A43]/15">
              <motion.img
                src={ABOUT_IMAGE}
                alt="Elegant home interior prepared for relocation"
                whileHover={reduceMotion ? undefined : { scale: 1.06 }}
                transition={{ duration: 0.8, ease }}
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 bottom-8 flex items-center gap-3 rounded-2xl bg-[#102A43] px-5 py-4 text-white shadow-xl sm:-right-6"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A15B] text-[#102A43]">
                <Truck size={20} />
              </span>
              <span>
                <span className="block text-sm font-extrabold">
                  Moving Your World
                </span>
                <span className="block text-xs font-semibold tracking-wide text-[#D8B979]">
                  Forward
                </span>
              </span>
            </motion.div>
          </motion.div>

          {/* Text / details */}
          <div>
            <motion.div
              {...fadeUp(0)}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C6A15B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#A47C3C]">
                Welcome to MOVANTIS
              </span>
            </motion.div>

            <motion.h2
              {...fadeUp(0.1)}
              className="text-4xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-5xl"
            >
              Your Moving and Packing Partner in the UAE.
            </motion.h2>

            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 text-base leading-8 text-[#627D98]"
            >
              At MOVANTIS, we provide moving, packing, furniture shifting and
              relocation services for homes and businesses. Our focus is on
              understanding your requirements and helping make every move more
              organised and convenient.
            </motion.p>

            {/* Detail rows (same feel as the product info in your reference) */}
            <motion.dl
              initial={reduceMotion ? false : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
              }}
              className="mt-8 space-y-4 border-y border-[#102A43]/10 py-6"
            >
              {details.map((item) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
                  }}
                  className="flex flex-col gap-1 sm:flex-row sm:gap-4"
                >
                  <dt className="w-28 shrink-0 text-sm font-bold text-[#102A43]">
                    {item.label}:
                  </dt>
                  <dd className="text-sm font-medium text-[#627D98]">
                    {item.value}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>

            <motion.ul
              {...fadeUp(0.35)}
              className="mt-6 grid gap-3 sm:grid-cols-2"
            >
              {[
                "Professional packing",
                "Careful handling",
                "Furniture shifting",
                "Reliable relocation",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-sm font-semibold text-[#243B53]"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C6A15B]/15 text-[#A47C3C]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </motion.ul>

            <motion.div
              {...fadeUp(0.45)}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/get-a-quote"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#102A43] px-8 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#C6A15B] hover:text-[#102A43]"
              >
                Get a Free Quote
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border-2 border-[#102A43]/15 px-8 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A15B] hover:bg-[#C6A15B]/10"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───────────── SERVICES CARDS ───────────── */}
      <section className="bg-[#F5F7FA] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <motion.div {...fadeUp(0)} className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#A47C3C]">
                What We Do
              </span>
              <span className="h-px w-10 bg-[#C6A15B]" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Services Designed Around Your Move
            </h2>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map(({ icon: Icon, title, text, href }) => (
              <motion.a
                key={title}
                href={href}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  show: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease },
                  },
                }}
                whileHover={reduceMotion ? undefined : { y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-[#102A43]/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#102A43]/15"
              >
                {/* Gold bottom line grows on hover */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#C6A15B] transition-all duration-500 group-hover:w-full" />

                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102A43] text-[#D8B979] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#C6A15B] group-hover:text-[#102A43]">
                  <Icon size={26} />
                </span>

                <h3 className="text-lg font-extrabold text-[#102A43]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#627D98]">{text}</p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#A47C3C]">
                  Learn more
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                  />
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ───────────── CITIES MARQUEE ───────────── */}
      <section className="overflow-hidden bg-[#102A43] py-8">
        <motion.div
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center"
        >
          {[...cities, ...cities, ...cities, ...cities].map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="flex items-center gap-4 px-8 text-2xl font-extrabold uppercase tracking-[0.18em] text-white/90 sm:text-3xl"
            >
              <MapPin size={22} className="text-[#C6A15B]" />
              Movers in {city}
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
}