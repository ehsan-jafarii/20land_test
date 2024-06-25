import Image from "next/image";
import Clasess from "./style.module.css";
import Logo from "@/public/images/logo.png";
import Link from "next/link";
import { Burger, Cart, ProfileUser } from "@/public/svgs";
import useWindowSize from "@/hooks/useWindowSize";
import { useState } from "react";
import CartBox from "../cart";
const Header = ({ cart, setCart }) => {
  const { lg } = useWindowSize();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={Clasess.headerContainer}>
        <div className={Clasess.first}>
          {!lg && (
            <Burger
              width={26}
              height={26}
              className="cursor-pointer fill-mainGray mr-4"
            />
          )}
          <div className={Clasess.logoBox}>
            <Image src={Logo} fill />
          </div>
          {lg && (
            <div className={Clasess.pages}>
              {Pages.map(item => (
                <Link className={Clasess.title} href={item.rout} key={item.id}>
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className={Clasess.lasted}>
          <Cart
            width={26}
            height={26}
            className="cursor-pointer"
            onClick={() => setOpen(state => !state)}
          />
          <ProfileUser width={26} height={26} className="cursor-pointer" />
        </div>
        {open && <CartBox cart={cart} setCart={setCart} />}
      </div>
    </>
  );
};

export default Header;

const Pages = [
  {
    id: 1,
    title: "Collections",
    rout: "/collection"
  },
  {
    id: 1,
    title: "Men",
    rout: "/"
  },
  {
    id: 1,
    title: "Women",
    rout: "/"
  },
  {
    id: 1,
    title: "About",
    rout: "/"
  },
  {
    id: 1,
    title: "Contact",
    rout: "/"
  }
];
