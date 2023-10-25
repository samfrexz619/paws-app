

interface Props {
  placeholder: string;
}
 

const SearchInput = ({ placeholder }: Props) => {
  return ( 
    <div className="dark:bg-grey_black bg-white w-full flex h-606 rounded-20 px-4 items-center focus-within:border-paw_pry focus-within:border focus:border-solid">
      <input 
        type="search"
        placeholder={placeholder}
        className='outline-0 text-grey_11 block font-normal search_input'
      />
      <span className='w-10 dark:bg-pink_10 h-10 text-paw_pry bg-hov rounded-[10px] flex justify-center items-center'>
        <svg width='20' height='20' viewBox='0 0 20 20'>
          <use xlinkHref={`/sprite.svg#search`} />
        </svg>
      </span>
    </div>
   );
}
 
export default SearchInput;