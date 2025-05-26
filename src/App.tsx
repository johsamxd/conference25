import DateContent from "./components/DateContent";
import { Header } from "./components/Header";
import { motion } from "motion/react";
import SplitText from "./components/SplitText";

function App() {
  return (
    <main>
      <div className="flex flex-col gap-10 animated-gradient h-screen px-40">
        <Header />
        <div className="flex w-full text-background-secondary mt-40">
          <div className="w-[50vw]">
            <div className="flex flex-col gap-2.5">
              <SplitText
                text="VII Республиканская конференция «Закупки Якутии-2025»"
                type="h1"
              />
              <SplitText
                text="Данное мероприятие является одной из ключевых площадок для конструктивного диалога, обмена опытом и выработки стратегий развития системы закупок в Республике Саха (Якутия). Ежегодно конференция объединяет государственных заказчиков, представителей бизнессообщества и экспертов в сфере закупок для обсуждения современных вызовов и возможностей, а также поиска эффективных решений для повышения прозрачности, результативности и цифровизации в области закупочной деятельности."
                type="p"
              />
            </div>
          </div>
          <div className="flex w-[50vw] justify-center items-center">
            <div className="flex flex-col gap-2.5">
              <h2 className="flex gap-2.5">
                <DateContent /> <SplitText text="июня 2025 года" type="h2" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div id="second-block" className="h-screen overflow-hidden">
        <motion.h1>
          VII Республиканская конференция «Закупки Якутии-2025»
        </motion.h1>
      </div>
    </main>
  );
}

export default App;
