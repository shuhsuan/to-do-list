import React, { useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import './cityselector.css'

const CitySelector = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleKeyPress = (e) => {
    if(e.keyCode === 13)
    {
        onSearch(city);
    }
  }

  return (
    <div id="selector">
      <div id="title">
        <h1>Search your city</h1>
      </div>

      <FormControl id="input"
      autoComplete="off"
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)} //update city value with user input
        value={city} //value is the current selected city
        onKeyDown={handleKeyPress} //if Enter is the key pressed, submit Form
      />

      <Button id="butt"  type="submit" onClick={() => onSearch(city)}>Check Weather</Button>
    </div>
  );
};

export default CitySelector;
