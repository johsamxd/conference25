import { Home, Presidium, Program } from "@/pages";
import SplashCursor from "./components/animated/SplashCursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
      <main className="animated-gradient">
        <Home />

        <Program />

        <Presidium />

        <SplashCursor />
      </main>
    </QueryClientProvider>
  );
}

export default App;
