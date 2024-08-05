import { FormInputProps } from "./types";

export default function FormInput({label, type, inputId, inputName, value, handleChange, error}: FormInputProps) {

  return (
    <div className="mb-4">
      <label className="block text-gray-700">{label}</label>
      {error && <p className="text-red text-xs italic">{error}</p>}
      <input
        type={type}
        id={inputId}
        name={inputName}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        onChange={(e) => handleChange(e.target)}
        value={value}
      />
    </div>
  );
}
