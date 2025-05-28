import { HorizontalScroll } from "@/components/HorizontalScroll";
import { LECTORS } from "./data/lectors";
import { LectorCard } from "./components/LectorCard";

export function Lectors() {
  return (
    <div id="lectors" className="pl-5">
      <HorizontalScroll title={"Лекторы"} range={["0.1%", "-60%"]}>
        {LECTORS.map((l, i) => (
          <LectorCard key={i} lector={l} />
        ))}
      </HorizontalScroll>
    </div>
  );
}
