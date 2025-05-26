import { ProgramBlock } from "./components/ProgramBlock";

export function Program() {
  return (
    <div className="h-screen">
      <h2 className="w-full text-center pt-5">Программа</h2>
      <ProgramBlock title={"Пленарная часть"} />
    </div>
  );
}
