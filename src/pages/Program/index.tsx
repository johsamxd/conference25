import { ProgramBlock } from "./components/ProgramBlock";
import { PROGRAM } from "./data/program";

export function Program() {
  return (
    <div id="program" className="flex flex-col gap-10 min-h-screen px-40 py-5">
      <h2 className="w-full text-center">Программа</h2>
      <div className="flex flex-col gap-10">
        {PROGRAM.map((p, i) => (
          <ProgramBlock key={i} data={p} />
        ))}
      </div>
    </div>
  );
}
