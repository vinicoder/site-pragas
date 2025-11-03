import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Hero8Props {
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

const Hero8 = ({
  heading = "Build faster with Shadcnblocks",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
  buttons = {
    primary: {
      text: "Get started now",
      url: "#",
    },
    secondary: {
      text: "Learn more",
      url: "#",
    },
  },
  image = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "placeholder",
  },
}: Hero8Props = {}) => {
  return (
    <section className="py-32">
      <div className="border-muted overflow-hidden border-b">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h1 className="mb-8 text-pretty text-4xl font-semibold lg:text-7xl">
                {heading}
              </h1>
              <p className="text-muted-foreground mx-auto max-w-3xl lg:text-xl">
                {description}
              </p>
              <div className="mt-12 flex w-full flex-col justify-center gap-2 sm:flex-row">
                {buttons.primary && (
                  <Button asChild>
                    <a href={buttons.primary.url}>
                      {buttons.primary.text}
                      <ChevronRight className="ml-2 h-4" />
                    </a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button asChild variant="secondary">
                    <a href={buttons.secondary.url}>
                      {buttons.secondary.text}
                      <ChevronRight className="ml-2 h-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
          <img
            src={image.src}
            alt={image.alt}
            className="mx-auto mt-24 max-h-[700px] w-full max-w-7xl rounded-t-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero8 };
