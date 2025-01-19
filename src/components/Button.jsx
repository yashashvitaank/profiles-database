
function Button({onClick, buttonName, className}) {
    return (
      <button className={`py-3 px-3 text-center leading-[0] cursor-pointer bg-emerald-500 transition-colors text-white active:scale-95  text-sm rounded sm:text-lg ${className}`} onClick={onClick}>
          {buttonName}
      </button>
    )
  }

export default Button