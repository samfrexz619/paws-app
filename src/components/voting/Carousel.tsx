import { CatData } from '@/lib/type';
import ImageIndicator from './Indicators';
import Image from './Image';
import ReactionBtns from './ReactionBtns';


interface Props {
  catImages: CatData[];
  currentSlide: number;
  setCurrentSlide: (idx: number)=> void;
}

const Carousel = ({ catImages, currentSlide, setCurrentSlide }: Props) => {
  return ( 
    <div className="w-full h-[360px] flex relative">
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
      <div className="absolute -bottom-8 w-full flex justify-center">
        <ReactionBtns  />
      </div>
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
 
export default Carousel;