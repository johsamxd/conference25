import { cn } from "@/lib/utils.ts";
import type { ReactNode } from "react";
import { Icon } from "./icon";

interface ProgressProps {
  items: any[];
  current: number;
  skipped?: number[];
  className?: string;
}

export default function Progress(props: ProgressProps) {
  return (
    <div className={cn("flex flex-col", props.className)}>
      {props.items.map((item, index) => (
        <div key={index}>
          <ProgressItem
            state={
              props.skipped?.includes(index)
                ? "inactive"
                : index < props.current
                ? "done"
                : index === props.current
                ? "active"
                : "inactive"
            }
            time={item.time}
            text={item.title}
          />
          {index < props.items.length - 1 && <ProgressSeparator />}
        </div>
      ))}
    </div>
  );
}

interface ProgressItemProps {
  state: "done" | "active" | "inactive";
  time: string;
  text: string | ReactNode;
}

export function ProgressItem(props: ProgressItemProps) {
  function getIndicator() {
    switch (props.state) {
      case "done":
        return <Icon type="tick" size="md" color="main" />;
      case "active":
        return (
          <div className="m-0.5 h-[16px] w-[16px] rounded-full bg-element-secondary" />
        );
      case "inactive":
        return (
          <div className="m-0.5 h-[16px] w-[16px] rounded-full bg-element-primary" />
        );
    }
  }

  function getTextColor() {
    switch (props.state) {
      case "done":
        return "text-text-primary";
      case "active":
        return "text-text-primary";
      case "inactive":
        return "text-text-tertiary";
    }
  }

  return (
    <div className={cn("flex items-center gap-3 typo-text", getTextColor())}>
      {getIndicator()}
      <div className="flex flex-col">
        <span className="typo-sub-title text-main-secondary">{props.time}</span>
        <span className="typo-sub-title">{props.text}</span>
      </div>
    </div>
  );
}

export function ProgressSeparator() {
  return (
    <div className="-mb-1 -mt-1 ml-[9px] h-10 border-l-2 border-dashed border-element-primary" />
  );
}
