import Progress from "@/components/ui/progress";

interface Props {
  data: any;
}

export function ProgramBlock({ data }: Props) {
  return (
    <div className="w-[50vw] p-6 rounded-3xl flex flex-col gap-5 bg-background-secondary">
      <h3>{data.title}</h3>
      <Progress items={data?.items} current={0} skipped={[0]} />
    </div>
  );
}
