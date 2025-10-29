import NavBar from "./componets/NavBar"
import { Outlet , useLocation} from "react-router-dom"

const App = () => {

  const location = useLocation();
  const hideNavBarRoutes=["/login","/register"];

  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);
  return (
    <div>
      {!shouldHideNavBar && <NavBar/>}
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
