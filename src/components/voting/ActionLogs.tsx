import EmojiIcons from "../ui/EmojiIcon"




const ActionLogs = () => {

  // const classes = {
  //   log: 'bg-grey_10 rounded-10',
  //   log__body: 'lg:h-[60px] w-full text-16 flex items-center px-3 justify-between h-[118px]',
  //   log__content: 'flex gap-x-5 h-full items-center',
  //   log__time: 'p-1 bg-white text-paw_black rounded-md font-normal',
  // }

  return (
    <div className="bg-grey_10 rounded-10 w-full">
      <div className="lg:h-[60px] w-full md:text-16 text-[14px] flex items-center px-3 h-[118px] md:gap-x-5 flex-wrap justify-between">
        {/* <div className="flex gap-x-5 h-full items-center">
        </div> */}
          <p className="p-1 bg-white text-paw_black rounded-md font-normal order-1">
            12: 31
          </p>
          <p className="text-grey_11 pr-20 md:flex-1 w-full md:w-4/5 order-3  md:order-2">Image ID: <span className="text-paw_black">fQSunHvl8</span> was added to Favourites</p>
        <button className="order-2 md:order-3">
          <EmojiIcons name="favorite" />
        </button>
      </div>
    </div>
  )
}

export default ActionLogs