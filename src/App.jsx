import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./assets/Components/Buttons";
import Container from "./assets/Components/Container";
function App() {
  const [color, setcolor] = useState("Olive");
  function handlesetColor(color) {
    setcolor(color);
  }
  return (
    <>
      <Container color={color}>
        <h1>Bg-Changer</h1>
        <Buttons setcolor={handlesetColor}></Buttons>
      </Container>
    </>
  );
}

export default App;
