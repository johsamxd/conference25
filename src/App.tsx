import { Home, Program } from "@/pages";
// import FollowPointer from "./components/animated/FollowPointer";
import SplashCursor from "./components/animated/SplashCursor";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Home />
      <Program />
      <SplashCursor />
      {/* <FollowPointer /> */}
    </main>
  );
}

export default App;
