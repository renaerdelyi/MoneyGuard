const Input = ({ type, name, placeholder }) => {
    return (
      <input
        className="border px-2 py-1 rounded w-full"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
  };
  
  export default Input;