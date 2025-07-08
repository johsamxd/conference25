import {
  Contacts,
  Events,
  Home,
  Lectors,
  Materials,
  Moderators,
  Presidium,
  Partners,
  // Program,
  // Questions,
} from "@/blocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StorageProvider } from "./contexts/StorageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

function LoadingScreen() {
  return (
    <div className="animated-gradient flex flex-col justify-between min-h-screen px-4 py-6 lg:text-2xl">
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="size-50 animate-rotate">
          <img src="/images/logo.png" alt="Logo" />
        </div>
        <div className="flex flex-col gap-1 mt-4 text-center">
          <h4>
            <span className="text-text-alternative">VII</span>
            <span>{" Республиканская конференция «Закупки Якутии-"}</span>
            <span className="text-text-alternative">2025</span>
          </h4>
          <h4>
            <span>{"«ГОСЗАКУПКИ: "}</span>
            <span className="text-main-tertiary">НАЦИОНАЛЬНО</span>
            <span>{", "}</span>
            <span className="text-main-tertiary">ОТВЕТСТВЕННО</span>
            <span>{", "}</span>
            <span className="text-[#ff6b6b]">ЭФФЕКТИВНО</span>
            <span>{"!»"}</span>
          </h4>
        </div>
      </div>
      <div className="text-center text-xl text-gray-500">Загрузка</div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          defaultOptions: {
            queries: { retry: false, refetchOnWindowFocus: false },
          },
        })
      }
    >
      <StorageProvider>
        <ThemeProvider>
          <Suspense fallback={<LoadingScreen />}>
            <main className="animated-gradient py-2.5 flex flex-col gap-20">
              <Home />
              <Materials />
              <Events />
              {/* <Program /> */}
              <Presidium />
              <Lectors />
              <Moderators />
              {/* <Questions /> */}
              <Partners />
              <Contacts />
            </main>
          </Suspense>
          <Toaster />
        </ThemeProvider>
      </StorageProvider>
    </QueryClientProvider>
  );
}

export default App;
