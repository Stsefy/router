import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

export default function Wrapper() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
