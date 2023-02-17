import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline"

function Sidebar() {
  return (
    <div>
      <div>
        <button type="">
          <HomeIcon className="h-5 w-5"/>
          <p>Home</p>
        </button>
        <button type="">
          <SearchIcon className="h-5 w-5"/>
          <p>Home</p>
        </button>
        <button type="">
          <LibraryIcon className="h-5 w-5"/>
          <p>Home</p>
        </button>
        <button type="">
          <PlusCircleIcon className="h-5 w-5"/>
          <p>Home</p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar