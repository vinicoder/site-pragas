"use client";

// Declaração global do gtag para TypeScript
declare global {
  function gtag(...args: any[]): void;
}

import { IoLogoWhatsapp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";

// Event snippet for Solicitação Orçamento WhatsApp conversion page
// Código EXATAMENTE como fornecido pelo Google Ads (2025)
function gtag_report_conversion(url?: string) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location.href = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-17698807037/YN0cCM_OkLkbEP25ufdB",
    value: 1.0,
    currency: "BRL",
    event_callback: callback,
  });
  return false;
}

export function FloatingWhatsappButton() {
  const whatsappNumber = "5519997108660";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi seu site e gostaria de solicitar um orçamento."
  );

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    gtag_report_conversion(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    );
  };

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Botão Principal */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_60px_rgba(37,211,102,0.6)] animate-bounce-slow">
          <IoLogoWhatsapp className="h-9 w-9 text-white" />
        </div>

        {/* Anel Pulsante */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none">
        Fale conosco no WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </a>
  );
}
