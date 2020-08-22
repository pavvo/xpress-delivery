import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";

import { database } from "../config/firebase";
import CarView from "./CarView";

const Dashboard = (props) => {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [makeYear, setMakeYear] = useState("");
  const [enginePower, setEnginePower] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [carList, setCarList] = useState([]);

  const [isMercedes, setIsMercedes] = useState(true);

  const addCar = (e) => {
    e.preventDefault();
    const carsRef = database.ref("Cars");
    carsRef.push({ brand, model, makeYear, enginePower });
    setSuccessMessage("Success! You added the car");
  };

  const getCars = () => {
    const carsRef = database.ref("Cars");

    carsRef.on("value", (snapshot) => {
      const cars = snapshot.val();
      const carsList = [];
      for (let id in cars) {
        carsList.push({ id, ...cars[id] });
      }
      setCarList(carsList);
    });
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <React.Fragment>
      <div className="w-full h-16 bg-gray-300 flex justify-around items-center">
        <h1>
          Welcome {currentUser.email.slice(0, currentUser.email.indexOf("@"))}
        </h1>
        <button onClick={props.logout}>Logout</button>
      </div>
      <div className="main flex justify-around pt-16">
        <form className="addCar" onSubmit={addCar}>
          <h1>{successMessage}</h1>
          <InputField
            placeholder="Brand"
            label="Brand"
            value={brand}
            onChange={setBrand}
          />
          <InputField
            placeholder="Model"
            label="Model"
            value={model}
            onChange={setModel}
          />
          <InputField
            placeholder="Make year"
            label="Make year"
            value={makeYear}
            onChange={setMakeYear}
          />
          <InputField
            placeholder="Engine Power"
            label="Engine power"
            value={enginePower}
            onChange={setEnginePower}
          />
          <button className="button-classic rounded-md" type="submit">
            Add car
          </button>
        </form>
        <div className="carList">
          {carList.length >= 1 ? (
            carList.map((car) => (
              <>
                <CarView
                  brand={car.brand}
                  model={car.model}
                  makeYear={car.makeYear}
                  enginePower={car.enginePower}
                  id={car.id}
                  key={car.id}
                />
              </>
            ))
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
