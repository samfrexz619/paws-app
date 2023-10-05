import { Outlet } from "react-router-dom";


const Layout = () => {
  return ( 
    <main>
      <p>layout</p>
      <Outlet  />
    </main>
   );
}
 
export default Layout;