"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { motion } from "framer-motion";

import {
  RiBriefcase4Fill,
  RiYoutubeFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Reveal from "./ui/Reveal";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";
import { ResumeLink } from "@/Data/Links";
import { projectData } from "@/Data/ProjectsData";


const Me = () => {
  const [showArrow, setshowArrow] = useState(true);
  useEffect(() => {
    const listner = window.addEventListener("scroll", () => {
      window.scrollY > 140 ? setshowArrow(false) : setshowArrow(true);
    });

    return () => {
      window.addEventListener("scroll", listner);
    };
  }, []);

  return (
    <section className="py-12 xl:py-24 xl:pt-28 bg-curve bg-no-repeat bg-bottom bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center md:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              <div className="">
                <h1 class="">Web developer</h1>
              </div>
            </div>
            <h1 className="h1 mb-4">
              Hello, my name is <Reveal>Vishal Meti </Reveal>
            </h1>
            <p className="subtitle max-w-[490px] mx-auto lg:mx-0">
              I am a software developer from Bangalore, India with 3 Years of experience and worked with multiple tech stacks in companies like SONY and Disprz
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Link target="_blank" href={ResumeLink}>
              <Button variant="secondary" className="gap-x-2">
                View Resume <Download size={18} />
              </Button>
              </Link>
            </div>

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[30px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative floating">
            <Badge className="" icon={<RiBriefcase4Fill/>} containerStyles='absolute top-[24%] left-[-5rem]' endCount={2} endCountText='+' badgeText='Years of experience' />
            <Badge className="" icon={<RiTodoFill/>} containerStyles='absolute top-[80%] left-[1rem]' endCount={projectData.length} endCountText='' badgeText='Finished Projects' />
            <Badge className="" icon={<RiYoutubeFill/>} containerStyles='absolute top-[55%] right-[-3rem]' endCount={1240} endCountText='k' badgeText='Viewers' />
            <div
              className="bg-hero_shape2_light zi--1 dark:bg-hero_shape2_dark w-[500px] z-0 h-[500px] bg-no-repeat absolute -top-1 -right-2"
              // style={{ "z-index": "-1" }}
            ></div>
            <DevImg
              containerStyles="bg-hero_shape  dark:bg-hero_shape_dark w-[510px] h-[462px] bg-no-repeat"
              imgSrc="/hero/meFinal1.png"
            />
          </div>
        </div>
        <div className="xl:flex hidden absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          {showArrow && <RiArrowDownSLine className="text-6xl text-primary" />}
        </div>
      </div>
    </section>
  );
};

export default Me;
