import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../CategoriesBar/CategoriesBar";
import RecomendVideo from "../Video/RecomendVideo";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => {
          return (
            <Col lg={4} md={4}>
              <RecomendVideo />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default HomeScreen;
