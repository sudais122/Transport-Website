
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Home,
  Package,
  Truck,
} from "lucide-react";

const WHATSAPP_NUMBER = "971503023907";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello MOVANTIS, I would like to enquire about your house moving services."
)}`;

const movingServices = [
  {
    icon: Package,
    title: "Household Packing",
    description:
      "Packing support for household belongings, furniture, kitchen items, and everyday essentials.",
  },
  {
    icon: Boxes,
    title: "Careful Item Handling",
    description:
      "Organised handling of furniture, fragile belongings, and other household items during relocation.",
  },
  {
    icon: Truck,
    title: "Home Transportation",
    description:
      "Transportation of your household belongings from your current home to your new destination.",
  },
  {
    icon: Home,
    title: "Unpacking & Setup",
    description:
      "Assistance with unpacking and arranging furniture and household items at your new home.",
  },
];

const movingSteps = [
  "Discuss your moving requirements",
  "Plan the packing and moving arrangements",
  "Pack and prepare household belongings",
  "Transport items to your new home",
  "Assist with unpacking and furniture setup",
];

export default function HouseMoving() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: reduceMotion ? 0 : 0.7 },
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[380px] items-center overflow-hidden bg-[#0B1F33] sm:min-h-[440px] lg:min-h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-[#0B1F33]/65" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0B1F33]/95 via-[#0B1F33]/65 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8 }}
            className="max-w-[760px]"
          >
            <div className="mb-10 flex items-center gap-3 text-xs font-semibold text-white/60">
              <a href="/" className="transition-colors hover:text-[#D8B979]">
                Home
              </a>
              <span className="text-[#C6A15B]">/</span>
              <a
                href="/services/moving"
                className="transition-colors hover:text-[#D8B979]"
              >
                Moving Services
              </a>
              <span className="text-[#C6A15B]">/</span>
              <span className="text-[#D8B979]">House Moving</span>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#C6A15B]" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D8B979]">
                MOVANTIS HOUSE MOVING
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
              House Moving
              <span className="mt-2 block text-[#D8B979]">
                Made Simpler.
              </span>
            </h1>

            <p className="mt-7 max-w-[590px] text-sm leading-8 text-white/75 sm:text-base">
              Moving to a new home? MOVANTIS provides house moving, packing,
              transportation, and relocation support to help organise your
              move from start to finish.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-[54px] items-center gap-3 rounded-full bg-[#C6A15B] px-8 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-white"
            >
              Get a Moving Quote
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div {...reveal}>
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
              alt="Comfortable modern home interior"
              className="h-[350px] w-full rounded-2xl object-cover sm:h-[450px]"
            />
          </motion.div>

          <motion.div {...reveal}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C6A15B]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#A47C3C]">
                RESIDENTIAL RELOCATION
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Your Home Moving Partner in the UAE.
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#627D98] sm:text-base">
              Relocating your home involves more than transporting furniture.
              From personal belongings and kitchen items to larger household
              furniture, every part of the move needs proper planning and
              organisation.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#627D98] sm:text-base">
              MOVANTIS offers house moving and packing services designed around
              your requirements. We can assist with preparing your belongings,
              packing, transportation, unpacking, and furniture arrangement at
              your new residence.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 text-sm font-extrabold text-[#102A43] transition-colors hover:text-[#B48A49]"
            >
              Discuss Your Move
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F7FA] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1280px]">
          <motion.div {...reveal} className="mx-auto mb-14 max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#C6A15B]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#A47C3C]">
                OUR HOUSE MOVING SERVICES
              </span>
              <span className="h-px w-9 bg-[#C6A15B]" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              Support for Every Part of Your Move.
            </h2>

            <p className="mt-5 text-sm leading-8 text-[#627D98] sm:text-base">
              Moving assistance for the practical details involved in
              relocating your household.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {movingServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.6,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  className="group rounded-2xl border border-[#E5EAF0] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C6A15B]/50 hover:shadow-xl hover:shadow-[#102A43]/5"
                >
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#102A43] text-[#D8B979] transition-colors group-hover:bg-[#C6A15B] group-hover:text-[#102A43]">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-extrabold text-[#102A43]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#627D98]">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moving Process */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-2 lg:gap-24">
          <motion.div {...reveal}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-9 bg-[#C6A15B]" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#A47C3C]">
                HOW WE HELP
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl lg:text-5xl">
              A More Organised Way to Move Home.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#627D98] sm:text-base">
              Every household move has different requirements. We work with
              you to understand your moving needs and organise the services
              required for your relocation.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-[54px] items-center gap-3 rounded-full bg-[#102A43] px-7 text-sm font-bold text-white transition-all hover:bg-[#C6A15B] hover:text-[#102A43]"
            >
              Plan Your House Move
              <ArrowRight size={17} />
            </a>
          </motion.div>

          <motion.div {...reveal}>
            <div className="space-y-6">
              {movingSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F5F0E6] text-sm font-extrabold text-[#A47C3C]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="flex-1 border-b border-[#E5EAF0] pb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        size={17}
                        className="shrink-0 text-[#C6A15B]"
                      />
                      <h3 className="text-sm font-bold text-[#102A43] sm:text-base">
                        {step}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Locations */}
      <section className="bg-[#102A43] px-6 py-16 sm:px-10 lg:px-16">
        <motion.div
          {...reveal}
          className="mx-auto max-w-[1000px] text-center"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#D8B979]">
            MOVANTIS MOVING LOCATIONS
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            House Moving Across the UAE.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">
            Contact our team about your house relocation requirements in Abu
            Dhabi, Dubai, Ajman, Sharjah, and Al Ain.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
        <motion.div
          {...reveal}
          className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 rounded-3xl bg-[#F5F7FA] p-8 sm:p-12 lg:flex-row lg:items-center lg:p-16"
        >
          <div className="max-w-2xl">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[#A47C3C]">
              READY FOR YOUR NEXT MOVE?
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#102A43] sm:text-4xl">
              Let's Make Your House Move Easier.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#627D98]">
              Tell us about your move and the services you need. Our team is
              ready to discuss your requirements.
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[56px] shrink-0 items-center gap-3 rounded-full bg-[#C6A15B] px-8 text-sm font-extrabold text-[#102A43] transition-all duration-300 hover:-translate-y-1 hover:bg-[#102A43] hover:text-white"
          >
            Enquire on WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </section>
    </>
  );
}
