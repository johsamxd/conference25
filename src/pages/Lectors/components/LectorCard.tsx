export function LectorCard({ lector }: { lector: any }) {
  return (
    <div className="w-[80vw] h-[70vh] bg-background-secondary rounded-2xl bg-linear-to-r from-main-primary to-black shadow-white grid grid-cols-3">
      <div className="w-full h-full col-span-1">
        <img src={lector.image} className="object-cover h-full rounded-l-2xl" />
      </div>
      <div className="col-span-2 p-5 text-background-secondary flex flex-col gap-2.5">
        <h2>{lector.name}</h2>
        <p>{lector.description}</p>

        <h3>Выступления:</h3>
        {lector?.program?.map((p: any, i: number) => (
          <div key={i} className="flex gap-2.5">
            <p>{p.time}</p>
            <p>{p.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
