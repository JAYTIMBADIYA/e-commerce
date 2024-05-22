import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Face from "../../assets/Ellipse 94.png";

const Navbar = () => {
  
  const [activeMenuItem, setActiveMenuItem] = useState("/");
  const [showMenu, setShowMenu] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  // const handleClick = (route) => {
  //   setActiveMenuItem(route);
  //   switch (route) {
  //     case "/":
  //       navigate("/");
  //       break;
  //     case "alloffers":
  //       navigate("/alloffers");
  //       break;
  //     case "partner":
  //       navigate("/partner");
  //       break;
  //     case "merchants":
  //       navigate("/merchants");
  //       break;
  //     case "contact":
  //       navigate("/contact");
  //       break;
  //     default:
  //       // Handle default case if needed
  //       break;
      
  //   }
  // };

  const handleClick = (route) => {
    setActiveMenuItem(route);
    navigate(route);
  };
  

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setShowPopup(event.target.value.length > 0);
  };

  const handleItemClick = (route) => {
    setActiveMenuItem(route);
    setShowPopup(false);
    setSearchTerm("");
    navigate(route)
  };

  const popupMenuItems = [
    { label: "Home", path: "/" },
    { label: "All Offers", path: "alloffers" },
    { label: "Partners", path: "partner" },
    { label: "Merchants", path: "merchants" },
    { label: "Contact Us", path: "contact" },
  ];

  const filteredMenuItems = popupMenuItems.filter(item =>
    item.label.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
    <>
      <div className="navbar px-10 ">
        <div className="flex justify-between mt-3">
          {/* navbar logo */}
          <div className="navbar-logo max-sm:w-[100px] max-sm:mt-3">
            <img src={Logo} alt="" />
          </div>
          {/* navbar menu */}
          <ul
            className={`nav-menu flex gap-6 mt-3 cursor-pointer text-base font-semibold text-gray-400 max-md:hidden`}>
              {popupMenuItems.map((item) => (
            <li key={item.path}>
              <a
                href="#"
                onClick={() => handleClick(item.path)}
                className={
                  activeMenuItem === item.path ? "text-[#1CC0A0]" : "text-gray-400"
                }
              >
                {item.label}
              </a>
            </li>
              ))}
            {/* <li>
              <a
                href="#"
                onClick={() => handleClick("alloffers")}
                className={
                  activeMenuItem === "alloffers"
                    ? "text-[#1CC0A0]"
                    : "text-gray-400"
                }
              >
                All offer
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleClick("partner")}
                className={
                  activeMenuItem === "partner"
                    ? "text-[#1CC0A0]"

                    : "text-gray-400"
                }
              >
                Partners
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleClick("merchants")}
                className={
                  activeMenuItem === "merchants"
                    ? "text-[#1CC0A0]"
                    : "text-gray-400"
                }
              >
                Merchants
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleClick("contact")}
                className={
                  activeMenuItem === "contact"
                    ? "text-[#1CC0A0]"
                    : "text-gray-400"
                }
              >
                Contact us
              </a>
            </li> */}
          </ul>
          {/* navbar search bar */}
          <div className="reletive">
            <div className="group max-xl:hidden">
              <form className="exam mt-2">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                 onChange={handleInputChange}
                  className="w-[250px] sm:w[200px] rounded-md border border-gray-600 pl-6 py-1"
                />
                {showPopup && (
          <div className="absolute top-10 left-0 w-[250px] bg-white border border-gray-300 rounded-md shadow-lg">
            <ul>
              {filteredMenuItems.map((item) => (
                <li key={item.path}>
                  <a
                    href="#"
                    onClick={() => handleItemClick(item.path)}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
              </form>

              
            </div>
          </div>
          {/* navbar-icon */}
          <div className="navbar-icon flex gap-7 text-xl mt-3 text-gray-500 max-md:hidden">
            <a href="">
              <i className="fa-solid fa-bell max-xl:hidden"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-heart max-xl:hidden"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-cart-shopping max-xl:hidden"></i>
            </a>
          </div>
          {/* navber last */}
          <div className="navbar-face flex gap-4 cursor-pointer max-xl:text-sm max-sm:">
            <img
              src={Face}
              alt="Face"
              className="w-12 h-12 max-sm:w-[50px] max-sm:h-[50px]"
            />
            <h5 className="font-bold text-emerald-500 text-sm mt-2 max-sm:mt-4">
              100 Points
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
