import React, { useContext } from "react";
import { Products } from "../types/Products";
import { Button, Card, Toast } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { Store } from "../Store";
import { CartItem } from "../types/Cart";
import { convertProductToCartItem } from "../util";
// import { ToastContainer, toast } from 'react-toastify';
import { useToasts } from "react-toast-notifications";

function ProductItem({ product }: { product: Products }) {
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const { addToast } = useToasts();
  const addToCartHandler = (item: CartItem) => {
   
    const existItem = cartItems.find((x) => x._id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    console.log(product.name);
    if (product.countInStock < quantity) {
      alert("Sorry product is out of stock ");
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...item, quantity },
    });
    // toast.success("Product added to the cart")
    addToast("Product added to the cart", { appearance: "success" });
  };
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>

        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button
            onClick={() => addToCartHandler(convertProductToCartItem(product))}
          >
            Add to cart{" "}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductItem;
