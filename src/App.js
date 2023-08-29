// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  return (
    <div className="container">
      <Navbar title={"Luminous Text"}></Navbar>
      <Alert alert={alert} />
      <TextForm showalert={showalert}></TextForm>
    </div>
  );
}

export default App;
