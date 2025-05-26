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
    <div className={cn("flex gap-2.5 items-center pt-2", className)} {...props}>
      <div className="w-full flex justify-center mr-14">
        <Button variant="link" onClick={() => handleScroll("program")}>
          Программа
        </Button>
        <Button variant="link">Список президиумов</Button>
        <Button variant="link">Информация о ведущем</Button>
        <Button variant="link">Лекторы</Button>
      </div>
    </div>
  );
}
