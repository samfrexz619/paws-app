import { useEffect, useState, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchBreeds } from "@/services/catApi";
import { BreedData } from "@/lib/type";


const Dropdown = () => {

  const [breeds, setBreeds] = useState<BreedData[]>()

  const [searchVal, setSearchVal] = useState('')

  const [selected, setSelected] = useState('')

  const [isOpen, setIsOpen] = useState(false)

  const dropdownList = useRef<HTMLUListElement>(null)

  const handleClickOutside =(e: MouseEvent)=> {
    if(!dropdownList.current?.contains(e.target as HTMLElement)){
      setIsOpen(false)
    }
  }

  useEffect(()=> {
    document.addEventListener('mousedown', handleClickOutside)
    return()=> document.removeEventListener('mousedown', handleClickOutside)

  },[])

  useEffect(()=> {
    fetchBreeds()
    .then(res => setBreeds(res.data))
  }, [])
  
  // console.log(breeds)

  const handleOpenDropdown =()=> {
    setIsOpen(!isOpen)    
  }

  return ( 
    <div className="w-300 dropdown">
      <div 
        onClick={handleOpenDropdown}
        className="bg-grey_10 w-full p-2 flex items-center justify-between rounded-10 text-grey_11">
        {selected 
          ? selected?.length > 20 
          ? selected.slice(0, 20) + '...'
          : selected 
          : 'All breeds'
        }
        <BiChevronDown size={20} />
      </div>
      <ul 
        ref={dropdownList}
        className={`bg-white mt-2 shadow-md rounded-10 overflow-y-auto absolute w-full ${isOpen ? 'h-56' : 'h-0'}`}>
        <div className="flex w-full text-grey_11 p-2">
          <input 
            type="text" 
            className="w-full" 
            placeholder="All breeds" 
            value={searchVal}
            onChange={(e)=> setSearchVal(e.target.value.toLowerCase())}
          />
          <AiOutlineSearch size={18} />
        </div>
        {
          breeds?.map(breed => (
            <li 
              key={breed.id} 
              className={`p-2 hover:bg-red-100 text-grey_11 ${breed?.name.toLowerCase().startsWith(searchVal) ? 'block' : 'hidden'} ${breed?.name.toLowerCase() === selected.toLowerCase() && 'bg-sky-300'}`
              }
              onClick={()=> {
                if(breed?.name.toLowerCase() !== selected.toLowerCase()){
                  setSelected(breed.name)
                  setIsOpen(false)
                }
              }}
            >
              { breed?.name}
            </li>
          ))
        } 
      </ul>
    </div>
   );
}
 
export default Dropdown;