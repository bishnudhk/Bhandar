import React from 'react'
import { sampleProducts } from '../data';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Row>
          {sampleProducts.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3}>
                <Link></Link>
              <img src={product.image} alt={product.name} className='productImage' />
              <img src={product.image} alt="" />
              <h2>{product.name}</h2>
              <p>${product.price}</p>
            </Col>
          ))}
        </Row>
  )
}

export default HomePage