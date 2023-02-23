import { Outlet } from "react-router-dom";
import Mouse from "./Mouse";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <Mouse />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
