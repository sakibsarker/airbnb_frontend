import React from "react";
import Select from "react-select";
import useCountries from "@/app/hooks/UseCountries";

export type SelectCountryType = {
  label: string;
  value: string;
};
interface SelectCountryProps {
  value?: SelectCountryType;
  onChange: (value: SelectCountryType) => void;
}
const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        isClearable
        placeholder="Anywhere"
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as SelectCountryType)}
      />
    </>
  );
};

export default SelectCountry;
