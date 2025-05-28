import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";
import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Icon } from "@/components/ui/icon";

export function HomeHeader({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-2.5 items-center pt-4 z-10",
        className
      )}
      {...props}
    >
      <div>
        <HeaderLeftMobile />
      </div>

      <div>
        <HeaderCenter />
      </div>

      <div className="flex items-center gap-5 justify-end">
        <a href="https://vk.com/centrzakupok14" target="_blank">
          <Icon type="vk" size="md" color="white" />
        </a>
        <a href="https://t.me/centerzakupok" target="_blank">
          <Icon type="send" size="md" color="white" />
        </a>
        <ToggleThemeButton />
      </div>
    </div>
  );
}

const HeaderLeftMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-items-center md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger onClick={() => setIsOpen(true)}>
          <Icon type="menu" size="md" color="white" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-#background-secondary">
          <SheetHeader>
            <SheetTitle>asd</SheetTitle>
            <SheetDescription>asd</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

const HeaderCenter = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full  justify-center mr-14 hidden md:flex">
      <Button variant="link" size="lg" onClick={() => handleScroll("program")}>
        Программа
      </Button>
      <Button
        variant="link"
        size="lg"
        onClick={() => handleScroll("presidium")}
      >
        Список президиумов
      </Button>
      <Button variant="link" size="lg" onClick={() => handleScroll("lectors")}>
        Лекторы
      </Button>
    </div>
  );
};
