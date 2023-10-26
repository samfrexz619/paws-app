import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";



interface CardProps {
  variant: string;
  imgPath: string; 
  path: string;
}

const CardLink = ({ variant, imgPath, path}: CardProps) => {

  const linkImg = new URL(`../../assets/images/${imgPath}.png`, import.meta.url).href
  
  const { pathname } = useLocation()

  const [isHover, setIsHover] = useState(false)

  return ( 
    <div className="lg:w-138 block w-full">
      <NavLink 
        to={path}
        className={`
          ${variant === 'voting'
          ? 'bg-paw_purple border-bod'
          : variant === 'breeds'
          ? 'bg-paw_green border-bod'
          : 'bg-paw_yellow border-bod'
        }
          rounded-20 border-solid border-4 w-full h-[198px] lg:flex items-center justify-center mb-5 hidden`
        }
      >
        <img 
          src={linkImg} 
          alt="image" 
          width={100} 
          height={125}
          style={{width: 'auto', height: 'auto'}} 
          onMouseEnter={()=> setIsHover(true)}
          onMouseLeave={()=> setIsHover(false)}
        />
      </NavLink>
      <NavLink 
        to={path}
        className={`${pathname === `${path}` ? 'bg-paw_pry dark:bg-paw_pry text-white dark:text-white' : 'bg-white text-paw_pry'} uppercase flex items-center justify-center w-full mx-auto rounded-[10px] py-3 my-2 md:my-0 text-paw_pry text-12 hover:bg-hov dark:bg-black_10 dark:text-paw_pry dark:hover:bg-hov ${isHover ? 'bg-red-100 dark:bg-red-100' : ''}`}
      >
        {variant}
      </NavLink>
    </div>
   );
}
 
export default CardLink;