import React, { useState, useEffect } from "react";
import "./Xcountries.css";
const Xcountries = () => {
  const [countryList, SetCountryList] = useState([]);

  const fethcData = async () => {
    try {
      const response = await fetch(
        "https://xcountries-backend.azurewebsites.net/all"
      );
      const data = await response.json();
      SetCountryList(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fethcData();
  }, []);

  return (
    <div className="countryListParent">
      {countryList.map((country, index) => (
        <div key={index} className="country">
          <div className="countryImgDiv">
            <img src={country.flag} alt={country.name} />
          </div>

          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Xcountries;
