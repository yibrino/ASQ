import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/Link";

const menuItems = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "#about",
    label: "About",
  },
  // {
  //   link: "#services",
  //   label: "Services",
  // },
  {
    link: "#portfolio",
    label: "News",
  },
  {
    label: 'Certificates',
    submenu: [
      { label: 'Basic Certificates', link: "/servicesweb-dev", },
      { label: 'Intermidate Certificates', link: "/servicesgraphic-design", },
      { label: 'Advanced  Certificates', link: "/servicesseo", },
    ],
  },
  {
    link: "#contact",
    label: "Contact",
  },


];

const Header = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add(`${classes.header__shrink}`);
    } else {
      headerRef.current.classList.remove(`${classes.header__shrink}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const toggleMenu = () =>
    menuRef.current.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>Persimmon & Helios</span> ASQ Engineering Solutions
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
           
       
      {menuItems.map((item, index) => (
        <li key={index} className={`${classes.menuItem} ${item.submenu && classes.hasSubmenu}`}>
          {item.link ? (
            <Link href={item.link}>
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
          {item.submenu && (
            <ul className={classes.submenu}>
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className={classes.submenuItem}>
                  <Link href={subItem.link}>
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {/* {item.submenu && <span className={`${classes.arrow} ${classes.arrowOpen}`} />}
          {!item.submenu && <span className={classes.arrow} />} */}
        </li>
      ))}


              <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  {" "}
                  <i className="ri-phone-line"></i> +1 941 281 6819{" "}
                </p>
              </div>
            </div>
          </div>
 

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  );
};



export default Header;
