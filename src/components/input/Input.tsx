import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value, maxLength }: inputProps) => {
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        minLength={2}
        maxLength={maxLength}
        className="block w-full p-4 mr-2 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
      />
    </div>
  );
};

export default Input;
