import { Search } from "lucide-react";
import SearchInput from "./SearchInput";

function SearchBox({onChange, filterInput}) {
  return (
    <div className="flex justify-center mt-3">
      <div className=" flex w-screen md:w-[60%]  min-h-10 rounded-full p-2 md:p-3 shadow-md bg-white border border-zinc-100">
        <SearchInput placeholder={'Search by Name'} onChange={onChange} value={filterInput.name} name="name" />
        <SearchInput  placeholder={'Search by Location'} onChange={onChange} value={filterInput.location} name='location'/>
        <Search className="w-16 ml-2 hidden md:block" color="#9ca3af" />
      </div>
    </div>
  );
}

export default SearchBox;
