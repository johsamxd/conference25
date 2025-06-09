import { QuestionForm } from "./components/QuestionForm";

export function Questions() {
  return (
    <div className="grid lg:grid-cols-2 p-5 gap-10">
      <div className="flex items-center justify-center">
        <h1 className="text-center max-w-2xl">
          Вы можете задать любой интересующий вас вопрос одному из лекторов — и
          он будет рассмотрен в рубрике{" "}
          <span className="text-text-alternative">«Вопросы и ответы»</span>
        </h1>
      </div>

      <QuestionForm />
    </div>
  );
}
