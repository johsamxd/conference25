import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils.ts";
import { useEffect, useRef, type RefObject } from "react";

/** Icon types array
 * <h1> ! DO NOT EDIT MANUALLY ! </h1>
 * */
export const IconTypes = [
  "download",
  "tick",
  "delete",
  "edit",
  "arrow-left",
  "image",
  "calendar",
  "sun",
  "moon",
  "bell",
  "exit",
  "earth",
  "person",
  "clock",
  "group",
  "translate",
  "ui",
  "minus",
  "room",
  "attention",
  "ascend",
  "descend",
  "books",
  "ipts",
  "sport",
  "settings",
  "expand",
  "go-left",
  "go-right",
  "hide",
  "info",
  "close",
  "change",
  "show",
  "plus",
  "arrow-right",
  "copy",
  "send",
  "psychologist",
  "dashboard",
  "education",
  "papers",
  "event",
  "menu",
  "placeholder",
  "vk",
  "trophy",
  "charts",
  "wand",
  "cursor",
  "phone",
  "mail",
] as const;

/** Icon types */
export type IconType = (typeof IconTypes)[number];

/** Icon colors */
export type IconColor = "white" | "light" | "dark" | "main" | "danger";

/** Icon sizes */
export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface IconProps {
  type: IconType;
  size: IconSize;
  color: IconColor;
  noHover?: boolean;
  showDot?: boolean;
}

interface ColorWithHover {
  color: string;
  text: string;
  hoverColor?: string;
  hoverTextColor?: string;
}

const colorToClassName = new Map<IconColor, ColorWithHover>([
  ["white", { color: "fill-text-primary", text: "text-text-primary" }],
  ["dark", { color: "fill-element-secondary", text: "text-element-secondary" }],
  [
    "light",
    {
      color: "fill-element-primary",
      text: "text-element-primary",
      hoverColor: "group-hover/icon:fill-element-secondary",
      hoverTextColor: "group-hover/icon:text-element-secondary",
    },
  ],
  [
    "main",
    {
      color: "fill-main-secondary",
      text: "text-main-secondary",
    },
  ],
  [
    "danger",
    {
      color: "fill-notify-danger-primary",
      text: "text-notify-danger-primary",
    },
  ],
]);

const sizeToClassName = new Map<IconSize, string>([
  ["xs", "w-[12px] h-[12px]"],
  ["sm", "w-[16px] h-[16px]"],
  ["md", "w-[20px] h-[20px]"],
  ["lg", "w-[24px] h-[24px]"],
  ["xl", "w-[32px] h-[32px]"],
  ["xxl", "w-[80px] h-[80px]"],
]);

export function Icon(props: IconProps) {
  const { data } = useQuery({
    queryKey: ["icon", props.type],
    queryFn: async () => {
      const res = await fetch(`/icons/${props.type}.svg`);
      return res.text();
    },
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && data) {
      prepareIcon(data, props, ref);
    }
  }, [data, props, ref]);

  if (data) {
    return (
      <span
        ref={ref}
        className={cn(
          "flex flex-shrink-0 items-center justify-center",
          sizeToClassName.get(props.size),
          colorToClassName.get(props.color)?.text,
          props.noHover
            ? undefined
            : colorToClassName.get(props.color)?.hoverTextColor
        )}
      />
    );
  }

  return getIconLoadPlaceholder(props);
}

function prepareIcon(
  iconStr: string,
  props: IconProps,
  ref: RefObject<HTMLDivElement | null>
) {
  const pathClassNames = [
    "transition-all duration-300",
    colorToClassName.get(props.color)?.color,
    props.noHover ? undefined : colorToClassName.get(props.color)?.hoverColor,
  ]
    .filter((c) => c)
    .join(" ")
    .split(" ");

  const svgClassNames = [
    "transition-all duration-300",
    sizeToClassName.get(props.size),
  ]
    .filter((c) => c)
    .join(" ")
    .split(" ");

  const parser = new DOMParser();
  const parsed = parser.parseFromString(
    iconStr
      .replace(/<defs>[\s\S]*<\/defs>/, "")
      .replace(/stroke="[\w]*"/g, "stroke='currentColor'")
      .replace(/\s+/g, " "),
    "image/svg+xml"
  );
  const svg = parsed.children[0] as SVGElement;

  if (props.showDot) {
    const circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", "15");
    circle.setAttribute("cy", "15");
    circle.setAttribute("r", "2.5");
    circle.setAttribute("fill", "40BA21");
    svg.appendChild(circle);
  }

  svgClassNames.forEach((cl) => svg.classList.add(cl));

  inspectSvgChildren(svg, pathClassNames);

  for (const child of ref.current!.children) {
    ref.current!.removeChild(child);
  }
  ref.current!.append(parsed.children[0]);
}

function inspectSvgChildren(svg: SVGElement, pathClassNames: string[]) {
  for (const child of svg.children) {
    if (child instanceof SVGPathElement || child instanceof SVGRectElement) {
      if (child.hasAttribute("fill")) {
        child.removeAttribute("fill");
        pathClassNames.forEach((cl) => child.classList.add(cl));
      }
    } else if (child instanceof SVGElement) {
      inspectSvgChildren(child, pathClassNames);
    }
  }
}

function getIconLoadPlaceholder(props: IconProps) {
  return (
    <span
      className={cn(
        "animate-pulse rounded-[10px] bg-background-tertiary",
        sizeToClassName.get(props.size)
      )}
    />
  );
}
