"use client";

// Declaração global do gtag para TypeScript
declare global {
  function gtag(...args: any[]): void;
}

import {
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  BadgeCheck,
  ShieldCheck,
  Clock,
  Star as StarIcon,
  X,
  Menu,
  Blocks,
  MoveRight,
  Wrench,
  Zap,
  Globe,
  Star,
  Bug,
  Bell,
  Sparkles,
  Cpu,
  Database,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoMailOutline,
  IoLocationOutline,
} from "react-icons/io5";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FloatingWhatsappButton } from "@/components/floating-whatsapp-button";

const whatsappNumber = "5519997108660";
const whatsappMessage = encodeURIComponent(
  "Olá! Vi seu site e gostaria de solicitar um orçamento para dedetização."
);

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

const features = [
  {
    title: "Avaliação 5.0 ⭐",
    description: "53 avaliações positivas no Google Meu Negócio.",
    icon: StarIcon,
  },
  {
    title: "Técnicos Certificados",
    description: "Equipe treinada e certificada pela rede BR Pragas.",
    icon: BadgeCheck,
  },
  {
    title: "+20 Anos",
    description: "Mais de duas décadas atuando no controle de pragas.",
    icon: ShieldCheck,
  },
];

const testimonials = [
  {
    name: "Juliana Carvalho",
    role: "Cliente Residencial",
    initials: "JC",
    content:
      "Contratei a Br Pragas Campinas para o combate das baratas de esgoto e fiquei extremamente satisfeita. Equipe atenciosa, aplicação profissional e sem cheiro forte. As baratas simplesmente desapareceram!",
  },
  {
    name: "Adriana Souza",
    role: "Cliente Residencial",
    initials: "AS",
    content:
      "O atendimento foi de excelência, tudo bem explicado antes da aplicação. Tive um bom resultado contra essas baratinhas francesas que são horríveis.",
  },
  {
    name: "Rita Val",
    role: "Cliente Residencial",
    initials: "RV",
    content:
      "Ótimo trabalho, super profissional. Super indico, nota 10!",
  },
  {
    name: "Cesar Dal Maso",
    role: "Cliente Residencial",
    initials: "CD",
    content:
      "Ótimo profissional, transparente, competente e pontual no que faz.",
  },
  {
    name: "Fabio Silva",
    role: "Cliente Residencial",
    initials: "FS",
    content:
      "Contratei o serviço e fiquei surpreso. Henry explicou todo processo com clareza e de fato eliminou todas as formigas de casa. Já faz mais de 4 meses e não tem nenhuma. Ótimo serviço!",
  },
  {
    name: "Cristina Ribeiro",
    role: "Cliente Residencial",
    initials: "CR",
    content:
      "Para quem está em busca de um serviço de qualidade e segurança para toda família, chama BR Pragas Campinas. Serviço espetacular!",
  },
  {
    name: "Eduardo Campos",
    role: "Cliente Residencial",
    initials: "EC",
    content:
      "Podem confiar que é proteção para sua casa garantida. Eu fiz e recomendo!",
  },
  {
    name: "Cristina Souza",
    role: "Cliente Residencial",
    initials: "CS",
    content:
      "Excelente atendimento, rapidez e eficácia!",
  },
  {
    name: "Roberto Oliveira",
    role: "Proprietário de Restaurante",
    initials: "RO",
    content:
      "Sou dono de um restaurante e precisava de uma solução rápida para baratas. A BR Pragas foi a escolha certa! Resolveram tudo com agilidade e discrição.",
  },
  {
    name: "Camila Ferreira",
    role: "Gestora de Logística",
    initials: "CF",
    content:
      "Tínhamos infestação de ratos no galpão da empresa. A BR Pragas foi recomendada e não decepcionou. Serviço impecável!",
  },
  {
    name: "Felipe Fonseca",
    role: "Cliente Residencial",
    initials: "FF",
    content:
      "Contratei para resolver cupins na minha casa e fiquei impressionado. Equipe super profissional e garantia real dos resultados!",
  },
  {
    name: "Ana Paula Santos",
    role: "Cliente Residencial",
    initials: "AS",
    content:
      "Atendimento excelente! Fizeram higienização da caixa d'água e controle de formigas. Muito profissionais e preço justo.",
  },
  {
    name: "Carlos Silva",
    role: "Comerciante",
    initials: "CS",
    content:
      "Problema com escorpiões resolvido rapidamente. Técnicos competentes e atendimento via WhatsApp super ágil!",
  },
  {
    name: "Juliana Costa",
    role: "Cliente Residencial",
    initials: "JC",
    content:
      "Descupinização perfeita! Salvaram meus móveis. Orçamento justo e trabalho bem feito!",
  },
  {
    name: "Marcos Almeida",
    role: "Síndico",
    initials: "MA",
    content:
      "Excelente trabalho na desratização do condomínio. Equipe profissional e resultado imediato. Recomendo muito!",
  },
  {
    name: "Patricia Lima",
    role: "Cliente Residencial",
    initials: "PL",
    content:
      "Fizeram controle de pulgas e carrapatos depois que adotamos um cachorro. Serviço rápido e muito eficiente!",
  },
];

