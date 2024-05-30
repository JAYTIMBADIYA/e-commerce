import React, { useEffect, useRef , useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import Face from "../../assets/Ellipse 94.png";
import Updete from '../Bell/Updete/Updete';
import Noto from "../../assets/Noto.png";

const Navbar = () => {
  
  const [activeMenuItem, setActiveMenuItem] = useState("/");
  // const [showMenu, setShowMenu] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showBellMenu, setShowBellMenu] = useState(false);
  const [clickedInside, setClickedInside] = useState(false);
  const [showPartnerPopup, setShowPartnerPopup] = useState(false);
  const [showFacePopup, setShowFacePopup] = useState(false);
  const [activeFaceMenuItem, setActiveFaceMenuItem] = useState("");
  const [activeIcon, setActiveIcon] = useState("");

  const navigate = useNavigate();
  const bellMenuRef = useRef(null);


  

//   const bellClick = (route) => {
//     setActiveMenuItem(route);
//     switch (route) {
//       case "Bell":
//         navigate("Bell");
//         break;
//       default:
//         // Handle default case if needed
//         break;
//   }
// }
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
    setActiveFaceMenuItem(route);
    setShowPopup(false);
    setSearchTerm("");
    navigate(route)
  };

  const handleBellIconClick = (event) => {
    setClickedInside(true);
    setShowBellMenu(!showBellMenu);
    setActiveIcon("bell");
  };

  const handleBellMenuClick = (event) => {
    setClickedInside(true);
  };

  // const handleMouseEnter = () => {
  //   setShowPartnersMenu(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowPartnersMenu(false);
  // };

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

  const notifications = [
    {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
          {
              poc: Noto,
              title: "Password Updeted!",
              time: "13 Min ago",
              text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown"
          },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickedInside) {
        setClickedInside(false);
      } else {
        setShowBellMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedInside]);

  const likeClick = (route) => {
    switch (route) {
        case 'Mylist':
            navigate('/Mylist');
            break;
        case 'Mycart':
            navigate('/Mycart');
            break;    
        default:
            // Handle default case if needed
            break;
    }
};

  
  



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
            className="nav-menu flex gap-6 mt-3 cursor-pointer text-base font-semibold text-gray-400 max-md:hidden">
              {popupMenuItems.map((item) => (
            <li 
            key={item.path}
            onMouseEnter={() => item.path === "partner" && setShowPartnerPopup(true)}
            onMouseLeave={() => item.path === "partner" && setShowPartnerPopup(false)}
            >
              <a
                href="#"
                onClick={() => handleClick(item.path)}
                className={
                  activeMenuItem === item.path ? "text-[#1CC0A0]" : "text-gray-400"
                }
              >
                {item.label}
              </a>
              {item.path === "partner" && showPartnerPopup && (
                  <div className="popup-menu absolute bg-white border border-gray-300 shadow-lg py-2 p-2">
                    <ul>
                      <li>
                        <a href="#" onClick={() => handleItemClick("/subitem1")}>Become a partner</a>
                      </li>
                    </ul>
                  </div>
                )}
            </li>
              ))}
              </ul>
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
            <a href="#"  onClick={handleBellIconClick} className={`relative ${activeIcon === "bell" ? "text-[#43385B]" : ""}`}>
              <i className="fa-solid fa-bell max-xl:hidden" ></i>
              {notifications.length > 0 && (
                <span className="absolute top-[-10px] right-[-10px] inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-[#1CC0A0] rounded-full">
                  {notifications.length}
                </span>
              )}
            </a>
            <a href="#" onClick={() => {likeClick('Mylist'); setActiveIcon('Mylist');}} className={`relative ${activeIcon === "Mylist" ? "text-[#43385B]" : ""}`}>
              <i className="fa-solid fa-heart max-xl:hidden"></i>
            </a>
            <a href="#" onClick={() => {likeClick('Mycart'); setActiveIcon('Mycart');}} className={`relative ${activeIcon === "Mycart" ? "text-[#43385B]" : ""}`} >
              <i className="fa-solid fa-cart-shopping max-xl:hidden"></i>
            </a>
          </div>
          {/* navber last */}
          <div className="navbar-face flex gap-4 cursor-pointer max-xl:text-sm max-sm:" onMouseEnter={() => setShowFacePopup(true)}
            onMouseLeave={() => setShowFacePopup(false)}>
            <img
              src={Face}
              alt="Face"
              className="w-12 h-12 max-sm:w-[50px] max-sm:h-[50px]"
            />
            <h5 className="font-bold text-emerald-500 text-[16px] mt-3 max-sm:mt-4">
              100 Points
            </h5>
            {showFacePopup && (
              <div className="absolute top-16 right-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul>
                  <li>
                    <a href="#" onClick={() => handleItemClick("/profile")} className={`block px-4 py-2 font-semibold ${
                        activeFaceMenuItem === "/profile" ? "text-[#1CC0A0]" : "text-gray-600"
                      } hover:bg-[#C4EEE6]`}>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("/settings")} className={`block px-4 py-2 font-semibold ${
                        activeFaceMenuItem === "/settings" ? "text-[#1CC0A0]" : "text-gray-700"
                      } hover:bg-[#C4EEE6]`}>
                      Settings
                    </a>
                  </li>
                  <li>
                    <a href="#" onClick={() => handleItemClick("/mycard")} className={`block px-4 py-2 font-semibold ${
                        activeFaceMenuItem === "/mycard" ? "text-[#1CC0A0]" : "text-gray-700"
                      } hover:bg-[#C4EEE6]`}>
                      Mycard
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {showBellMenu && <Updete notifications={notifications} />}
    </>
  );
};

export default Navbar;
