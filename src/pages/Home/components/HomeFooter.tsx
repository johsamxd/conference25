import { Icon } from "@/components/ui/icon";

export function HomeFooter() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-5">
      <span className="typo-sub-title text-text-button">Прокрутите вниз</span>
      <div className="animate-bounce">
        <Icon type="expand" size="xl" color="white" />
      </div>
    </div>
  );
}
