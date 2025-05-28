import { HomeHeader } from "./components/HomeHeader";
import { DisappearingDiv } from "@/components/animated/DisappearingDiv";
import { HomeCore } from "./components/HomeCore";
import { HomeFooter } from "./components/HomeFooter";

export function Home() {
  return (
    <DisappearingDiv start={0} end={900}>
      <div className="min-h-screen flex flex-col justify-between gap-10 px-5 md:px-10 lg:px-20 xl:px-40">
        <HomeHeader />
        <HomeCore />
        <HomeFooter />
      </div>
    </DisappearingDiv>
  );
}
