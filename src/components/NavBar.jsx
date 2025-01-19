import { Users } from "lucide-react"

function NavBar() {
  return (
    <div className='relative flex border-b-2 border-b-emerald-600 lg:border-none'>
        <Users className="lg:absolute left-14 top-7 w-[20px] h-[20px] md:w-[30px] md:h-[30px]" color="#059669" />
        <p className='lg:absolute left-20 top-7 text-base md:text-2xl text-emerald-600 tracking-wider px-2 font-medium'>Profiles</p>
    </div>
  )
}

export default NavBar