import { CatData } from "@/lib/type";

interface Props {
  catImages: CatData;
  setCurrentSlide: (idx: number)=> void;
  currentSlide: number;
  index: number;
}

const ImageIndicator = ({setCurrentSlide, currentSlide, index }: Props) => {
  return ( 
    <button 
      onClick={()=> setCurrentSlide(index)}
      className={`h-3 w-3 rounded-full ${currentSlide === index ? 'bg-paw_pry' : 'bg-paw_hov'} cursor-pointer`}
      >
    </button>
   );
}
 
export default ImageIndicator;