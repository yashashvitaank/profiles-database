
const InputField = ({ label, type = 'text', name, value, onChange, placeholder, pattern }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-emerald-500">
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full mt-1 border border-gray-300 focus:border-emerald-500 focus:ring-none rounded-md p-2"
          placeholder={placeholder}
          rows="4"
          required
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          pattern={pattern}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full mt-1 border border-gray-300 rounded-md p-2"
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default InputField;
