import { Text, Button } from "@/components";
import Classes from "./style.module.css";
import { Delete } from "@/public/svgs";
const CartBox = ({ cart, setCart }) => {
  return (
    <div className={Classes.Cart}>
      <div className="border-b border-b-gray-400">
        <Text className={Classes.title}>cart</Text>
      </div>
      <div className={Classes.priceBox}>
        <Text className="font-bold text-orange-500 ">${cart || 0}</Text>
        <Delete
          width={20}
          height={20}
          className="fill-red-600 cursor-pointer"
          onClick={() => setCart(null)}
        />
      </div>
      <Button className={Classes.btn}>checkout</Button>
    </div>
  );
};
export default CartBox;
