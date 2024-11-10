import React from "react";
import Button from "./Button";

const ButtonsList = () => {
  const buttonNames = [
    "All",
    "Music",
    "T-Series",
    "Indian Pop Music",
    "Karan Aujla",
    "Masala Films",
    "Mixes",
    "Javascript",
    "Hip hop dance",
    "Comedy Clubs",
    "Gaming",
  ];
  return (
    <div className="flex mx-8">
      {buttonNames.map((btn,idx) => (
        <Button key={idx} name={btn} />
      ))}
    </div>
  );
};

export default ButtonsList;
