// components/StyledCheckbox.tsx
import React, { ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <label className="checkboxContainer text-sm xs:text-base">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="checkboxInput"
      />
      <span className="customCheckbox"></span>
      {label}
    </label>
  );
};

export default Checkbox;