const serviceFeatures = [
  {
    title: "Controle de Cupins",
    description:
      "Descupinização completa com garantia. Proteja sua estrutura e móveis contra danos permanentes.",
    icon: Bug,
  },
  {
    title: "Desratização",
    description:
      "Eliminação segura de ratos e roedores. Técnicas modernas sem risco para pessoas e animais domésticos.",
    icon: ShieldCheck,
  },
  {
    title: "Dedetização Geral",
    description:
      "Controle eficaz de baratas, formigas, aranhas, escorpiões e outros insetos. Produtos aprovados pela ANVISA.",
    icon: Sparkles,
  },
  {
    title: "Higienização",
    description:
      "Limpeza e sanitização de caixas d'água. Atende normas da vigilância sanitária.",
    icon: Database,
  },
  {
    title: "Desentupimento",
    description:
      "Desentupimento de pias, ralos, vasos sanitários, caixas de gordura e tubulações em geral. Atendimento rápido e eficiente.",
    icon: Wrench,
  },
];

const stats = [
  {
    value: "+20",
    label: "Anos de experiência",
    icon: Clock,
  },
  {
    value: "5.0",
    label: "Avaliação Google",
    icon: Star,
  },
];

// Navbar17 - ORIGINAL shadcnblocks adaptado
const NAV_ITEMS = [
  { name: "Depoimentos", link: "#depoimentos" },
  { name: "Serviços", link: "#servicos" },
  { name: "Contato", link: "#contato" },
];

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-full items-center lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80 lg:hidden"
        >
          <ul className="bg-background text-foreground w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <a
                  href={navItem.link}
                  onClick={() => setActiveItem(navItem.name)}
                  className={`text-foreground flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-foreground text-foreground"
                      : "text-muted-foreground hover:text-foreground border-transparent"
                  }`}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Button asChild variant="default">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  onClick={(e) => {
                    e.preventDefault();
                    gtag_report_conversion(
                      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
                    );
                  }}
                >
                  WhatsApp
                </a>
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

