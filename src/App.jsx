import { Suspense } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Players from "./component/Players";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const dataPromise = fetchData();

  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <section className="bg-[#F5F5F5]">
        <Suspense>
          <Players dataPromise={dataPromise}></Players>
        </Suspense>
      </section>
    </div>
  );
}

export default App;
