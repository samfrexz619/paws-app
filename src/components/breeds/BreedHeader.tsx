import Dropdown from "../ui/Dropdown";
import NavPath from "../ui/NavPath";


const BreedHeader = () => {
  return ( 
    <div className="flex">
     <NavPath />
     <div>
      <Dropdown  />
     </div>
    </div>
   );
}
 
export default BreedHeader;