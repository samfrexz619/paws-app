import Card from '@/components/ui/CardLink'
import { cardItems } from '@/lib/card';


interface Prop {
  toggleNav: ()=> void;
}


const Navigation = ({ toggleNav }:Prop) => {
  return ( 
    <nav onClick={toggleNav} className="fixed inset-y-0 w-full bg-modal backdrop-blur-sm lg:hidden flex justify-end">
      <div onClick={e => e.stopPropagation()} className="w-full relative bg-grey_10 h-screen dark:bg-paw_black">
        <div className="w-full px-4 flex justify-end py-4">
          <button onClick={toggleNav} className="bg-white h-11 w-11 rounded-xl flex items-center justify-center text-paw_pry dark:bg-grey_black">
            <svg width="18" height="18" viewBox="0 0 18 18">
              <use xlinkHref="/sprite.svg#close" />
            </svg>
          </button>
        </div>
        <div className="flex lg:gap-x-8 w-full flex-col gap-y-5 lg:flex-row mt-20 px-4">
          {
            cardItems.map(card => (
              <Card
                key={card.id}
                variant={card.variant}
                path={card.path}
                imgPath={card.img}
              />
            ))
          }
        </div>
      </div>
    </nav>
   );
}
 
export default Navigation;