function BRPragasNavbar() {
  const [activeItem, setActiveItem] = useState("Início");
  const [isScrolled, setIsScrolled] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4 bg-transparent",
        isScrolled &&
          "py-1 bg-white/70 backdrop-blur-md border-b border-[#cfe9d4] shadow-sm"
      )}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            className={cn(
              "h-12 w-auto object-contain transition-all duration-300",
              isScrolled && "h-9"
            )}
            alt="BR Pragas"
            width={120}
            height={45}
          />
        </a>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href={item.link}
                    data-nav-item={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${
                      activeItem === item.name
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-foreground h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild size="sm" className="h-10 py-2.5 text-sm font-normal">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              onClick={(e) => {
                e.preventDefault();
                gtag_report_conversion(
                  `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
                );
              }}
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </nav>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <BRPragasNavbar />

      <main className="min-h-[100dvh] relative">
        {/* Hero Section - Hero3 ORIGINAL shadcnblocks */}
        <section className="flex items-center overflow-hidden relative py-32 lg:py-0 h-[100dvh]">
          <img
            src="/patterns-circles.svg"
            alt=""
            className="block lg:hidden absolute w-full bottom-0 translate-y-1/2 scale-150 pointer-events-none"
          />
          <img
            src="/patterns-circles.svg"
            alt=""
            className="hidden lg:block absolute right-[-50.25rem] top-[-50.75rem] z-[-1] aspect-square h-auto w-[181.25rem] max-w-none scale-50 pointer-events-none"
          />
          <div className="container min-h-0 lg:min-h-[100dvh] grid grid-rows-1 items-center gap-8 lg:items-stretch lg:grid-cols-2 lg:gap-20">
            <div className="mx-auto flex flex-col items-start text-left md:ml-auto lg:max-w-3xl lg:justify-center">
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Dedetização Profissional em Campinas e Região
              </h1>
              <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                Controle eficaz de cupins, ratos, escorpiões, baratas, formigas,
                aranhas, pulgas, carrapatos e higienização de caixa d'água.
              </p>
              <div className="mb-12 flex w-fit items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-white rounded-full border-2 border-gray-200 shadow-sm">
                  <svg
                    className="h-7 w-7 pointer-events-none"
                    viewBox="0 0 512 512"
                    fill="none"
                  >
                    <path
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      fill="#4285F4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className="size-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="mr-1 font-semibold">5.0</span>
                  </div>
                  <p className="text-muted-foreground text-left font-medium">
                    de 53+ avaliações Google
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col justify-start gap-2 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    onClick={(e) => {
                      e.preventDefault();
                      gtag_report_conversion(
                        `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
                      );
                    }}
                  >
                    Solicitar Orçamento Grátis
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href="tel:+5519997108660">📞 Ligar Agora</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start items-center lg:items-end lg:-translate-x-[15%] max-lg:hidden">
              <Image
                src="/hero.png"
                alt="Técnico BR Pragas Campinas - Dedetização Profissional"
                className="w-full max-w-md lg:w-auto lg:h-[calc(100dvh-120px)] lg:max-w-none rounded-lg lg:rounded-none"
                width={1028}
                height={915}
                priority
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section - Testimonial19 do shadcnblocks */}
        <section id="depoimentos" className="py-32 bg-white">
          <div className="container flex flex-col items-start lg:items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1f4d2b]">
              <svg
                className="h-6 w-6 pointer-events-none"
                viewBox="0 0 512 512"
                fill="none"
              >
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  fill="#4285F4"
                />
              </svg>
              Avaliação 5.0 no Google com 53+ clientes
            </div>
            <h2 className="text-left lg:text-center text-3xl font-semibold lg:text-4xl text-[#1f4d2b]">
              Clientes Satisfeitos em Campinas
            </h2>
            <p className="text-[#2d6941] text-left lg:text-center lg:text-lg">
              Veja o que nossos clientes dizem sobre nosso trabalho profissional
            </p>
            <a
              href="https://www.google.com/maps/place/BR+Pragas+-+Dedetiza%C3%A7%C3%A3o+e+Desratiza%C3%A7%C3%A3o+-+Campinas/@-22.8797915,-47.0933215,17z/data=!4m8!3m7!1s0x94c8cf603bad2a95:0x2ad1e75b33c0e753!8m2!3d-22.8797915!4d-47.0933215!9m1!1b1!16s%2Fg%2F11t6c2c67w"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-semibold text-[#6bbf4b] hover:text-[#4a9f32] transition-colors"
            >
              Ver todas as avaliações no Google
              <ArrowRight className="mt-0.5 h-4 w-auto" />
            </a>
          </div>
          <div className="lg:container">
            <div className="mt-16 space-y-4">
              <Carousel
                opts={{
                  loop: true,
                }}
                plugins={[
                  AutoScroll({
                    startDelay: 500,
                    speed: 0.7,
                  }),
                ]}
                className="before:bg-gradient-to-r before:from-white after:bg-gradient-to-l after:from-white relative before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-36 before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-36 after:to-transparent"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="basis-auto">
                      <Card className="max-w-96 select-none p-6 border-2 border-[#e8f5ea]">
                        <div className="flex justify-between">
                          <div className="mb-4 flex gap-4">
                            <Avatar className="size-14 rounded-full ring-2 ring-[#6bbf4b]/20">
                              <AvatarFallback className="bg-gradient-to-br from-[#6bbf4b] to-[#4a9f32] text-white font-bold">
                                {testimonial.initials}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-[#1f4d2b]">
                                {testimonial.name}
                              </p>
                              <p className="text-[#3a7d4f] text-sm">
                                {testimonial.role}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-1">
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                            <Star className="size-5 fill-amber-500 text-amber-500" />
                          </div>
                        </div>
                        <q className="text-[#2d6941] leading-7">
                          {testimonial.content}
                        </q>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Services Section - Feature230 shadcnblocks */}
        <section id="servicos" className="overflow-hidden py-32 max-lg:py-0">
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-10">
              <div className="lg:col-span-4">
                <h2 className="mb-8 text-balance text-3xl font-semibold lg:text-4xl text-[#1f4d2b]">
                  Nossos Serviços
                </h2>
                <p className="text-muted-foreground text-xl">
                  Oferecemos soluções completas de controle de pragas urbanas
                  com técnicas modernas e produtos certificados. Atendimento em
                  Campinas e região.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6">
                {serviceFeatures.map((feature, idx) => (
                  <div key={idx}>
                    <feature.icon className="size-6 text-[#6bbf4b]" />
                    <h3 className="mt-4 text-lg font-medium text-[#1f4d2b]">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Contact6 shadcnblocks (sem formulário) */}
        <section id="contato" className="bg-background py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              {/* Header */}
              <div className="mb-16 text-left lg:text-center">
                <h2 className="mb-4 text-3xl font-semibold tracking-tight lg:text-4xl">
                  Entre em Contato
                </h2>
                <p className="text-muted-foreground lg:mx-auto max-w-2xl text-lg">
                  Nossa equipe está pronta para atender você. Entre em contato
                  via WhatsApp, telefone ou e-mail e receba um orçamento
                  gratuito.
                </p>
              </div>

              {/* Contact Information */}
              <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
                {/* WhatsApp */}
                <Card className="bg-muted border-0 shadow-none">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="bg-background flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <IoLogoWhatsapp className="size-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">WhatsApp</h3>
                        </div>
                        <p className="text-muted-foreground mb-2 text-sm">
                          Resposta rápida em minutos
                        </p>
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                          onClick={(e) => {
                            e.preventDefault();
                            gtag_report_conversion(
                              `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
                            );
                          }}
                          className="text-sm font-medium transition-colors hover:underline text-[#6bbf4b]"
                        >
                          (19) 9 9710-8660
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="bg-muted border-0 shadow-none">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="bg-background flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <Mail className="size-6 text-[#6bbf4b]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">E-mail</h3>
                        </div>
                        <p className="text-muted-foreground mb-2 text-sm">
                          Resposta rápida por e-mail
                        </p>
                        <a
                          href="mailto:campinas@brpragas.com.br"
                          className="text-sm font-medium transition-colors hover:underline text-[#6bbf4b]"
                        >
                          campinas@brpragas.com.br
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="bg-muted border-0 shadow-none">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="bg-background flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <Phone className="size-6 text-[#6bbf4b]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Telefone</h3>
                        </div>
                        <p className="text-muted-foreground mb-2 text-sm">
                          Atendimento direto - Segunda a Domingo
                        </p>
                        <a
                          href="tel:+5519997108660"
                          className="text-sm font-medium transition-colors hover:underline text-[#6bbf4b]"
                        >
                          (19) 9 9710-8660
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-muted border-0 shadow-none">
                  <CardContent>
                    <div className="flex items-start gap-4">
                      <div className="bg-background flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg">
                        <MapPin className="size-6 text-[#6bbf4b]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex items-center gap-2">
                          <h3 className="font-semibold">Endereço</h3>
                        </div>
                        <p className="text-muted-foreground mb-2 text-sm">
                          Visite nossa unidade em Campinas
                        </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Rua+Andrea+Fernandes+da+Silva+Araújo,+444+Jardim+Tamoio+Campinas+SP"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium transition-colors hover:underline text-[#6bbf4b]"
                        >
                          Rua Andrea Fernandes da Silva Araújo, 444 - Jardim
                          Tamoio, Campinas - SP
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Copyright Footer */}
              <Separator className="my-12" />
              <div className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    BR Pragas Campinas
                  </span>{" "}
                  - CNPJ: 52.222.432/0001-40
                </p>
                <p className="text-sm text-muted-foreground">
                  © 2025 Todos os direitos reservados • Unidade Franqueada -{" "}
                  <a
                    href="https://www.brpragas.com.br"
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    BR Pragas Nacional
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsappButton />
    </>
  );
}
