import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
         
import heroImg from "../../public/images/image2.webp";
import classes from "../../styles/hero.module.css";
import CustomizedButton from '../common/button/CustomizedButton'
const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Empowering engineers through certification and consultancy services" />
              {/* <h2 className="mt-3 mb-3">Empowering engineers through certification and consultancy services</h2> */}
              {/* <h5 className="mb-4">Frontend Developer</h5> */}
              <p>
              Our team of highly qualified experts provides tailored solutions that are designed to meet your unique needs and help you achieve your goals. Whether you are looking to expand your skills, advance your career, or improve your organizations performance, we have the expertise to guide you every step of the way.
              </p>
              <div className={`${classes.services__container}`}>
          
            
               <CustomizedButton title="Certificatons" path="#contact"/>
               <CustomizedButton title="Consultancy services" path="#contact"/>
        
              </div>
  
       
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />
{/* 
              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div> */}

              {/* <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">4 Years</h5>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
