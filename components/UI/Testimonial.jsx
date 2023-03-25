import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/vission_mission.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Vision, Mission, and Goals" />
            {/* <h4 className="mt-4 mb-5">What my client says</h4> */}

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/profile.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Our</h6>
                    <h6>Vission</h6>
                  </div>
                </div>

                <p>
                is to become among the leading training centers of Six sigma ,8D model
and DFMEA/PFMEA in academic excellence , research, publications and community services
to Africa and contribute to the manufacturing and service sector in Africa.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/profile.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

<div>
                    <h6>Our</h6>
                    <h6>Mission</h6>
                  </div>
                </div>

                <p>
                is to offer online course that is accessible to the larger society
through reasonable tuition focusing on quality and standards to help African manufacturers to
work smarter, to compete and to prosper
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/profile.jpg"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />
<div>
                    <h6>Our</h6>
                    <h6>Goal</h6>
                  </div>
                </div>
                <p>
                In order to meet and exceed the quality and standard requirements of students and stakeholders,
the goals of 
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
