"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./card";
import { Github, Link2Icon, Terminal } from "lucide-react";
import  {Badge}  from "./badge";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Reveal from "./Reveal";
import { Toaster, toast } from "sonner";
import {AlertDialogDemo } from "@/components/ui/alert";

const ProjectCard = ({ project, showBadge }) => {
  return (
    <>
      <Card>
        <CardHeader className="group overflow-hidden relative p-1">
          {/* image  */}
          <div className="relative w-full h-[100px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 bg-work_project_bg_light bg-[50%] lg:bg-[110%] bg:no-repeat overflow-hidden">
            {/* <Image
              className="absolute botom-0 shadow-2xl rounded-[15px]"
              src={project.image}
              width={247}
              height={250}
              alt="project ui"
              property
            /> */}

            {/* btns  */}
            <div className="flex gap-x-4">
              <Link
                href={project.link}
                target={project.link !== "/" ? "_blank" : ""}
                onClick={(e) => {
                  project.link === "/" ? e.preventDefault() : ""
                }}
                className="bg-black dark:bg-secondary w-[104px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
              >
                <AlertDialogDemo show={project.link === "/"} linkOf={'Hosted'} >
                <span className="text-white">
                  Link
                  </span>
                   &nbsp; <Link2Icon className="text-white" />
                </AlertDialogDemo>
              </Link>
              {/* <Link
                href={project.github}
                target={project.github !== '/'?"_blank":''}
                onClick={(e) => {
                  project.github === "/" ? e.preventDefault() : ""
                }}
                className="bg-black dark:bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                >
                <AlertDialogDemo show={project.github === "/"} linkOf={'Github'} >
                <GitHubLogoIcon
                  className="text-white "
                  width={50}
                  height={50}
                />
                </AlertDialogDemo>
              </Link> */}
            </div>
          </div>
        </CardHeader>
        <div className="h-full px-8 py-4">
          <Badge
            className={`uppercase text-sm font-medium mb-2 absolute top-4 left-5  ${
              showBadge ? "" : "hidden"
            }`}
          >
            {project.category}
          </Badge>
          <h4 className="h4 mb-1">
            {" "}
            <Reveal>{project.name}</Reveal>
          </h4>
          <p className="text-muted-foreground text-lg">{project.description}</p>
        </div>
      </Card>
      <Toaster position="top-center" richColors />
    </>
  );
};

export default ProjectCard;
