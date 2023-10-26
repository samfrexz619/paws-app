import { Outlet } from "react-router-dom";
import DefaultLayout from "@/components/DefaultLayout";
import PageHeader from "@/components/PageHeader";


const Layout = () => {
  return ( 
    <main className="bg-grey_10 lg:flex lg:justify-between block dark:bg-paw_black dark:text-white min-h-screen">
      <div className='hidden lg:block lg:w-1/2 w-0'>
        <DefaultLayout  />
      </div>
      <div className="lg:w-1/2 px-7 w-full lg:fixed lg:left-1/2 inset-y-0 flex-col flex overflow-y-auto reset">
        <PageHeader>
          <Outlet  />
        </PageHeader>
      </div>
    </main>
   );
}
 
export default Layout;