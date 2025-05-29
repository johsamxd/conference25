import {
  Contacts,
  Events,
  Home,
  Lectors,
  Moderators,
  Presidium,
  Program,
} from "@/pages";
// import SplashCursor from "./components/animated/SplashCursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StorageProvider } from "./contexts/StorageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

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
            <Contacts />
            {/* <div className="hidden lg:contents">
              <SplashCursor />
            </div> */}
          </main>
        </ThemeProvider>
      </StorageProvider>
    </QueryClientProvider>
  );
}

export default App;
