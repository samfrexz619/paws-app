import { CatData } from '@/lib/type';
import ImageIndicator from './Indicators';
import Image from './Image';


interface Props {
  catImages: CatData[];
  currentSlide: number;
  setCurrentSlide: (idx: number)=> void;
}

const ImageItems = ({ catImages, currentSlide, setCurrentSlide }: Props) => {
  return ( 
    <div className="w-full h-[360px] flex">
      {
        catImages.map((image, index) => (
          <Image
            key={image.id}
            image={image}
            index={index}
            currentSlide={currentSlide}
          />
        ))
      }
      <span className='absolute flex bottom-0 gap-x-2 bg-grey_10 h-10 px-5 items-center shadow-sm rounded-20 dark:bg-black_5'>
        {
          catImages.map((img, index)=> (
            <ImageIndicator 
              key={index}
              catImages={img} 
              index={index} 
              setCurrentSlide={setCurrentSlide} 
              currentSlide={currentSlide}
            />
          ))
        }
      </span>
    </div>
   );
}
 
export default ImageItems;