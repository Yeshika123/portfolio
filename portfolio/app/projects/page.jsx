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
  const filteredProjects = projectData.filter(project =>{
    return category === 'all projects' ? project : project.category === category
  })

  console.log(filteredProjects)
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          <Reveal>My Projects</Reveal>
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
            {filteredProjects.map((project,index)=>{
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
