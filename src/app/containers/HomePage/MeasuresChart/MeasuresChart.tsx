import { useState } from "react";
import Select from "react-select";

interface ChartOption {
  value: string;
  label: string;
}

const chartOptions: ChartOption[] = [
  { value: "weight", label: "Waga" },
  { value: "neck", label: "Szyja" },
];

const MeasuresChart: React.FC = () => {
  const [currentChart, setCurrentChart] = useState<ChartOption>(
    chartOptions[0]
  );

  return (
    <>
      <Select
        className="w-96 mt-4"
        defaultValue={currentChart}
        onChange={(newValue: ChartOption | null) => {
          if (newValue) setCurrentChart(newValue);
        }}
        options={chartOptions}
        styles={{
          dropdownIndicator: (styles) => ({
            ...styles,
            color: "white",
            "&:hover": {
              color: "white",
            },
          }),
          singleValue: (styles) => ({ ...styles, color: "white" }),
          control: (styles) => ({
            ...styles,
            border: "0",
            backgroundColor: "#10b981",
            boxShadow: "none",
            color: "white",
            "&:hover": {
              border: "0",
            },
          }),
          option: (styles, { isFocused, isSelected, isDisabled }) => ({
            ...styles,
            backgroundColor: isFocused ? "#10b981" : "white",
            color: isFocused ? "white" : "#171717",
            "&:focus": {
              color: "#10b981",
            },
            ":active": {
              ...styles[":active"],
              backgroundColor: !isDisabled
                ? isSelected
                  ? "#10b981"
                  : "#34d399"
                : undefined,
              color: "white",
            },
          }),
        }}
        isSearchable={false}
      />
    </>
  );
};

export default MeasuresChart;
