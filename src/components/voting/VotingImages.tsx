import { useLocation } from "react-router-dom";
import { useState } from "react";
import ImageItems from "./ImageItems";
import { CatData } from "@/lib/type";


interface Props {
  catImages: CatData[];
}

const VotingImage = ({ catImages }: Props) => {

  const [ currImage, setCurrImage ] = useState(0)

  const { pathname } = useLocation()

  const handleNext =()=> {
    setCurrImage(currImage === catImages.length - 1 ? 0 : currImage + 1)
  }  

  return ( 
    <div className="w-full">
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
      <section className="w-full my-6">
        <ImageItems 
          catImages={catImages} 
          currentSlide={currImage} 
          setCurrentSlide={setCurrImage}
        />
      </section>
    </div>
   );
}
 
export default VotingImage;