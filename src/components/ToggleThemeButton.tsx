import { ThemeChangeAnimElements } from "@/contexts/ThemeChangeAnim";
import { useTheme } from "@/contexts/ThemeContext";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

export const ToggleThemeButton = ({ className }: { className?: string }) => {
  const { theme, animStage, toggleTheme } = useTheme();

  return (
    <div className={cn("contents", className)}>
      <ThemeChangeAnimElements animStage={animStage} />
      <Button
        variant="icon"
        size="icon"
        onClick={toggleTheme}
        id="toggle-btn"
        className="cursor-pointer"
      >
        <Icon
          type={theme === "dark" ? "moon" : "sun"}
          size="md"
          color="white"
        />
      </Button>
    </div>
  );
};
