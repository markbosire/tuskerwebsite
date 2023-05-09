import Homepage from "./components/homepage";
import Schedule from "./components/schedule";
import News from "./components/news";
import MoreNews from "./components/morenews";
import Shop from "./components/shop";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function App() {
  return (
    <div className="App">
      <Homepage />
      <Schedule />
      <News />
      <MoreNews />
      <Shop />
    </div>
  );
}

export default App;
