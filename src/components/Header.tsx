import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Header({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={cn("flex gap-2.5 items-center pt-2", className)} {...props}>
      <div className="w-14">
        <img src="/images/logo.png" />
      </div>
      <div className="w-full flex justify-center mr-14">
        <Button variant="link">Список президиумов</Button>
        <Button variant="link">Информация о ведущем</Button>
        <Button variant="link">Лекторы</Button>
        <Button variant="link">Программа</Button>
      </div>
    </div>
  );
}
