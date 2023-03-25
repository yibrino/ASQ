import React from "react";

import { Container, Row, Col } from "reactstrap";
import classes from "./footer.module.css";
import Link from "next/link";
const NAV__LINK = [
  {
    path: "/",
    display: "HOME",
  },
  {
    path: "#about",
    display: "ABOUT",
  },
  {
    path: "#services",
    display: "SERVICES",
  },
  {
    path: "#certificates",
    display: "CERTIFICATES",
  },{
    path: "#ADVANCED CERTIFICATES",
    display: "ADVANCED CERTIFICATES",
  },
  {
    path: "#new and events",
    display: "NEWs AND EVENTS",
  },
  {
    path: "#contact",
    display: "CONTACT US",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="12" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>

         

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - certification and

consultancy center in Ethiopia. All right
                reserved.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
