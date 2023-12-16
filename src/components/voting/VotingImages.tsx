// import { useLocation } from "react-router-dom";
import { useState } from "react";
import { CatData } from "@/lib/type";
import Carousel from "./Carousel";
import ActionLogs from "./ActionLogs";
import NavPath from "../ui/NavPath";


interface Props {
  catImages: CatData[];
}

const VotingImage = ({ catImages }: Props) => {

  const [ currImage, setCurrImage ] = useState(0)

  // const { pathname } = useLocation()

  const handleNext =()=> {
    setCurrImage(currImage === catImages.length - 1 ? 0 : currImage + 1)
  }

  return ( 
    <div className="w-full">
      <section className="w-full">
        <NavPath handleNext={handleNext}/>
      </section>
      <section className="w-full my-6">
        <Carousel 
          catImages={catImages} 
          currentSlide={currImage} 
          setCurrentSlide={setCurrImage}
        />
      </section>
      <section className="mt-16">
        <ActionLogs  />
      </section>
    </div>
   );
}
 
export default VotingImage;