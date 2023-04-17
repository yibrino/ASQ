import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import Homepage from "../circularimage/VideoComponent ";
import classes from "../../styles/about.module.css";


const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="Yohannes Yebabe Tesfay | Professor" />
            {/* <h3 className="mt-4">I am NPI and Quality Engineering Director</h3> */}
            <h3 className="mb-4"></h3>
            <div className={`${classes.profile__image}`}>
  <img src="/image10.png" alt="Profile Image"/>
</div>
   
            <p>
  
            Yohannes Yebabe Tesfay is NPI and Quality Engineering Director at HPMA. He is the innovator of many equations, models and applied theories, including the hyper hybrid coordination. He is a Lean Six Sigma Black Belt, IATF, and ISO 9000 professional.
            </p>

            {/* <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Quality Design for New Product Introduction
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Process Capability Analysis
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Quality in the Context of Engineering
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Engineering Sampling Standards and Plans
                </h6>
              </div>
            </div> */}

            {/* <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="#">Download CV</Link>
              </button>
            </div> */}
              {/* <ReadMore/> */}
              <a
            href="https://www.researchgate.net/profile/Yohannes-Yebabe-Tesfay"
            target="_blank" className={classes.link}
          >
       https://www.researchgate.net/profile/Yohannes-Yebabe-Tesfay
          </a>
          <a
            href="https://www.flcompanyregistry.com/companies/persimmon-helois-asq-engineering-solutions-llc/
            "
            target="_blank" className={classes.link}
          >
            <br></br>
https://www.flcompanyregistry.com/companies/persimmon-helois-asq-engineering-solutions-llc/
          </a>
          <br></br>
          <a
            href="https://www.bizapedia.com/fl/persimmon-and-helois-asq-engineering-solutions-llc.html
            "
            target="_blank" className={classes.link}
          >
https://www.bizapedia.com/fl/persimmon-and-helois-asq-engineering-solutions-llc.html
          </a>
          </Col>

          <Col lg="6">
          <Homepage/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
