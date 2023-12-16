import NavPath from "../ui/NavPath";


const GalleryContent = () => {
  return ( 
    <div className="w-full">
      <div className="w-full flex justify-between">
        <NavPath  />
        <button className="bg-paw_hov rounded-10 text-paw_pry w-[140px] flex items-center justify-center gap-x-3 py-2">
          <svg width="16" height="16" viewBox="0 0 16 16">
            <use xlinkHref="/sprite.svg#upload" />
          </svg>
          <span className="uppercase text-12">upload</span>
        </button>
      </div>
    </div>
   );
}
 
export default GalleryContent;