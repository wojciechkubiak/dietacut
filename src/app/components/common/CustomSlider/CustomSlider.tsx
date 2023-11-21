import Slider from "rc-slider";

interface CustomSliderProps {
  min: number;
  max: number;
  step: number;
  value: number | number[];
  onChange: (value: number | number[]) => void;
  isRange?: boolean;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  min,
  max,
  step,
  value,
  onChange,
  isRange = false,
}) => {
  return (
    <Slider
      min={min}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
      range={isRange}
      styles={{
        rail: {
          height: "2px",
        },
        track: {
          backgroundColor: !isRange ? "#e0e7ff" : "#e4e4e7",
          height: "2px",
        },
        handle: {
          borderRadius: "15%",
          border: "2px solid #fbbf24",
          width: "16px",
        },
      }}
    />
  );
};

export default CustomSlider;
