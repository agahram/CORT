import React from "react";

import BreadCrumb from "Common/BreadCrumb";

import { Container, Row } from "react-bootstrap";

const Ecommerce = () => {
  document.title = "Dashboard | Judia - Admin & Dashboard Template";
  return (
    <React.Fragment>
      <Container fluid>
        <BreadCrumb isDetailbreadcrumb={true} isCustomizer={true} />
      </Container>
    </React.Fragment>
  );
};

export default Ecommerce;
