"use client";
import { Layout, Text, Button, Counter } from "@/components";
import Classes from "@/public/styles/home/style.module.css";
import Production from "@/data";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
//images
import pic1 from "@/public/images/product/image-product-1-thumbnail.jpg";
import pic2 from "@/public/images/product/image-product-2-thumbnail.jpg";
import pic3 from "@/public/images/product/image-product-3-thumbnail.jpg";
import pic4 from "@/public/images/product/image-product-4.jpg";
import Image from "next/image";
const HomeTemplate = () => {
  const [quantities, setQuantities] = useState(
    Array(Production.length).fill(0)
  );
  const [totalPrice, setTotalPrice] = useState(0);

  const increaseCounter = index => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decreaseCounter = index => {
    const newQuantities = [...quantities];
    newQuantities[index] -= 1;
    setQuantities(newQuantities);
  };

  const addToCart = (index, price) => {
    setTotalPrice(totalPrice + quantities[index] * price);
  };

  return (
    <Layout cart={totalPrice} setCart={setTotalPrice}>
      <div className={Classes.container}>
        {Production.map((item, index) => (
          <div className={Classes.product}>
            <div className="w-[100%] lg:w-[30rem] lg:mr-10 mr-0">
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                  clickable: true
                }}
                pagination={{
                  clickable: true
                }}
                scrollbar={{ draggable: true }}
                className={`lg:rounded-3xl ${Classes["!w-[0rem]"]}`} // اعمال کلاس به Swiper
                loop={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false
                }}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 360,
                  modifier: 1,
                  slideShadows: false
                }}
              >
                <SwiperSlide className={Classes.slide}>
                  {" "}
                  <Image
                    unoptimized
                    alt="banner"
                    src={pic1}
                    fill
                    loading="eager"
                    style={{
                      height: "100%",
                      width: "100%"
                    }}
                    property
                  />
                </SwiperSlide>
                <SwiperSlide className={Classes.slide}>
                  {" "}
                  <Image
                    unoptimized
                    alt="banner"
                    src={pic2}
                    fill
                    loading="eager"
                    style={{
                      height: "100%",
                      width: "100%"
                    }}
                    property
                  />
                </SwiperSlide>
                <SwiperSlide className={Classes.slide}>
                  {" "}
                  <Image
                    unoptimized
                    alt="banner"
                    src={pic3}
                    fill
                    loading="eager"
                    style={{
                      height: "100%",
                      width: "100%"
                    }}
                    property
                  />
                </SwiperSlide>
                <SwiperSlide className={Classes.slide}>
                  {" "}
                  <Image
                    unoptimized
                    alt="banner"
                    src={pic4}
                    fill
                    loading="eager"
                    style={{
                      height: "100%",
                      width: "100%"
                    }}
                    property
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="px-4 lg:px-0 mt-5 lg:mt-0">
              <Text className={Classes.comp}>{item.company}</Text>
              <Text className={Classes.name}>{item.name}</Text>
              <Text className={Classes.description}>{item.description}</Text>
              <div className={Classes.priceBox}>
                <div className="flex flex-row items-center">
                  <Text className={Classes.newPrice}>${item.new_price}</Text>
                  <Text className={Classes.discound}>{item.discound}%</Text>
                </div>
                <Text className={Classes.price}>${item.price}</Text>
              </div>
              <div className="flex flex-col lg:flex-row items-center mt-5">
                <Counter
                  counter={quantities[index]}
                  increase={() => increaseCounter(index)}
                  decrease={() => decreaseCounter(index)}
                  className="!w-full lg:w-auto"
                />
                <Button
                  className={Classes.btn}
                  onClick={() => addToCart(index, item.new_price)}
                >
                  {" "}
                  add to cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomeTemplate;
