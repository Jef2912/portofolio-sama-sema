"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logos3Props {
  text?: string;
  className?: string;
}

const Logos3 = ({
  text = "#SAMASEMATES",
  className,
}: Logos3Props) => {
  // Create an array of 12 items to ensure the marquee fills the screen smoothly
  const items = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className={`py-4 bg-[#FFD60A] border-y-4 border-[#0d0d0d] overflow-hidden ${className || ''}`}>
      <div className="relative w-full flex items-center">
        <Carousel
          opts={{ loop: true, dragFree: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1.5 })]}
          className="w-full"
        >
          <CarouselContent className="ml-0 flex">
            {items.map((index) => (
              <CarouselItem
                key={index}
                className="pl-0 basis-auto shrink-0 flex items-center justify-center px-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xl md:text-3xl font-black text-[#0d0d0d] tracking-widest uppercase italic">
                    {text}
                  </span>
                  <span className="text-2xl text-[#0d0d0d] font-black">✦</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export { Logos3 };
