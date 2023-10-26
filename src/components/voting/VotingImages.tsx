import { useLocation } from "react-router-dom";
import ImageItems from "./ImageItems";
import { useEffect, useState } from "react";
import { fetchCatImages } from "@/services/catApi";
import { CatData } from "@/lib/type";


const VotingImage = () => {

  const [cats, setCats] = useState<CatData[]>([])

  const [ currImage, setCurrImage ] = useState(0)

  const { pathname } = useLocation()

  useEffect(()=> {
    fetchCatImages()
    .then(res => setCats(res.data))
  }, [])

  const handleNext =()=> {
    setCurrImage(currImage === cats.length - 1 ? 0 : currImage + 1)
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
        <ImageItems catImages={cats} currentSlide={currImage} />
      </section>
    </div>
   );
}
 
export default VotingImage;