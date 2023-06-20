import React from "react";
import { Row, Col } from "react-bootstrap";
import { getError } from "../util";
import { ApiError } from "../types/ApiError";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet-async";
import { useGetProductQuery } from "../hooks/ProductHooks";


function HomePage() {
  const { data: products, isLoading, error } = useGetProductQuery();
  console.log(products);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>Bhandar</title>
      </Helmet>
     
      { products?.data?.map((product) => (
        
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <ProductItem key={product.id} product={product} />
        </Col>
      )
      )}
    
    </Row>
  );
}

export default HomePage;
