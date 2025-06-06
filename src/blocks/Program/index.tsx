import { cn } from "@/lib/utils";
import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="px-2 lg:px-10 min-h-screen">
      <div className="flex flex-col gap-10">
        <h2 className="w-full text-center text-text-primary pt-5">Программа</h2>
        {PROGRAM.map((p, i) => (
          <div
            key={i}
            className={cn(
              "flex flex-row-reverse items-center",
              i % 2 && "flex-row"
            )}
          >
            <ProgramBlock data={p} />
            <div className="w-1/3 hidden lg:flex justify-center">
              <span className="text-9xl font-medium text-center">{i + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
