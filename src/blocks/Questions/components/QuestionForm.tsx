import { LECTORS } from "@/blocks/Lectors/data/lectors";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function QuestionForm() {
  const [selectedName, setSelectedName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const question = (form.elements.namedItem("question") as HTMLInputElement)
      .value;

    const url =
      "https://script.google.com/macros/s/AKfycbyx1TO9fkMY__NQpE3ymBzcNCuzkzZb2T04teTOGFpCa-jmG7gE53_YguvWBpKFiE7N/exec";
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `Name=${encodeURIComponent(
        selectedName
      )}&Question=${encodeURIComponent(question)}`,
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 border-2 border-background-primary p-5 rounded-2xl"
    >
      <h2 className="text-center text-text-alternative">Задать вопрос</h2>
      <div className="flex flex-col">
        <label htmlFor="name">Лектор</label>
        <select
          id="name"
          name="name"
          className="bg-background-primary rounded-2xl h-10 text-text-secondary p-2"
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
          required
        >
          <option value="" disabled>
            Выберите лектора
          </option>
          {LECTORS.map((l, i) => (
            <option key={i} value={l.name}>
              {l.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="question">Вопрос</label>
        <textarea
          id="question"
          name="question"
          className="bg-background-primary rounded-2xl h-40 text-text-secondary px-2.5 focus:border-0 focus-visible:border-0"
          required
        />
      </div>

      <Button className="mt-5" type="submit" disabled={!selectedName}>
        Отправить
      </Button>
    </form>
  );
}
