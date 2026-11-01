import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const PHONE_NUMBER = "0503023907";
const WHATSAPP_NUMBER = "971503023907";

const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello MOVANTIS, I would like to enquire about your moving services."
)}`;

export default function Header() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[60] h-10 border-b border-white/10 bg-[#081827]"
    >
      <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Tagline (hidden on small screens) */}
        <span className="hidden text-[11px] font-semibold tracking-[0.2em] text-[#C6A15B] sm:block">
          MOVING YOUR WORLD FORWARD
        </span>

        {/* Contact */}
        <div className="ml-auto flex items-center gap-4">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center gap-2 text-xs font-bold tracking-wide text-white transition-colors hover:text-[#D8B979]"
          >
            <Phone size={14} className="text-[#C6A15B]" />
            {PHONE_NUMBER}
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#C6A15B] px-3 py-1 text-xs font-extrabold text-[#102A43] transition-colors hover:bg-white"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}