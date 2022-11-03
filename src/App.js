import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* for child page */}
      <Outlet />
    </>
  );
}

export default App;
