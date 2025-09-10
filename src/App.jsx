import { Home, Login, Public } from "./containers/public";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "./utils/path";
function App() {
  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.START} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
