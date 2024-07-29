import React from "react";
import { Card } from "./ui/card";

const ColorCard = ({ color }: { color: string }) => {
  return (
    <div>
      <Card
        className={`w-16 h-16 sm:w-28 sm:h-28 md:w-40 md:h-40`}
        style={{ backgroundColor: color }}
      />
      <p className="font-medium text-xs sm:text-sm md:text-base">{color}</p>
    </div>
  );
};

export default ColorCard;
