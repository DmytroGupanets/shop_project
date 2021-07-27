import React from "react";
import Container from "../container/Container";

const Section = ({ children, title }) => {
  return (
    <Container>
      <h2 className="sectionTitle" style={{ marginTop: 30, marginBottom: 30 }}>
        {title.toUpperCase()}
      </h2>
      {children}
    </Container>
  );
};

export default Section;
