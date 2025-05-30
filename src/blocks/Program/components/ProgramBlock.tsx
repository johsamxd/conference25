import Progress from "@/components/ui/progress";

interface Props {
  data: any;
}

export function ProgramBlock({ data }: Props) {
  return (
    <div className="w-[90vw] lg:w-[50vw] p-6 rounded-3xl flex flex-col gap-5 bg-background-primary/95 hover:bg-background-primary duration-300 shadow-white">
      <div className="flex flex-col gap-1">
        <h3 className="text-text-secondary">{data.title}</h3>
        {data?.moderator && (
          <div className="text-text-secondary text-sm">
            <span className="font-semibold">Модератор:</span>
            <a
              href="#moderators"
              className="text-main-secondary hover:text-main-primary"
            >
              {" " + data.moderator}
            </a>
          </div>
        )}
      </div>

      <Progress items={data?.items} current={0} skipped={[0]} />
    </div>
  );
}
