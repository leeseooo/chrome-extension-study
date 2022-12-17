import { useState } from "react";
import Test from "./pages/Test";
import "./App.css";

function App() {
  const [pageNum, setPageNum] = useState(0);
  const [text, setText] = useState("");

  chrome.storage.local.get(["key"]).then((res) => setText(res.key));

  switch (pageNum) {
    case 0:
      return (
        <div>
          Landing Page<button onClick={() => setPageNum((prev) => prev + 1)}>next</button>
          <div id="text">text:{text || "none"}</div>
        </div>
      );
    case 1:
      return <Test />;
    default:
      return <div>error</div>;
  }
}

export default App;
