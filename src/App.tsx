import React, { useContext, useEffect } from 'react';
import './App.css';
import { Navbar, Container, Nav, Button, Badge, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { Store } from './Store';
import "react-toastify/dist/ReactToastify.css"
// import { ToastContainer } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
// import {LinkContainer} from "react-router-bootstrap"
import { ToastProvider } from 'react-toast-notifications';


function App() {
  const {
    state: {mode,cart, userInfo},
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode)
 },[mode])

 const switchModeHandler = () => {
  dispatch({type: "SWITCH_MODE"})
 }
 const signOutHandler = () => {
  dispatch({type: ("USER_SIGNOUT")})
  localStorage.removeItem("userInfo")
  localStorage.removeItem("cartItems")
  localStorage.removeItem("shippingAddress")
  localStorage.removeItem("paymentMethod")
  window.location.href = "/signin"
 }
  return (
    <div className='d-flex flex-column vh-100'>
      {/* <ToastContainer position='bottom-center' limit={1} /> */}
      <ToastProvider
      autoDismiss
      autoDismissTimeout={3000}
      placement="bottom-center"
      // limit={1}
    >
      {/* Your application components */}
    
      <header> 
        <Navbar  expand="lg">
          <Container >
            <Link to="/" className='heading'>Bhandar</Link>
            {/* <LinkContainer></LinkContainer> */}
          {/* <Navbar.Brand>Bhandar</Navbar.Brand> */}
          </Container>
          <Nav>
            <Button variant={mode} onClick={switchModeHandler}>
              <i className={mode === "light"? "fa fa-sun" : "fa fa-moon"}></i>
            </Button>
            
            <Link to="/cart" className='nav-link'>Cart
            {cart.cartItems.length > 0 && (
              <Badge pill bg="danger">
                {cart.cartItems.reduce((a,c) => a + c.quantity, 0)}
              </Badge>
            )}
            </Link>

            {userInfo ? (
               <NavDropdown title={userInfo.name} id='basic-nav-dropdown' >
                <Link className='dropdown-item' to="#signout" 
                onClick={signOutHandler}>Sign Out</Link>  


             </NavDropdown>
            ): (
              <Link className='nav-link' to="/signin">Sign In</Link>
            )}
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        <Outlet/>
        </Container>
      </main>
      <footer>
        <div className='text-center'>All right reserved</div>
      </footer>
      </ToastProvider>
    </div>
  );
}

export default App;
