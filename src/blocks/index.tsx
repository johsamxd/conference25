import { lazy } from "react";

import Home from "./Home";
// export { Program } from "./Program";
// export { Presidium } from "./Presidium";
// export { Lectors } from "./Lectors";
// export { Contacts } from "./Contacts";
// export { Events } from "./Events";
// export { Moderators } from "./Moderators";
// export { Partners } from "./Partners";
// export { Registration } from "./Registration";
// export { Questions } from "./Questions";
// export { Materials } from "./Materials";

// const Home = lazy(() => import("./Home"));
const Materials = lazy(() => import("./Materials"));
const Events = lazy(() => import("./Events"));
const Presidium = lazy(() => import("./Presidium"));
const Lectors = lazy(() => import("./Lectors"));
const Moderators = lazy(() => import("./Moderators"));
const Contacts = lazy(() => import("./Contacts"));
const Partners = lazy(() => import("./Partners"));

export {
  Home,
  Materials,
  Events,
  Presidium,
  Lectors,
  Moderators,
  Contacts,
  Partners,
};
