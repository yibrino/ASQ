import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Basic Certificates" />

                <ServicesItem title="Intermidate Certificate"  />
                <ServicesItem
                title="Advanced Certificates"
                
              />
              </div>

          
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What We Offer" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            The quality of products and services is determined by customer satisfaction and results from the efficiency and effectiveness of processes that create and support it. The increasing of quality is achieved by improving the processes, which is seen as a continuous activity with the aim to ensure greater effectiveness and efficiency of processes. The effort itself, to improve the quality, should be directed to a constant search for improvement opportunities and to the implementation of effective preventive measures that eliminate or reduce the causes of the problems. At the same time they should lead to improving the processes in business and they are crucial for increasing the quality of processes [1]. Quality is now a key business phenomenon, a bearer of prosperity and commercial success on the market. The economic prosperity of a company aiming to satisfy customer demands is possible only by the sale of quality products and services on the commercially demanding markets. In the process of quality assurance, right decisions based on correct analysis of the situation with the proper application of methods and tools of the operational management and quality improvement play an important role.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
