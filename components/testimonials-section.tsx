import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { IoStar } from "react-icons/io5";

const testimonials = [
  {
    name: "Roberto Oliveira",
    initials: "RO",
    rating: 5,
    text: "Sou dono de um restaurante e precisava de uma solução rápida para um problema com baratas. A BR Pragas foi a escolha certa! Resolveram tudo com agilidade e discrição, sem prejudicar o funcionamento do meu negócio. Desde então, não tive mais problemas. Recomendo!",
    date: "Há 2 meses"
  },
  {
    name: "Camila Ferreira",
    initials: "CF",
    rating: 5,
    text: "Tínhamos uma infestação de ratos no galpão da nossa empresa, e isso estava prejudicando nossos estoques. A BR Pragas foi recomendada por um amigo, e não decepcionou. O serviço foi impecável, e ainda recebemos dicas para prevenir novos problemas. Equipe especializada!",
    date: "Há 1 mês"
  },
  {
    name: "Felipe Fonseca",
    initials: "FF",
    rating: 5,
    text: "Contratei a BR Pragas para resolver um problema com cupins na minha casa e fiquei impressionado com o serviço. A equipe foi super profissional, explicou todo o processo e garantiu que a infestação fosse eliminada de vez. Recomendo a todos!",
    date: "Há 3 semanas"
  },
  {
    name: "Ana Paula Santos",
    initials: "AS",
    rating: 5,
    text: "Atendimento excelente! Fizeram a higienização da caixa d'água e o controle de formigas na minha casa. Muito profissionais, pontuais e o preço justo. Já virou minha dedetizadora de confiança!",
    date: "Há 1 semana"
  }
];

export function TestimonialsSection() {
  return (
    <section className="w-full py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1f4d2b] mb-2">
          O Que Nossos Clientes Dizem
        </h2>
        <p className="text-[#2d6941]">
          Avaliação 5.0 ⭐ no Google com 43 avaliações
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="border border-[#cfe9d4] bg-white/95 p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              <Avatar className="h-12 w-12 border-2 border-[#6bbf4b]">
                <AvatarFallback className="bg-gradient-to-br from-[#6bbf4b] to-[#4a9f32] text-white font-semibold">
                  {testimonial.initials}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-[#1f4d2b]">
                    {testimonial.name}
                  </h3>
                  <span className="text-xs text-[#3a7d4f]">
                    {testimonial.date}
                  </span>
                </div>

                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IoStar
                      key={i}
                      className="h-4 w-4 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-sm text-[#2d6941] leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.google.com/search?q=br+pragas+campinas#mpd=~3083268162326719619/customers/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#4285f4] hover:text-[#3367d6] font-medium transition-colors"
        >
          Ver todas as 43 avaliações no Google
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

