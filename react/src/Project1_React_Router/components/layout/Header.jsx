import { NavLink } from "react-router-dom";

export const Header = () => {

 const getNavLinkStyle = ({isActive}) =>{
    return {
        color: isActive ? "green" : "black"
    }
 }


  return (
    <header className="section-navbar">

      {/* Top Bar */}
      <section className="top-txt">
        <div className="container top-bar">
          <p>Get Rutvik Membership, 30-day return or refund guarantee.</p>

          <div className="sign-links">
            <NavLink to="#">SIGN IN</NavLink>
            <NavLink to="#">SIGN UP</NavLink>
          </div>
        </div>
      </section>

      {/* Main Navbar */}
      <section className="main-navbar">
        <div className="container nav-flex">

          <div className="navbar-brand">
            <NavLink to="/">RutvikFlix</NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={({ isActive })=>{
                    return{
                        color : isActive ? "red" : "black",
                    };
                }}>
                  ABOUT
                </NavLink>
              </li>
              <li>
                <NavLink to="/movie" className="nav-link" style={getNavLinkStyle}>
                  MOVIES
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>

        </div>
      </section>

    </header>
  );
};
