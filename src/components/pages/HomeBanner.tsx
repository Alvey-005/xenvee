import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";
import BlurFade from "../ui/blur-fade";
import personaPageData from "@/app/data/persona";
import parse from "html-react-parser";
const HomeBanner = () => {
  return (
    <section
      className="section-wrapper flex flex-col lg:flex-row w-[90%] md:w-[80%] mx-auto gap-4 md:gap-0 lg:mb-16"
      id="persona"
    >
      <div className="lg:w-3/5 order-2 lg:order-1 ">
        <MyDetails />
      </div>
      <div className="relative lg:w-2/5 flex justify-center lg:justify-end  items-center order-1 lg:order-2">
        <Image
          className="rounded-full border-4 border-dotted border-black bg-earth-300 md:mt-20"
          src="/Xenvee_cool.png"
          alt="Xenvee Barua"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
};

interface StaticHeightBoxProps {
  children?: ReactNode;
}
const BLUR_FADE_DELAY = 0.5;
const TabDeatils: React.FC<StaticHeightBoxProps> = ({ children }) => {
  return (
    <BlurFade delay={BLUR_FADE_DELAY}>
      <div
        className={`flex items-center justify-center h-[55%] text-white rounded-sm `}
      >
        {children}
      </div>
    </BlurFade>
  );
};
const MyDetails = () => {
  const { title, position, aboutme, researchAgenda, education } =
    personaPageData;
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-bold my-2 ">
        Hello, I'm {parse(title)}
      </h1>
      <h4 className="text-lg md:text-xl font-semibold mb-4">
        {parse(position)}
      </h4>
      <Tabs
        defaultValue="about-me"
        className="md:mx-auto text-sm md:text-base h-full"
      >
        <TabsList className="grid w-full  my-4 md:w-3/4 mx-auto grid-cols-3 bg-earth-500 text-white/50 rounded-full">
          <TabsTrigger
            value="about-me"
            className=" rounded-full data-[state=active]:text-earth-500 text-sm "
          >
            {" "}
            About Me
          </TabsTrigger>
          <TabsTrigger
            value="research-agenda"
            className="rounded-full data-[state=active]:text-earth-500 text-sm -mx-2 md:mx-0"
          >
            Research Agenda
          </TabsTrigger>
          <TabsTrigger
            value="education"
            className="rounded-full data-[state=active]:text-earth-500 text-sm "
          >
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value="about-me">
          <TabDeatils>
            {" "}
            <article className="text-sm md:text-base text-black/90 text-justify">
              {parse(aboutme)}
            </article>
          </TabDeatils>
        </TabsContent>
        <TabsContent value="research-agenda">
          <TabDeatils>
            {" "}
            <article className="text-sm md:text-base text-black/90 text-justify">
              {parse(researchAgenda)}
            </article>
          </TabDeatils>
        </TabsContent>
        <TabsContent value="education">
          <TabDeatils>
            {" "}
            <article className="text-sm md:text-base text-black/90 text-justify">
              {parse(education)}
            </article>
          </TabDeatils>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default HomeBanner;
