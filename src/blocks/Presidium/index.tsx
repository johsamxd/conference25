import { PRESIDIUMS } from "./data/presidiums";
import { PersonCard } from "@/components/PersonCard";

export function Presidium() {
  return (
    <div id="presidium" className="flex flex-col gap-10 px-4 ">
      <h2 className="w-full text-center text-text-primary">Президиум</h2>

      <div className="p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {PRESIDIUMS.map((p, i) => (
          <PersonCard key={i} person={p} presidium />
        ))}
      </div>
    </div>
  );
}
