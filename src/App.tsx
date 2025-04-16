import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const [mapArr, setMapArr] = useState<(number | string)[] | null>([1, "adsf"]);

  return (
    <>
      <p>tjos os spting new</p>
      {mapArr.map((val, id) => (
        <Card key={id} value="this is sow" random={32} />
      ))}
    </>
  );
}

export default App;
