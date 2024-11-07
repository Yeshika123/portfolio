"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";
import ProjectCard from "./ui/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {projectData} from '../Data/ProjectsData'


const Work = () => {
  return (
    // <section className="relative mb-12 xl:mb-48 ">
    //   <div className="container mx-auto">
    //     <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
    //       <h2 className="section-title mb-4">Latest Projects</h2>
    //       <p className="subtitle mb-8">
    //       Please feel free to peruse my recent projects to gain insight into my latest endeavors and contributions.
    //       </p>
    //       <Link href="/projects">
    //         <Button>All Projects</Button>
    //       </Link>
    //     </div>

    //     {/* slider  */}
    //     <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
    //       <Swiper
    //         className="h-[480px]"
    //         slidesPerView={1}
    //         breakpoints={{
    //           640: {
    //             slidesPerView: 2,
    //           },
    //         }}
    //         spaceBetween={30}
    //         modules={[Pagination]}
    //         pagination={{ clickable: true }}
    //       >
    //         {/* show only first 4 projects  */}
    //         {projectData.slice(0, 4).map((project, index) => {
    //           return (
    //             <SwiperSlide>
    //               <ProjectCard project={project} showBadge={true} />
    //             </SwiperSlide>
    //           );
    //         })}
    //       </Swiper>
    //     </div>
    //   </div>
    // </section>
    <></>
  );
};

export default Work;
