import { Home, Login, Public, Personal } from "./containers/public";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import path from "./utils/path";
import { useEffect } from "react";
import * as actions from "./store/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHome());
  }, []);

  return (
    <div>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.START} element={<Home />} />
          <Route path={path.MYMUSIC} element={<Personal />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
