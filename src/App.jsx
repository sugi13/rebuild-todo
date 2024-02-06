import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// layouts //
import RootLayout from "./Layout.jsx/RootLayout";

// pages //
import Home from "./pages/Home";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element = {<RootLayout/>}>
    <Route index element = {<Home/>}/>
    </Route>
  )
)

function App() {
  return <>
    <RouterProvider router= {Router}/>
  </>;
}

export default App;
