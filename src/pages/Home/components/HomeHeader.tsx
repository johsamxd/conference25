import { cn } from "@/lib/utils";
import { Button } from "../../../components/ui/button";
import { ToggleThemeButton } from "@/components/ToggleThemeButton";
// import { useState } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
import { Icon } from "@/components/ui/icon";

export function HomeHeader({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={cn("grid grid-cols-3 gap-2.5 items-center  z-10", className)}
      {...props}
    >
      <div>{/* <HeaderLeftMobile /> */}</div>

      <div>
        <HeaderCenter />
      </div>

      <div className="flex items-center gap-10 lg:gap-20 justify-end">
        <ToggleThemeButton />
        <div className="flex gap-5">
          <a href="https://vk.com/centrzakupok14" target="_blank">
            <Icon type="vk" size="md" color="white" />
          </a>
          <a href="https://t.me/centerzakupok" target="_blank">
            <Icon type="send" size="md" color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

// const HeaderLeftMobile = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const text = "VII Республиканская конференция «Закупки Якутии-2025»";

//   return (
//     <div className="flex justify-items-center md:hidden">
//       <Sheet open={isOpen} onOpenChange={setIsOpen}>
//         <SheetTrigger onClick={() => setIsOpen(true)}>
//           <Icon type="menu" size="md" color="white" />
//         </SheetTrigger>
//         <SheetContent side="left" className="bg-#background-secondary">
//           <SheetHeader>
//             <SheetTitle className="typo-small-title">
//               {text.split("").map((char, i) => {
//                 let color = false;
//                 if (i < 3) {
//                   color = true;
//                 } else if (i >= text.length - 5 && i < text.length - 1) {
//                   color = true;
//                 }

//                 return (
//                   <span
//                     key={`${char}-${i}`}
//                     className={cn(color && " text-text-alternative")}
//                   >
//                     {char}
//                   </span>
//                 );
//               })}
//             </SheetTitle>
//             <SheetDescription className="flex flex-col items-start justify-start md:hidden">
//               <Button
//                 variant="link"
//                 size="lg"
//                 onClick={() => {
//                   handleScroll("program");
//                   setIsOpen(false);
//                 }}
//               >
//                 Программа
//               </Button>
//               <Button
//                 variant="link"
//                 size="lg"
//                 onClick={() => {
//                   handleScroll("presidium");
//                   setIsOpen(false);
//                 }}
//               >
//                 Список президиумов
//               </Button>
//               <a
//                 href="#lectors"
//                 onClick={() => {
//                   handleScroll("lectors");
//                   setIsOpen(false);
//                 }}
//               >
//                 Лекторы
//               </a>
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// };

const HeaderCenter = () => {
  return (
    <div className="w-full justify-center mr-14 hidden md:flex">
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

const handleScroll = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};
