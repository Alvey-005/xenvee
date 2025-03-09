"use client";
import { MyLinks } from "@/components/custom/MyLinks";
import { OutlineButton } from "@/components/custom/OutlineButton";

const Heading = () => {
  return (
    <header
      className={`px-2 lg:px-14 flex items-center justify-between sticky top-0 z-20 bg-[#11111120] backdrop-blur-md font-bold h-14 md:h-16`}
    >
      <MyLinks />
      <div className="flex gap-2 items-center mt-1.5 md:mt-0" >
      <OutlineButton onClick={() => {}}>
        My resume
      </OutlineButton>
      <OutlineButton onClick={() => window.location.href = '/#contact'}>
        Contact
      </OutlineButton>
      </div>
    </header>
  );
};
export default Heading;
