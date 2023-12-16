import { useLocation } from "react-router-dom";



interface Props {
  handleNext?: ()=> void;
}


const NavPath = ({ handleNext }: Props) => {

  const { pathname } = useLocation()

  return ( 
    <div className="flex gap-x-5">
      <button onClick={handleNext} className="w-10 h-10 bg-paw_hov text-paw_pry flex justify-center items-center rounded-10 dark:bg-grey_black">
        <svg width="7" height="12" viewBox="0 0 7 12">
          <use xlinkHref="/sprite.svg#prev" />
        </svg>
      </button>
      <div className="h-10 w-36 rounded-10 flex items-center justify-center bg-paw_pry text-white">
        <p className="uppercase">{pathname.slice(1)}</p>
      </div>
    </div>
   );
}
 
export default NavPath;