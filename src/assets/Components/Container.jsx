import styles from "./Container.module.css";
function Container({ children, color }) {
  return (
    <div style={{ backgroundColor: color }} className={styles.display}>
      {children}
    </div>
  );
}
export default Container;
