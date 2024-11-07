"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import {projectData} from '../../Data/ProjectsData'

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setcategories] = useState(uniqueCategories);
  const [category, setcategory] = useState("all projects");
  const x = projectData.filter(project =>{
    return category === 'all projects' ? project : project.category === category
  })

  const miscProjects = [
    {
      name: "Vietnam Travel Guide: Explore Vietnam With Insider Travel Tips",
      link: 'https://docs.google.com/document/d/1RRXwdEKX-uzb-crj-6IoR1b1k_N3-MAW/edit?usp=drivesdk&ouid=103176824583418288259&rtpof=true&sd=true',
      github: "/",
    },
    {
        name: "The Changing Landscape of Abroad Education Post-COVID-19",
        link: "https://docs.google.com/document/d/1xRV8xtOuWF1ZLCK9miTgjotkVj14mwYkDGT-R-v4COE/edit?usp=drivesdk",
        github: "/",
      },
      {
        name: "Sustainable Retail : How Eco-Friendly Practices Are Shaping Consumer Choices",
        link: "https://docs.google.com/document/d/1b0zRaVCeJug78meu2KGze7C50IJIbFUjl6cuH0oqTc8/edit?usp=drivesdk",
        github: "/",
      },
    ];
  console.log(miscProjects)
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          <Reveal>Miscellaneous Projects</Reveal>
        </h2>

        {/* tabs  */}

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          {/* <TabsList className={`w-full grid h-full md:grid-cols-${categories.length} lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none`}>
            {categories.map((item, index) => {
              return (
                <TabsTrigger
                onClick={()=> setcategory(item)}
                  value={item}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {item}
                </TabsTrigger>
              );
            })}
          </TabsList> */}

          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {miscProjects.map((project,index)=>{
              return <TabsContent value={category} key={index} >
                <ProjectCard project={project} showBadge={false}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
