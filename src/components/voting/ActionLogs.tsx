import EmojiIcons from "../ui/EmojiIcon"




const ActionLogs = () => {


  return (
    <div className="bg-grey_10 rounded-10 w-full dark:bg-grey_black">
      <div className="lg:h-[60px] w-full md:text-16 text-[14px] flex items-center px-3 h-[110px] md:gap-x-5 flex-wrap justify-between">
          <p className="p-1 bg-white text-paw_black dark:bg-paw_black dark:text-white rounded-md font-normal order-1">
            12: 31
          </p>
          <p className="text-grey_11 pr-20 md:flex-1 w-full md:w-4/5 order-3  md:order-2">Image ID: <span className="text-paw_black dark:text-white">fQSunHvl8</span> was added to Favourites</p>
        <button className="order-2 md:order-3">
          <EmojiIcons name="favorite" />
        </button>
      </div>
    </div>
  )
}

export default ActionLogs