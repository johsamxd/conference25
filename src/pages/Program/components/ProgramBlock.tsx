import Progress from "@/components/ui/progress";

interface Props {
  data: any;
}

export function ProgramBlock({ data }: Props) {
  return (
    <div className="w-[90vw] lg:w-[50vw] p-6 rounded-3xl flex flex-col gap-5 bg-background-primary/95 hover:bg-background-primary duration-300 shadow-white">
      <h3 className="text-text-secondary">{data.title}</h3>
      <Progress items={data?.items} current={0} skipped={[0]} />
    </div>
  );
}
