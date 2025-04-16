import React from "react";
import "./Card.css";
interface cardContext {
  value: string | number;
  random?: number;
}

const Card: React.FC<cardContext> = (data) => {
  return (
    <div
      style={{
        borderWidth: 2,
        borderColor: "black",
        borderStyle: "solid",
        width: "40px",
      }}
    >
      {data?.value}
      <p>{data?.random}</p>
    </div>
  );
};

export default Card;
