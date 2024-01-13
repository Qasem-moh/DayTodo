import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> Togo20 </h1>
        <img src="https://i.ibb.co/f9h62Fk/Your-paragraph-text-222.png" className="logo x-5"/>
      <div className="links">
        {/*  Links*/}
        <Link to="/">Home</Link>
        <Link to="/create" >New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
