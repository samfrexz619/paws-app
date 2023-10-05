import DefaultLayout from "@/components/DefaultLayout";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return ( 
    <main className="bg-grey_10 lg:flex lg:justify-between block dark:bg-paw_black dark:text-white">
      <div className='hidden lg:block lg:w-1/2 w-0'>
        <DefaultLayout  />
      </div>
      <div className="lg:w-1/2 w-full lg:fixed lg:left-1/2 lg:inset-y-0 flex-col flex">
        <Outlet  />
      </div>
    </main>
   );
}
 
export default Layout;