import { HomeHeader } from "./components/HomeHeader";
import { DisappearingDiv } from "@/components/animated/DisappearingDiv";
import { HomeCore } from "./components/HomeCore";
import { HomeFooter } from "./components/HomeFooter";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-10 px-2 md:px-10 lg:px-20 xl:px-40">
      <HomeHeader />
      <HomeCore />
      <DisappearingDiv start={0} end={900}>
        <HomeFooter />
      </DisappearingDiv>
    </div>
  );
}
