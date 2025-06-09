import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="px-2 lg:px-10 min-h-screen">
      <div className="flex flex-col gap-10">
        <h2 className="w-full text-center text-text-primary pt-5">Программа</h2>
        {PROGRAM.map((p, i) => (
          <ProgramBlock key={i} data={p} />
        ))}
      </div>
    </div>
  );
}
