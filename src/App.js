import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header></Header>
      {/* for child page */}
      <Outlet/>
    </>
  );
}

export default App;
