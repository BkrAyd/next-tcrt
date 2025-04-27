"use client"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselList } from "@/constans";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"

const Hero = () => {
  return (
    <div>
      <Carousel 
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{align: "start", loop: true}}>
        <CarouselContent>
          {CarouselList.map((item) => (
            <CarouselItem key={item.id}>
                <Image alt="slider" src={item.image} width={1920} height={1080}
                className="h-96 object-cover md:h-[450px] lg:h-[520px]"/>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0"/>
        <CarouselNext className="right-0"/>
      </Carousel>
    </div>
  );
};

export default Hero;
