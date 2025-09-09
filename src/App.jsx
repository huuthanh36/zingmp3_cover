import { useSelector, useDispatch } from "react-redux";

function App() {
  const { test } = useSelector((state) => state.app);
  console.log(test);
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-3xl border px-4 py-2 border-blue-950  text-blue-700 bg-amber-400">
        Hello Vite + React!
      </div>
    </div>
  );
}

export default App;
