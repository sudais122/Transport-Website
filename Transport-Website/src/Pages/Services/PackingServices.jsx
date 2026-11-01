
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Package,
  Boxes,
  ShieldCheck,
  Truck,
  Check,
} from "lucide-react";

const WHATSAPP_NUMBER = "971503023907";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello MOVANTIS, I would like to enquire about your packing services."
)}`;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85";

const PACKING_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85";

const packingServices = [
  {
    icon: Package,
    title: "Household Packing",
    text: "Packing support for household belongings, furniture, and everyday essentials.",
  },
  {
    icon: Boxes,
    title: "Carton Packing",
    text: "Organising and packing belongings into suitable cartons for transportation.",
  },
  {
    icon: ShieldCheck,
    title: "Fragile Item Packing",
    text: "Additional care when preparing delicate items and breakables for moving.",
  },
  {
    icon: Truck,
    title: "Moving Preparation",
    text: "Preparing packed belongings for a more organised relocation process.",
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function PackingServices() {
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      delay: reduceMotion ? 0 : delay,
      ease,
    },
  });

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative isolate flex min-h-[380px] items-center justify-center overflow-hidden bg-[#0B1F33] pt-[110px] sm:min-h-[440px] lg:min-h-[500px]">
        <motion.div
          initial={reduceMotion ? false : { scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease }}
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
        />

        <div className="absolute inset-0 -z-10 bg-[#0B1F33]/65" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0B1F33]/90 via-[#0B1F33]/50 to-transparent" />

        <motion.div
          {...fadeUp(0)}
          className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 sm:px-10 lg:px-16"
        >
          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center gap-3 text-sm font-semibold text-white/70"
          >
            <a href="/" className="hover:text-[#D8B979]">
              Home
            </a>
            <span className="text-[#C6A15B]">/</span>
            <span className="text-[#D8B979]">Packing Services</span>
          </nav>

          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C6A15B]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D8B979]">
              MOVANTIS SERVICES
            </span>
          </div>

          <h1 className="max-w-[750px] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Professional
            <span className="block text-[#D8B979]">
              Packing Services.
            </span>
          </h1>

          <p className="mt-7 max-w-[590px] text-sm leading-8 text-white/75 sm:text-base">
            Helping prepare your household and business belongings
            for relocation with organised packing and careful handling.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-[54px] items-center gap-3 rounded-full bg-[#C6A15B] px-8 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
          >
            Enquire About Packing
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>

      {/* PACKING INTRODUCTION */}
      <section className="overflow-hidden bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-3xl border-2 border-[#C6A15B]/50" />

            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#102A43]/10">
              <img
                src={PACKING_IMAGE}
                alt="Residential interior"
                className="h-[350px] w-full object-cover sm:h-[470px]"
              />
            </div>

            <div className="absolute -right-3 bottom-8 flex items-center gap-3 rounded-2xl bg-[#102A43] px-5 py-4 text-white shadow-xl sm:-right-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C6A15B] text-[#102A43]">
                <Package size={21} />
              </span>
              <span>
                <span className="block text-sm font-extrabold">
                  Packing Support
                </span>
                <span className="block text-xs text-[#D8B979]">
                  Preparing Your Move
                </span>
              </span>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#A47C3C]">
                PACKING SOLUTIONS
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Preparing Your Belongings for a Smooth Move.
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#627D98] sm:text-base">
              Packing is an important part of any relocation. Proper
              preparation helps organise your belongings and makes
              transportation easier to manage.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#627D98] sm:text-base">
              MOVANTIS provides packing assistance for household
              belongings, furniture, fragile items, and everyday
              essentials. Our packing approach can be discussed
              according to your moving requirements.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Household belongings and furniture",
                "Carton and box packing",
                "Fragile item preparation",
                "Packing for residential and office moves",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C6A15B]/15 text-[#A47C3C]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold text-[#243B53]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PACKING SERVICE AREAS */}
      <section className="bg-[#F5F7FA] px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <motion.div
            {...fadeUp(0)}
            className="mx-auto max-w-[700px] text-center"
          >
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#A47C3C]">
                OUR PACKING SERVICES
              </span>
              <span className="h-px w-10 bg-[#C6A15B]" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Packing Solutions for Your Needs.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#627D98]">
              Packing assistance for different belongings and
              relocation requirements.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {packingServices.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                {...fadeUp(index * 0.1)}
                whileHover={reduceMotion ? undefined : { y: -8 }}
                className="group rounded-2xl border border-[#D9E2EC] bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#102A43] text-[#D8B979] transition-colors group-hover:bg-[#C6A15B] group-hover:text-[#102A43]">
                  <Icon size={25} />
                </div>

                <h3 className="mt-7 text-lg font-extrabold text-[#102A43]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#627D98]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#102A43] px-6 py-20 text-center sm:px-10 lg:px-16 lg:py-24">
        <motion.div {...fadeUp(0)} className="mx-auto max-w-[750px]">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-9 bg-[#C6A15B]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D8B979]">
              LET'S GET MOVING
            </span>
            <span className="h-px w-9 bg-[#C6A15B]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Need Help with Packing?
          </h2>

          <p className="mt-6 text-sm leading-8 text-white/65">
            Contact MOVANTIS to discuss your packing requirements
            and plan the next step of your relocation.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-[54px] items-center gap-3 rounded-full bg-[#C6A15B] px-8 text-sm font-extrabold text-[#102A43] transition-all hover:-translate-y-1 hover:bg-white"
          >
            <MessageCircle size={18} />
            Contact Us on WhatsApp
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </section>
    </>
  );
}
