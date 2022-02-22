import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [numberof, seNumberOf] = useState(0);
  const numberOfRow = 4;
  const handleScroll = (e) => {
    if (300 + e.target.scrollTop + 1 >= e.target.scrollHeight) {
      let getData = arr.slice(numberof, numberof + numberOfRow);
      setData([...data, ...getData]);
      seNumberOf(numberof + numberOfRow);
    }
  };
  useEffect(() => {
    setData(arr.slice(0, numberOfRow));
    seNumberOf(numberOfRow);
  }, []);
  console.log(data, "data");
  return (
    <div className="App" onScroll={handleScroll}>
      {data.map((obj, index) => (
        <p key={index}>{obj.name}</p>
      ))}
    </div>
  );
}

export default App;

const arr = [
  { name: "sunny0" },
  { name: "sunny1" },
  { name: "sunny2" },
  { name: "sunny3" },
  { name: "sunny4" },
  { name: "sunny5" },
  { name: "sunny6" },
  { name: "sunny7" },
  { name: "sunny8" },
  { name: "sunny9" },
  { name: "sunny10" },
  { name: "sunny11" },
  { name: "sunny12" },
  { name: "sunny13" },
  { name: "sunny13" },
  { name: "sunny15" },
  { name: "sunny16" },
  { name: "sunny17" },
  { name: "sunny18" },
  { name: "sunny19" },
  { name: "sunny20" },
  { name: "sunny21" },
  { name: "sunny22" },
  { name: "sunny23" },
  { name: "sunny24" },
  { name: "sunny25" },
  { name: "sunny26" },
  { name: "sunny27" },
  { name: "sunny28" },
  { name: "sunny29" },
];
