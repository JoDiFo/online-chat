import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue((prev) => prev + 1)}>Click</button>
    </div>
  );
}

export default App;
