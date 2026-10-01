import { whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BnHive on WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/25 transition hover:scale-105"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-30 motion-reduce:hidden" />
      <WhatsAppIcon className="relative h-7 w-7" />
    </a>
  );
}
