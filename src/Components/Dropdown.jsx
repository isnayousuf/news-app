import Select from "react-select";

const CustomDropdown = ({
  selectedValue,
  setSelectedValue,
  data,
  multiple = false,
}) => {
  const options = data.map((item) => ({ value: item.code, label: item.name }));

  const handleChange = (selectedOptions) => {
    setSelectedValue(
      multiple ? selectedOptions.map((opt) => opt.value) : selectedOptions.value
    );
  };

  return (
    <Select
      options={options}
      isMulti={multiple}
      value={
        multiple
          ? options.filter((opt) => selectedValue.includes(opt.value))
          : options.find((opt) => opt.value === selectedValue)
      }
      onChange={handleChange}
      className="text-dark"
    />
  );
};

export default CustomDropdown;
