// import banner from '@/assets/images/banner.png'
import { CatData } from '@/lib/type';



interface Props {
  catImages: CatData[];
  currentSlide: number;
}

const ImageItems = ({ catImages, currentSlide }: Props) => {
  return ( 
    <div className="w-full h-[360px] flex">
      {
        catImages.map((image, index) => (
          <img 
            src={image.url} 
            alt=""  
            key={image.id}
            className={`${currentSlide === index ? 'w-full' : 'hidden'} rounded-20`}
          />
        ))
      }
      {/* <img src={banner} alt="" /> */}
    </div>
   );
}
 
export default ImageItems;