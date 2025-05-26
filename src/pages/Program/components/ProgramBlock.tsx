interface Props {
  title: string;
}

export function ProgramBlock({ title }: Props) {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
}
