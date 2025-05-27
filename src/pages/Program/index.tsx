import { HorizontalScroll } from "@/components/HorizontalScroll";
import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="pl-5">
      <HorizontalScroll title={"Программа"}>
        {PROGRAM.map((p, i) => (
          <ProgramBlock key={i} data={p} />
        ))}
      </HorizontalScroll>
    </div>
  );
}
