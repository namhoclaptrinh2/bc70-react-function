import React, { useState } from "react";
import CarItem from "./CarItem";
import ModalCar from "./ModalCar";

const data = [
  {
    id: 1,
    name: "black car",
    img: "/src/assets/img/CarBasic/products/black-car.jpg",
    price: 1000,
  },
  {
    id: 2,
    name: "red car",
    img: "/src/assets/img/CarBasic/products/red-car.jpg",
    price: 2000,
  },
  {
    id: 3,
    name: "silver car",
    img: "./src/assets/img/CarBasic/products/silver-car.jpg",
    price: 3000,
  },
  {
    id: 3,
    name: "Steel car",
    img: "/src/assets/img/CarBasic/products/steel-car.jpg",
    price: 4000,
  },
];
const EXCarStore = () => {
  const [CarState, setCarState] = useState({
    id: 1,
    name: "black car",
    img: "/src/assets/img/black-car.jpg",
    price: 1000,
  });
  return (
    <div className="container">
      <h3 className="text-center">Car store</h3>
      <div className="row">
        {data.map((carItem,index) => {
          return <div className="col-3" key={index}>
                <CarItem dataCarItem={carItem} handleChangeCar={setCarState}></CarItem>
          </div>;
        })}

        {/* <div className="col-4">
                <CarItem></CarItem>
            </div>
            <div className="col-4">
                <CarItem></CarItem>
            </div> */}
      </div>
      <ModalCar spModal={CarState}></ModalCar>
    </div>
  );
};

export default EXCarStore;
