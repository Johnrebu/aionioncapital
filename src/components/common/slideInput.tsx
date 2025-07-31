"use client";
import Slider from "@mui/material/Slider";
interface Props {
  label?: string;
  value?: number;
  max?: number;
  min?: number;
  onChange?: (event: Event, value: number | number[]) => void;
  labelIcon?: string;
}

const RangeInput = (props: Props) => {
  function valuetext(value: number) {
    return `${value} ${props.labelIcon ?? ""}`;
  }
  return (
    <>
      <div className="my-2 mt-10">
        <div className="text-black  flex justify-between items-center">
          <div>{props.label}</div>
          <div className="rounded-md text-center text-xs py-1 w-[80px] bg-[#fbdadc]">
            {props.value} {props.labelIcon ?? ""}
          </div>
        </div>
        <Slider
          aria-label="Temperature"
          defaultValue={props.min}
          max={props.max}
          value={props.value ?? 0}
          onChange={props.onChange}
          getAriaValueText={valuetext}
          sx={{
            color: "#9b9afb",
            "& .MuiSlider-thumb": {
              backgroundColor: "#036ffc",
              height: 12,
              width: 12,
              boxShadow: "none",
              outline: "none", // Removes focus outline
              "&:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "none", // Prevents shadow on hover and focus
                outline: "none", // Removes focus outline
              },
            },
          }}
        />
      </div>
    </>
  );
};
export default RangeInput;
