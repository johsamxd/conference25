import {
  Contacts,
  Events,
  Home,
  Lectors,
  Moderators,
  Presidium,
  Program,
  Questions,
} from "@/blocks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StorageProvider } from "./contexts/StorageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Partners } from "./blocks/Partners";
import { Toaster } from "@/components/ui/sonner";

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
          <main className="animated-gradient py-2.5 flex flex-col gap-20">
            <Home />
            <Program />
            <Presidium />
            <Lectors />
            <Moderators />
            <Events />
            <Questions />
            <Partners />
            <Contacts />
          </main>
          <Toaster />
        </ThemeProvider>
      </StorageProvider>
    </QueryClientProvider>
  );
}

export default App;
