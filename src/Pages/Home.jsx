
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Play,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

const PHONE_NUMBER = "0503023907";
const WHATSAPP_NUMBER = "971503023907";
const VIDEO_URL = "/videos/movantis-showreel.mp4";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello MOVANTIS, I would like to enquire about your moving services.",
)}`;

const images = {
  hero: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=90",
  about:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
  moving:
    "https://images.unsplash.com/photo-1600518464441-9306b0c9c2e4?auto=format&fit=crop&w=1000&q=85",
  packing:
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=85",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  furniture:
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=85",
  gallery1:
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
  gallery2:
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
  gallery3:
    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1000&q=85",
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 35 }
      }
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children, light = false }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="h-px w-9 bg-[#C6A15B]" />
      <span
        className={`text-[10px] font-extrabold uppercase tracking-[0.24em] ${
          light ? "text-[#D8B979]" : "text-[#A47C3C]"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/* Animated statistics counter */
function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      setCount(value);
      return;
    }

    let animationFrame;
    let startTime;

    const duration = 2000;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1,
      );

      const easedProgress = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };

    animationFrame = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, reduceMotion]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl font-extrabold tracking-tight text-[#D8B979] sm:text-5xl lg:text-6xl">
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.16em] text-white/65 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

function Home() {
  const [videoOpen, setVideoOpen] = useState(false);

  const services = [
    {
      number: "01",
      title: "Moving Services",
      description:
        "Carefully coordinated home and residential moving services designed to make your next move more convenient.",
      image: images.moving,
      icon: Truck,
    },
    {
      number: "02",
      title: "Professional Packing",
      description:
        "Thoughtful packing solutions to help prepare your belongings for a smooth and organised move.",
      image: images.packing,
      icon: Package,
    },
    {
      number: "03",
      title: "Office Relocation",
      description:
        "Organised office relocation support to help businesses transition to their new workspace.",
      image: images.office,
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Furniture Relocation",
      description:
        "Careful handling and relocation of furniture for residential and commercial spaces.",
      image: images.furniture,
      icon: CheckCircle2,
    },
  ];

  const reasons = [
    {
      number: "01",
      title: "Careful Handling",
      description:
        "We approach your belongings with attention and care throughout the moving process.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Organised Moving",
      description:
        "A structured approach helps keep your relocation organised from start to finish.",
      icon: CheckCircle2,
    },
    {
      number: "03",
      title: "Packing Support",
      description:
        "Packing assistance helps prepare your items for transportation and relocation.",
      icon: Package,
    },
    {
      number: "04",
      title: "Timely Coordination",
      description:
        "We coordinate moving arrangements around your requirements and schedule.",
      icon: Clock3,
    },
    {
      number: "05",
      title: "Flexible Services",
      description:
        "Moving and packing solutions for different residential and business requirements.",
      icon: Truck,
    },
    {
      number: "06",
      title: "Customer Focus",
      description:
        "We aim to make every stage of your moving experience clear and convenient.",
      icon: MessageCircle,
    },
  ];

  const gallery = [
    {
      image: images.gallery1,
      title: "Residential Interiors",
    },
    {
      image: images.gallery2,
      title: "Modern Living Spaces",
    },
    {
      image: images.gallery3,
      title: "Elegant Home Settings",
    },
  ];

  const locations = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Al Ain",
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#0B1F33] sm:min-h-[720px]">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Elegant residential interior"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/95 via-[#0B1F33]/75 to-[#0B1F33]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/50 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] px-6 py-28 sm:px-10 lg:px-16">
          <div className="max-w-[780px]">
            <Reveal>
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-12 bg-[#C6A15B]" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D8B979]">
                  MOVING YOUR WORLD FORWARD
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your Trusted Packing & Moving Partner in{" "}
                <span className="text-[#D8B979]">UAE.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[580px] text-sm leading-8 text-white/70 sm:text-base">
                Moving to a new home or relocating your business?
                MOVANTIS provides moving and packing services designed
                around your relocation needs.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-[54px] items-center gap-3 rounded-full bg-[#C6A15B] px-7 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                >
                  Get a Free Quote
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#services"
                  className="inline-flex min-h-[54px] items-center gap-3 rounded-full border border-white/35 px-7 text-sm font-bold text-white transition-all duration-300 hover:border-[#C6A15B] hover:bg-white/10"
                >
                  Explore Services
                  <ArrowRight size={17} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-4 text-white/60 lg:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <span className="h-px w-12 bg-[#C6A15B]" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="relative z-10 -mt-5 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 overflow-hidden rounded-2xl bg-[#102A43] shadow-2xl shadow-[#102A43]/15 sm:grid-cols-3">
          {[
            {
              icon: Truck,
              title: "Moving Services",
              text: "Residential & commercial",
            },
            {
              icon: Package,
              title: "Packing Solutions",
              text: "Careful packing assistance",
            },
            {
              icon: MapPin,
              title: "UAE Locations",
              text: "Across selected Emirates",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-5 px-7 py-7 sm:px-8 ${
                index !== 2 ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""
              }`}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/40 text-[#D8B979]">
                <item.icon size={21} />
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-white/50">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative">
              <img
                src={images.about}
                alt="Modern and elegant residential interior"
                className="h-[420px] w-full rounded-2xl object-cover sm:h-[560px]"
              />

              <div className="absolute -bottom-7 -right-4 max-w-[230px] rounded-xl bg-[#102A43] p-6 shadow-xl sm:-right-7">
                <span className="block text-3xl font-extrabold text-[#D8B979]">
                  MOVANTIS
                </span>
                <span className="mt-2 block text-[10px] font-bold uppercase leading-5 tracking-[0.16em] text-white/65">
                  Moving Your World Forward
                </span>
              </div>

              <div className="absolute -left-5 -top-5 -z-10 h-40 w-40 rounded-2xl border border-[#C6A15B]/40" />
            </div>
          </Reveal>

          <div className="lg:pl-4">
            <Reveal>
              <SectionLabel>ABOUT MOVANTIS</SectionLabel>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                Making Every Move a{" "}
                <span className="text-[#B48A49]">Better Experience.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-7 text-sm leading-8 text-[#627D98]">
                MOVANTIS provides moving and packing solutions for
                individuals, families, and businesses across the UAE.
                We understand that relocation involves more than
                transporting belongings. It is about preparing for
                a new chapter.
              </p>

              <p className="mt-5 text-sm leading-8 text-[#627D98]">
                Our services are designed to make the moving process
                more organised, convenient, and carefully coordinated
                around your requirements.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 space-y-4">
                {[
                  "Residential and commercial moving",
                  "Packing and relocation assistance",
                  "Furniture shifting and handling",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-[#B48A49]"
                    />
                    <span className="text-sm font-semibold text-[#243B53]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#services"
                className="group mt-10 inline-flex items-center gap-3 text-sm font-extrabold text-[#102A43] transition-colors hover:text-[#B48A49]"
              >
                Discover Our Services
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="bg-[#F5F7FA] px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <Reveal>
                <SectionLabel>WHAT WE DO</SectionLabel>
                <h2 className="max-w-[650px] text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                  Moving Solutions Designed Around You.
                </h2>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <p className="max-w-[390px] text-sm leading-7 text-[#627D98]">
                Explore our range of moving, packing, and relocation
                services for your home or business.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="group h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-[#102A43]/10">
                  <div className="relative h-[230px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/60 to-transparent" />

                    <span className="absolute left-5 top-5 text-xs font-extrabold tracking-[0.15em] text-white">
                      {service.number}
                    </span>

                    <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A15B] text-[#102A43]">
                      <service.icon size={22} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-extrabold text-[#102A43]">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-xs leading-7 text-[#627D98]">
                      {service.description}
                    </p>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-[#A47C3C] transition-colors hover:text-[#102A43]"
                    >
                      Enquire Now
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1F33] px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border border-white/5" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full border border-[#C6A15B]/10" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionLabel light>THE MOVANTIS EXPERIENCE</SectionLabel>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Every Detail Matters When It Comes to Your Move.
            </h2>

            <p className="mt-7 max-w-[500px] text-sm leading-8 text-white/60">
              From preparation and packing to transportation and
              relocation, each stage deserves attention and thoughtful
              coordination.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 text-sm font-extrabold text-[#D8B979] transition-colors hover:text-white"
            >
              Talk to Our Team
              <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              aria-label="Play MOVANTIS showreel"
              className="group relative block h-[300px] w-full overflow-hidden rounded-2xl text-left sm:h-[400px]"
            >
              <img
                src={images.about}
                alt="MOVANTIS video preview"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-[#0B1F33]/45 transition-colors group-hover:bg-[#0B1F33]/30" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-[#C6A15B] text-[#102A43] shadow-2xl transition-transform duration-300 group-hover:scale-110">
                  <Play size={27} fill="currentColor" />
                </span>
              </div>

              <span className="absolute bottom-6 left-7 text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Watch Our Showreel
              </span>
            </button>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-choose-us"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto mb-16 max-w-[700px] text-center">
            <Reveal>
              <div className="flex justify-center">
                <SectionLabel>WHY MOVANTIS</SectionLabel>
              </div>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                A Moving Experience Built Around Your Needs.
              </h2>

              <p className="mt-5 text-sm leading-8 text-[#627D98]">
                We focus on thoughtful coordination, careful handling,
                and practical solutions throughout your relocation.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <Reveal key={reason.title} delay={(index % 3) * 0.08}>
                <div className="group border-b border-[#D9E2EC] pb-8">
                  <div className="mb-7 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F7FA] text-[#A47C3C] transition-all duration-300 group-hover:bg-[#102A43] group-hover:text-[#D8B979]">
                      <reason.icon size={24} />
                    </div>

                    <span className="text-xs font-extrabold tracking-[0.15em] text-[#BCCCDC]">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[#102A43]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#627D98]">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOVANTIS STATISTICS */}
      <section className="relative overflow-hidden bg-[#102A43] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full border border-white/5" />
        <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full border border-[#C6A15B]/10" />

        <div className="relative mx-auto max-w-[1280px]">
          <Reveal className="mb-14 text-center">
            <div className="flex justify-center">
              <SectionLabel light>OUR JOURNEY</SectionLabel>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              MOVANTIS in Numbers
            </h2>

            <p className="mx-auto mt-4 max-w-[550px] text-sm leading-7 text-white/55">
              A closer look at our moving experience and service journey.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 md:gap-6">
            <Reveal delay={0.05}>
              <AnimatedCounter
                value={26000}
                suffix="+"
                label="Happy Customers"
              />
            </Reveal>

            <Reveal delay={0.12}>
              <AnimatedCounter
                value={700}
                suffix="+"
                label="Works Completed"
              />
            </Reveal>

            <Reveal delay={0.19}>
              <AnimatedCounter
                value={10}
                suffix="+"
                label="Transportation Services"
              />
            </Reveal>

            <Reveal delay={0.26}>
              <AnimatedCounter
                value={12}
                suffix="+"
                label="Years of Experience"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-[380px] overflow-hidden sm:h-[480px]">
        <img
          src={images.gallery2}
          alt="Beautiful residential living space"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0B1F33]/65" />

        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <Reveal>
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D8B979]">
              A NEW CHAPTER BEGINS
            </span>

            <h2 className="mx-auto mt-5 max-w-[800px] text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Your Next Move Starts Here.
            </h2>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-[52px] items-center gap-3 rounded-full bg-[#C6A15B] px-8 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Start Your Enquiry
              <ArrowUpRight size={17} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <Reveal>
              <SectionLabel>OUR GALLERY</SectionLabel>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                Spaces Worth Moving Into.
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="max-w-[360px] text-sm leading-7 text-[#627D98]">
                Explore a selection of interior and living-space
                inspiration.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="group relative h-[300px] overflow-hidden rounded-2xl sm:h-[360px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F33]/70 via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <h3 className="text-lg font-extrabold text-white">
                      {item.title}
                    </h3>

                    <span className="mt-2 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#D8B979]">
                      MOVANTIS
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-5 text-xs text-[#829AB1]">
            Gallery images are illustrative and are not presented as
            photographs of completed MOVANTIS projects.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section
        id="locations"
        className="bg-[#F5F7FA] px-6 py-20 sm:px-10 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionLabel>OUR LOCATIONS</SectionLabel>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
                Moving Across the UAE.
              </h2>

              <p className="mt-6 max-w-[460px] text-sm leading-8 text-[#627D98]">
                Contact our team to discuss your moving requirements
                and service availability in your location.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {locations.map((location) => (
                  <a
                    key={location}
                    href={`${whatsappLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-[105px] items-center gap-3 rounded-xl border border-[#D9E2EC] bg-white px-5 transition-all duration-300 hover:border-[#C6A15B] hover:shadow-lg"
                  >
                    <MapPin
                      size={19}
                      className="shrink-0 text-[#B48A49] transition-transform group-hover:-translate-y-1"
                    />

                    <span className="text-sm font-extrabold text-[#102A43]">
                      {location}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0B1F33] px-6 pb-8 pt-20 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <a href="/" className="inline-block">
                <span className="block text-3xl font-extrabold tracking-[0.16em] text-white">
                  MOVANTIS
                </span>

                <span className="mt-2 block text-[9px] font-bold tracking-[0.25em] text-[#D8B979]">
                  MOVING YOUR WORLD FORWARD
                </span>
              </a>

              <p className="mt-7 max-w-[390px] text-sm leading-8 text-white/55">
                Moving and packing solutions for residential and
                commercial relocation requirements across the UAE.
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
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Quick Links
              </h3>

              <ul className="mt-7 space-y-4">
                {[
                  ["Home", "#home"],
                  ["About Us", "#about"],
                  ["Services", "#services"],
                  ["Why Choose Us", "#why-choose-us"],
                  ["Gallery", "#gallery"],
                  ["Locations", "#locations"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-white/55 transition-colors hover:text-[#D8B979]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-white">
                Contact Information
              </h3>

              <div className="mt-7 space-y-5">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#D8B979]"
                >
                  <Phone size={17} className="text-[#D8B979]" />
                  {PHONE_NUMBER}
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#D8B979]"
                >
                  <MessageCircle size={17} className="text-[#D8B979]" />
                  WhatsApp
                </a>

                <a
                  href="mailto:info@movantis.com"
                  className="flex items-center gap-3 text-sm text-white/60 transition-colors hover:text-[#D8B979]"
                >
                  <Mail size={17} className="text-[#D8B979]" />
                  Email Us
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} MOVANTIS. All rights reserved.
            </p>

            <p>Moving Your World Forward.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact MOVANTIS on WhatsApp"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#C6A15B] text-[#102A43] shadow-xl shadow-black/20 transition-all duration-300 hover:scale-110 hover:bg-white"
      >
        <MessageCircle size={25} />
      </motion.a>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071522]/95 px-4 py-8 backdrop-blur-md"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[1000px]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Close video"
                className="absolute -right-1 -top-12 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:-right-12 sm:top-0"
              >
                <X size={22} />
              </button>

              <video
                src={VIDEO_URL}
                controls
                autoPlay
                playsInline
                className="max-h-[75vh] w-full rounded-xl bg-black"
              >
                Your browser does not support HTML video.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Home;
