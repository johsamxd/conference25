import { Home, Presidium, Program } from "@/pages";
import SplashCursor from "./components/animated/SplashCursor";

function App() {
  return (
    <main className="animated-gradient">
      <Home />
      <Program />
      <Presidium />

      <SplashCursor />
    </main>
  );
}

export default App;
