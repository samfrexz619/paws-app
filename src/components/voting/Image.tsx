import { CatData } from "@/lib/type";



interface Props {
  currentSlide: number;
  index: number;
  image: CatData;
}


const Image = ({ currentSlide, index, image}: Props) => {
  return ( 
    <img 
      src={image.url} 
      alt=""  
      key={image.id}
      className={`${currentSlide === index ? 'w-full' : 'hidden'} rounded-20`}
    />
   );
}
 
export default Image;