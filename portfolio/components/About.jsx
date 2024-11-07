import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress"


import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Vishal Meti",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 9902638798",
  },
  {
    icon: <MailIcon size={20} />,
    text: "work.vishalmeti@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 11 Jan, 2001",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bachelors Degree in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bangalore, India",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "SDM College of Engineering and Technology",
        qualification: "BE / BTech in Computer Science",
        years: "2018-2022",
        grade: "8.02 CGPA",
      },
      {
        university: "Scaler",
        qualification: "Programing and Upskilling",
        years: "2022-2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "LINARC",
        role: "SDE - 1 / Full Stack Developer",
        years: "Aug 2024 - Current",
        logo:'/Experience/linarc.png'
      },
      {
        company: "SONY",
        role: "Software Engineer / Web Developer",
        years: "Aug 2022 - Aug 2023",
        logo:'/Experience/sony.png'
      },
      {
        company: "Disprz",
        role: "Associate Software Engineer / Web Developer",
        years: "Aug 2023 - Aug 2024",
        logo:'/Experience/disprz.png'
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "React Js / Redux",
        strength:90
      },
      {
        name: "Vue js / Nuxt js",
        strength: 90
      },
      {
        name: "Django",
        strength:85
      },
      {
        name: "Next Js",
        strength:65
      },
      {
        name: "Python",
        strength:90
      },
      {
        name: "Lit Js",
        strength:90
      },
      {
        name: "JavaScript",
        strength:80
      },
      {
        name: "FrontEnd Developement",
        strength:80
      },
      {
        name: "Git / Version control",
        strength:62
      },
      {
        name: "Express.js",
        strength:35
      },
      {
        name: "Mongo Db",
        strength:40
      },
      {
        name: "HTML / CSS",
        strength:90
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-full pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 mt-10 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row items-center">
          <div className="flex">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  My Technical Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal  */}

                <TabsContent value="personal">
                  <div className="flex gap-44">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Worked for over 3 years
                    </h3>
                    <p className="subtitle max-w-lg max-auto xl:mx-0">
                    I have spent over 3 years in the corporate world, gaining valuable technological expertise and honing my skills through real-world applications
                    </p>
                    {/* icons  */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center fap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div className="">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* language  */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div className="">
                        English, Hindi, Kannada, Malayalam, Tamil{" "}
                      </div>
                    </div>
                  </div>

                  {/* image  */}

                  <div className="hidden mb-10 xl:flex">
                    <Image className="mb-5" height={600} width={420} src={'/hero/PersonalData.png'} />
                  </div>
                  </div>
                </TabsContent>

                {/* qualification  */}

                <TabsContent value="qualification">
                  
                  <div className="flex">
                  <div className="">
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    <p className="subtitle max-w-lg max-auto xl:mx-0">
                    In my two-year journey as a software engineer, I've grown from my early experiences to tackling complex projects, continuously improving both technical and soft skills.<br/> Embracing challenges as opportunities, I'm eager to leverage my experiences to contribute meaningfully to future projects and teams.
                    </p>
                    {/* experience and education wrapper  */}
                    <div className=" flex flex-col xl:flex-row">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { company, role, years,logo } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group rounded-md "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[84px] relative ml-2">
                                  <Image id='' src={logo} className="pt-1 rounded-md" fill priority alt=''/>
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="">{years}</div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* education  */}
                      <div className="flex flex-col mt-3 xl:mt-0 gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list  */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years,grade } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group rounded-md "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="">
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className=" text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="">{years}</div>
                                    <div className="">{grade}</div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden mb-10 xl:flex">
                    <Image className="mb-5" height={200} width={450} src={'/Experience/experience.png'} />
                  </div>
                  </div>
                </TabsContent>

                {/* skill  */}

                <TabsContent value="skills">
                  <div className="flex gap-32">

                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-3">
                      Skills I am well versed in
                    </h3>
                    <div className="">
                      <div className="border-b border-border mb-4"></div>
                          {/* skill list  */}
                          <div className="flex flex-col gap-2">
                            {getData(skillData,'skills').data.map((skill,index)=>{
                              return(
                                <>
                                <div className="w-full h-full gap-2 flex items-center text-left xl:text-left mx-auto xl:mx-0" key={index}>
                                <div className="w-[11px] h-[11px] rounded-full bg-primary"></div>
                                  {skill.name}
                                </div>
                                  <Progress value={skill.strength} />
                                </>
                              )
                            })}
                          </div> 
                    </div>
                  </div>

                  <div className="hidden mb-10 xl:flex">
                            <Image className="mb-5" height={600} width={800} src={'/Experience/technology.png'} />
                  </div>
                  </div>
                  
                  
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
