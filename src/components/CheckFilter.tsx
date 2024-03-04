interface CheckboxFilterProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOptions: (selected: string[]) => void;
  isPlatform: boolean;
}

function CheckboxFilter({
  label,
  options,
  selectedOptions,
  setSelectedOptions,
}: CheckboxFilterProps) {
  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className='mb-2'>
      <p className='font-digicat text-xs whitespace-nowrap'>{label}:</p>
      <div className='space-y-2'>
        {options.map((option) => (
          <label className='flex space-x-3' key={option}>
            <input
              type='checkbox'
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {<div>{option}</div>}
          </label>
        ))}
      </div>
    </div>
  );
}
export default CheckboxFilter;
