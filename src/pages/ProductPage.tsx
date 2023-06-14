import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useGetProductDetailsBySlugQuery } from "../hooks/ProductHooks";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../util";
import { ApiError } from "../types/ApiError";
import { Badge, Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import Rating from "../components/Rating";

function ProductPage() {
  const params = useParams();
  const { slug } = params;
  const {
    data: products,
    isLoading,
    error,
  } = useGetProductDetailsBySlugQuery(slug!);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)} </MessageBox>
  ) : !products ? (
    <MessageBox variant="danger">Product Not Found</MessageBox>
  ) : (
    <div>
      {/* <Helmet>
        <title>Product page</title>
      </Helmet> */}
      <Row>
        <Col md={6}>
          <img className="large" src={products.image} alt={products.name} />
        </Col>
        <Col md={3}>
          <ListGroup.Item>
            <Helmet>
              <title>{products.name}</title>
            </Helmet>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              rating={products.rating}
              numReviews={products.numReviews}
            ></Rating>
          </ListGroup.Item>
          <ListGroup.Item>Price : ${products.price}</ListGroup.Item>
          <ListGroup.Item>Description :<p> {products.description}</p></ListGroup.Item>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>${products.price}</Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                    {products.countInStock > 0 ?(
                      <Badge bg="success">In Stock</Badge>
                    ) : (
                      <Badge bg="danger">Unavailable</Badge>
                    )}</Col>
                  </Row>
                </ListGroup.Item>
                {products.countInStock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Add to Cart</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductPage;
