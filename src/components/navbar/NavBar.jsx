import { useState } from "react"
import "./navbar.scss"

function NavBar() {

  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" />
          <span>JackRealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Sign In</a>
        <a href="/" className="register">Sign Up</a>
        <div className="menuIcon">
          {/* <img src="/menu.png" alt="" onClick={() => setOpen(true)}/>  //not good because once not toggle */}
           {/* <img src="/menu.png" alt="" onClick={() => setOpen(!open)}/>  */}
           {/* or  */}
           <img src="/menu.png"   //you can change the icon  Hamburger Menu
           alt="" 
           onClick={() => setOpen((prev)=> !prev)}
           /> 
        </div>
        <div className={open ? "menu active" : "menu"}>
          {/* you can add icons next to each */}
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar