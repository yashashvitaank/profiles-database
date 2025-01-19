import { useState } from "react"
import NavBar from "./NavBar"
import ProfilesDisplaySection from "./ProfilesDisplaySection"
import SearchBox from "./SearchBar/SearchBox"

function AdminPanel() {
  const [filterInput, setFilterInput] = useState({name: '', location: ''});
  const onChangeHandler = (e) => {
    const name = e?.target?.name;
    const value = e?.target?.value;
    setFilterInput((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  return (
    <div className="flex flex-col p-2 bg-zinc-50 min-h-dvh min-w-[100vw]">
        <NavBar/>
        <SearchBox filterInput={filterInput} onChange={onChangeHandler}  />
        <ProfilesDisplaySection filterInput={filterInput} />
    </div>
  )
}

export default AdminPanel