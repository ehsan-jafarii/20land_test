import Header from "@/components/Molecules/header";
import Classes from "./style.module.css";
const Layout = ({ children, cart, setCart }) => {
  return (
    <div className={Classes.main}>
      <Header cart={cart} setCart={setCart} />
      {children}
    </div>
  );
};

export default Layout;
