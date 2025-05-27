import { HorizontalScroll } from "@/components/HorizontalScroll";
import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="flex flex-col gap-10 min-h-screen pl-5 py-5 ">
      <h2 className="w-full text-center text-background-secondary">
        Программа
      </h2>
      <HorizontalScroll>
        {PROGRAM.map((p, i) => (
          <ProgramBlock key={i} data={p} />
        ))}
      </HorizontalScroll>
    </div>
  );
}
