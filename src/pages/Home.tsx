import React from "react";
import "react-date-range-ts/dist/styles.css"; // main style file
import "react-date-range-ts/dist/theme/default.css"; // theme css file
import { Calendar } from "react-date-range-ts";
type Props = {};

const Home = (props: Props) => {
  const handleSelect = () => {
    console.log("hola");
  };
  return (
    <div>
      home
      <Calendar date={new Date()} onChange={handleSelect} />
    </div>
  );
};

export default Home;
