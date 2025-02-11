import React, { useState } from "react";
import { Slider } from "@mui/material";

const RangeBar = ({ min, max }: { min: number; max: number }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className="flex flex-col items-center w-full px-6">
      <div className="flex flex-row items-center justify-center w-full text-gray-700 text-lg tracking-wider mb-2">
        ${value[0]} - ${value[1]}
      </div>
      <Slider
        value={value}
        onChange={(event, newValue) => handleChange(event, newValue)}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        sx={{
          color: "black",
          height: 4,
          "& .MuiSlider-thumb": {
            width: 14,
            height: 14,
            backgroundColor: "black",
            "&:hover": {
              boxShadow: "0px 0px 0px 8px rgba(0, 0, 0, 0.16)",
            },
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#d1d1d1",
          },
        }}
      />
    </div>
  );
};

export default RangeBar;
