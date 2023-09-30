"use client";

import Image from "next/image";
import { CustomButton } from ".";
import { generateCarImageUrl } from "@/utils";
import { randomInt } from "crypto";
const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car -- qucikly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={generateCarImageUrl(
              {
                city_mpg: 18,
                class: "small sport utility vehicle",
                combination_mpg: 20,
                cylinders: 6,
                displacement: 3,
                drive: "awd",
                fuel_type: "gas",
                highway_mpg: 23,
                make: "hyundai",
                model: "Santa Fe Awd",
                transmission: "a",
                year: Math.floor(Math.random() * 23) + 2000,
              },
              "19"
            )}
            alt="hero"
            fill
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
