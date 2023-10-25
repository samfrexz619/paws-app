import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import SearchInput from "./SearchInput";
import EmojiIcons from "./ui/EmojiIcon";
import Navigation from "./Navigation";

interface Prop {
  children: React.ReactNode;
}

const PageHeader = ({ children }: Prop) => {

  const { pathname } = useLocation()

  const [showMobileNav, setShowMobileNav] = useState<boolean>(false)

  const emojiLinks = [
    {
      path: '/voting/likes',
      emoji: 'like',
      id: 2
    },
    {
      path: '/voting/favorites',
      emoji: 'favorite',
      id: 1
    },
    {
      path: '/voting/dislikes', 

      emoji: 'sad',
      id: 3
    },
  ]

  const handleNav =()=> {
    setShowMobileNav(prev => !prev)
    console.log(3);
    
  }

  return ( 
    <>
      { pathname !== '/' &&
        <header className="py-10 px-7 w-full items-center justify-between">
        <div className="flex lg:flex-row w-full justify-between lg:gap-x-3 flex-wrap lg:flex-nowrap gap-y-5">
          <button onClick={handleNav} className="lg:hidden h-606 w-606 block bg-white rounded-20 text-paw_pry dark:bg-grey_black">
            <span className="w-full flex justify-center items-center h-full mt-1">
              <svg width='30' height='30' viewBox='0 0 30 30'>
                <use xlinkHref="/sprite.svg#menu" />
              </svg>
            </span>
          </button>
          <div className="lg:w-[420px] w-full order-3 lg:order-1">
            <SearchInput
              placeholder="Search for breeds by name"
            />
          </div>
          <div className="flex gap-x-3 order-2 lg:order-1">
            {
              emojiLinks.map(emoji => (
                <NavLink key={emoji.id} to={`${emoji.path}`}
                  className={` h-606 w-606 rounded-20 flex justify-center items-center dark:bg-grey_black ${pathname === emoji.path ? 'bg-paw_pry text-white' : 'bg-white text-paw_pry'}`}>
                  <EmojiIcons name={emoji.emoji} />
                </NavLink>
              ))
            }
          </div>
        </div>
        </header>
      }
      <main>
        { children }
      </main>
      { showMobileNav && <Navigation toggleNav={handleNav} />}
    </>
   );
}
 
export default PageHeader;