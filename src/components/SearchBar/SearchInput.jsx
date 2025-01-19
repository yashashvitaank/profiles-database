
function SearchInput({placeholder, onChange= () => {}, value, name}) {
  return (
    <input className="w-full h-full px-2 focus:ring-0 focus:outline-none border-r border-zinc-200" placeholder={placeholder} onChange={onChange} value={value} name={name}  />
  )
}

export default SearchInput