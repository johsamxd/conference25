import { Home, Lectors, Presidium, Program } from "@/pages";
import SplashCursor from "./components/animated/SplashCursor";
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
          <main className="animated-gradient">
            <Home />
            <Program />
            <Presidium />
            <Lectors />
            <div className="hidden lg:contents">
              <SplashCursor />
            </div>
          </main>
        </ThemeProvider>
      </StorageProvider>
    </QueryClientProvider>
  );
}

export default App;
