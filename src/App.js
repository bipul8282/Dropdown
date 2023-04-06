import React, { useState } from "react";
import Select from "react-select";

const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
];

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <div>
      <Select
        options={options} 
        isMulti
        value={selectedOptions}
        onChange={setSelectedOptions}
      />
    </div>
  );
}