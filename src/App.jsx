import "./layout.scss"
import Jack from "./Jack"
import NavBar from "./components/navbar/NavBar"
import HomePage from "./routesorpages/homePage/homePage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
      {/* <Jack/> */}
    </div>
  )
}

export default App