import styles from "./Buttons.module.css";
function Buttons({ setcolor }) {
  let colorName = [
    { name: "Maroon", id: "maroon" },
    { name: "Pink", id: "pink" },
    { name: "Orange", id: "orange" },
    { name: "Salmon", id: "#FA8072" },
    { name: "Cholocate", id: "#7B3F00" },
    { name: "Teal", id: "#008080" },
    { name: "Plum", id: "#673147" },
    { name: "Wine", id: "#722F37" },
    { name: "Lime", id: "#00FF00" },
    { name: "Indigo", id: "#4B0082" },
  ];
  return (
    <div className={styles.bottonbox}>
      {colorName.map((color) => (
        <button
          onClick={() => setcolor(color.id)}
          style={{ backgroundColor: color.id }}
          className={styles.bottonbtn}
        >
          {color.name}
        </button>
      ))}
    </div>
  );
}
export default Buttons;
