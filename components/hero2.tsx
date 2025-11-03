import { ArrowDownRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Hero2Props {
  badge?: string;
  heading?: string;
  description?: string;
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
  image?: {
    src: string;
    alt: string;
  };
}

const Hero2 = ({
  badge = "New Release",
  heading = "Blocks built with Shadcn & Tailwind",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  buttons = {
    primary: {
      text: "Primary Button",
      url: "#",
    },
    secondary: {
      text: "Secondary Button",
      url: "#",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "placeholder hero",
  },
}: Hero2Props = {}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="bg-muted flex justify-end">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
            />
          </div>
          <div className="flex flex-col items-center text-center lg:max-w-3xl lg:items-start lg:text-left">
            {badge && (
              <Badge variant="secondary">
                {badge}
                <ArrowDownRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold md:text-5xl">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="secondary" className="w-full sm:w-auto">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowDownRight className="size-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero2 };
