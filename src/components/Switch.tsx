import React, { useState } from 'react';

interface SwitchProps {
  label: string;
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, isChecked = false, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange && onChange(newChecked);
  };

  return (
    <div
      onClick={handleToggle}

      className="flex items-center cursor-pointer" >
      <button
        className={`w-7 h-4 flex items-center rounded-full p-1 transition-colors ${checked ? 'bg-textActive' : 'bg-switch'
          }`}
      >
        <div
          className={`bg-primary w-2.5 h-2.5 rounded-full shadow-md transform transition-transform ${checked ? 'translate-x-3' : 'translate-x-0'
            }`}
        />
      </button>
      <span className="ml-2 ">{label}</span>
    </div>
  );
};

export default Switch;
