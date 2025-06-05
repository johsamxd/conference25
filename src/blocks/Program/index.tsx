import { HorizontalScroll } from "@/components/HorizontalScroll";
import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="px-2 lg:pl-5 min-h-screen">
      <div className="hidden lg:contents">
        <ProgramMain />
      </div>
      <div className="contents lg:hidden">
        <ProgramMobile />
      </div>
    </div>
  );
}

function ProgramMain() {
  return (
    <HorizontalScroll title={"Программа"} range={["0%", "-37%"]}>
      {PROGRAM.map((p, i) => (
        <ProgramBlock key={i} data={p} />
      ))}
    </HorizontalScroll>
  );
}

function ProgramMobile() {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="w-full text-center text-text-primary pt-5">Программа</h2>
      {PROGRAM.map((p, i) => (
        <ProgramBlock key={i} data={p} />
      ))}
    </div>
  );
}
