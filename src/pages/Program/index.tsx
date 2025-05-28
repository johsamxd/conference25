import { HorizontalScroll } from "@/components/HorizontalScroll";
import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="pl-2 lg:pl-5">
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
    <HorizontalScroll title={"Программа"} range={["0%", "-68%"]}>
      {PROGRAM.map((p, i) => (
        <ProgramBlock key={i} data={p} />
      ))}
    </HorizontalScroll>
  );
}
