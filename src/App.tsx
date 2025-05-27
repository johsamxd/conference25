import { Home, Presidium, Program } from "@/pages";
import FollowPointer from "./components/animated/FollowPointer";
import SplashCursor from "./components/animated/SplashCursor";

function App() {
  return (
    <main className="animated-gradient">
      <Home />
      <Program />
      <Presidium />

      <SplashCursor />
      <FollowPointer />
    </main>
  );
}

export default App;
