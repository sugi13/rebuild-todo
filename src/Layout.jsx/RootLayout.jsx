import "../App.css";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="Root-layout">
    <main>
        <Outlet/>
    </main>
    </div>
  )
}
