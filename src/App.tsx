import { Header } from "./components/Header";

function App() {
  return (
    <main>
      {/* <div className="overflow-hidden bg-gradient-to-bl from-cyan-500 to-blue-500 h-dvh"> */}
      <div className="flex flex-col gap-10 animated-gradient h-screen px-40">
        <Header />
        <div className="flex w-full text-background-secondary mt-40">
          <div className="w-[50vw]">
            <div className="flex flex-col gap-2.5">
              <h1>VII Республиканская конференция «Закупки Якутии-2025»</h1>
              <p>
                Данное мероприятие является одной из ключевых площадок для
                конструктивного диалога, обмена опытом и выработки стратегий
                развития системы закупок в Республике Саха (Якутия). Ежегодно
                конференция объединяет государственных заказчиков,
                представителей бизнессообщества и экспертов в сфере закупок для
                обсуждения современных вызовов и возможностей, а также поиска
                эффективных решений для повышения прозрачности, результативности
                и цифровизации в области закупочной деятельности.
              </p>
            </div>
          </div>
          <div className="flex w-[50vw] justify-center items-center">
            <div className="flex flex-col gap-2.5">
              <h1>27 июня 2025 года</h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div id="second-block" className="h-screen overflow-hidden">
        some contents
      </div> */}
    </main>
  );
}

export default App;
