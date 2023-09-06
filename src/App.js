// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { useState } from "react";
import bg3 from "./bg3.jpg";

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
    <div
      className="container min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navbar title={"Luminous Text"}></Navbar>
      <Alert alert={alert} />
      <TextForm showalert={showalert}></TextForm>
    </div>
  );
}

export default App;
