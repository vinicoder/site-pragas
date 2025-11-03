import { Blocks, MoveRight, Wrench, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface Hero25Props {
  className?: string;
  badge?: string;
  heading?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  logo?: {
    src: string;
    alt: string;
  };
}

const Hero25 = ({
  className,
  badge = "SYSTEMS",
  heading = "A system crafted for team success and growth",
  buttons = {
    primary: {
      text: "Get started",
      url: "#",
    },
    secondary: {
      text: "Read the docs",
      url: "#",
    },
  },
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-4.svg",
    alt: "placeholder",
  },
}: Hero25Props = {}) => {
  return (
    <section className={cn("py-20 md:py-28 lg:py-36", className)}>
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <img
            src={logo.src}
            alt={logo.alt}
            className="mx-auto mb-6 w-14 md:mb-8 md:w-20 lg:mb-10 lg:w-24"
          />
          <span className="text-muted-foreground mb-2 inline-block text-sm font-medium uppercase tracking-wider md:text-base">
            {badge}
          </span>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-7xl lg:leading-[1.1]">
            {heading}
          </h1>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            {buttons.primary && (
              <Button asChild size="lg" className="px-8 py-6 text-base font-medium">
                <a href={buttons.primary.url}>
                  {buttons.primary.text}
                  <MoveRight className="ml-2 size-5" strokeWidth={1.5} />
                </a>
              </Button>
            )}
            {buttons.secondary && (
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-base font-medium"
              >
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <MoveRight className="ml-2 size-5" strokeWidth={1.5} />
                </a>
              </Button>
            )}
          </div>
          <div className="mt-10 lg:mt-12">
            <ul className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm lg:text-base">
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <Zap className="text-primary size-5" />
                Quick setup guide
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <Blocks className="text-primary size-5" />
                Fully customizable
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap">
                <Wrench className="text-primary size-5" />
                Easy to use components
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero25 };
