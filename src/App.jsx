import NavBar from "./componets/NavBar"
import { Outlet } from "react-router-dom"

const App = () => {

  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
