import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../UI/SectionSubtitle";
import CompanyCard from "./CompanyCard ";

const AffiliateCompanies = () => {
  const companies = [
    {
      logo: "/company1.png",
      name: "Mekelle University",
      description:
        " We are striving to be back on track for excellence. Your continued support is highly appreciated!",
      link: "http://www.mu.edu.et/",
    },
    {
      logo: "/company2.png",
      name: "Sheba University Collage",
      description:
        "We are striving to be back on track for excellence. Your continued support is highly appreciated!",
      link: "",
    },
    {
      logo: "/company3.png",
      name: "Axum Ubiversity",
      description:
        "We are striving to be back on track for excellence. Your continued support is highly appreciated!",
      link: "https://www.facebook.com/AksumUniversityOfficial/",
    },
  ];

  return (
    <Container fluid>
      <SectionSubtitle subtitle="Affiliate Companies " />
      <Row>
        {companies.map((company, index) => (
          <Col md={4} key={index}>
            <CompanyCard {...company} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AffiliateCompanies;
