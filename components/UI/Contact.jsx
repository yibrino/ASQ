import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";
import Link from "next/Link";
const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
            Those with A minimum of BSc degree in Electrical engineering Civil engineering Mechanical engineering Industrial engineering Material engineering Information/electronics engineering or related fields with an experience at least 2 years in manufacturing, Quality control, production or operational engineering are required to contact professsor Yohanness Tesfay.            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>
5344 ROCKY COAST PL PALMETTO, FL 34221
</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>yohannes@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+1 941 281 6819</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
