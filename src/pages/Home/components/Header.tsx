import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";

export function Header({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className={cn("flex gap-2.5 items-center pt-2 z-10", className)}
      {...props}
    >
      <div className="w-full flex justify-center mr-14">
        <Button
          variant="link"
          size="lg"
          onClick={() => handleScroll("program")}
        >
          Программа
        </Button>
        <Button
          variant="link"
          size="lg"
          onClick={() => handleScroll("presidium")}
        >
          Список президиумов
        </Button>
        <Button
          variant="link"
          size="lg"
          onClick={() => handleScroll("lectors")}
        >
          Лекторы
        </Button>
      </div>
    </div>
  );
}
