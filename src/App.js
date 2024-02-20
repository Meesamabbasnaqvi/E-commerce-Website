import { useState } from "react";
import Modal from "./component/Modal";
import "./App.css"

function App() {
  const [cart, setCart] = useState(true);
  const [addCart, setaddCart] = useState(false);
  const [modal, setModal] = useState(true);
  const [count, setCount] = useState(0);
  const [imageSrc, setimageSrc] = useState("images/image-product-1.jpg");
  const val = document.getElementById("val");
  const thumbImg = document.querySelectorAll(".thumbnail-img");
  const [navbar, setNavbar] = useState(false)


  // for loopp[ for lmodal imamgew]

  const viewCart = () => {
    setCart(!cart)
    console.log("ejfkhaewjkfhwfj")
  }
  const increase = () => {
    setCount(count + 1)
    console.log("ejfkhaewjkfhwfj")
  }
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  const addToCart = () => {
    if (count > 0) {
      setaddCart(true)
      val.innerText = count * 125 + ".00";
    }
  }
  const checkOut = () => {
    setaddCart(false)
  }
  thumbImg.forEach(thumbImg => thumbImg.addEventListener("click", (e) => {
    let x = e.target.src
    setimageSrc(x)
    console.log(setimageSrc.src)
  }));



  const addModal = () => {
    setModal(true)
  }

  const openNav = () => {
    setNavbar(true)
  }
  const closeNav = () => {
    setNavbar(false)
  }

  return (
    <div>
      <header className="d-flex">
        <div className="d-flex mobile">
          <img onClick={openNav} className={navbar ? "d-none" : "d-flex"} src="https://github.com/Meesamabbasnaqvi/E-commerce-Website/blob/main/public/images/icon-menu.svg" alt="" />
          <h1 onClick={closeNav} className={navbar ? "close" : "d-none "}>X</h1>
        </div>
        <div className="d-flex desktop">
          <h1>Sneaker</h1>
          <div className={navbar ? "navbar" : ""}>
            <ul className={navbar ? "d-flex sidebar" : "d-none"}>
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <img onClick={viewCart} className="header-img" src="images/icon-cart.svg" alt="" />
          <img className="avtar header-img" src="images/image-avatar.png" alt="" />
          <div className={cart ? "d-none" : "cart-box"}>
            <h4>
              Cart
            </h4>
            <hr />
            <div className="cart-detail">
              <div className={addCart ? "d-none" : ""}>
                <p>Your Cart is Empty</p>
              </div>
              <div className={addCart ? " cart-img-detail" : "d-none"}>
                <div className="d-flex">
                  <img className="image-cart" src="images/image-product-1.jpg" alt="" />
                  <div>
                    <h4>
                      Full Limited Edition Sneakers
                    </h4>
                    <p >$125.00  x  {count} <span id="val"></span> </p>
                  </div>
                  <img onClick={checkOut} className="delete-btn" src="images/icon-delete.svg" alt="" />
                </div>
                <button onClick={checkOut} className="checkout">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div>
          <div>
            <img onClick={addModal} className="product-img" src={imageSrc} alt="" />
          </div>
          <div className="d-flex all-thumb-img">
            <div className="img-thumbnail-border">
              <img className="thumbnail-img" src="images/image-product-1.jpg" alt="" />
            </div>
            <div className="img-thumbnail-border">
              <img className="thumbnail-img" src="images/image-product-2.jpg" alt="" />
            </div>
            <div className="img-thumbnail-border">
              <img className="thumbnail-img" src="images/image-product-3.jpg" alt="" />
            </div>
            <div className="img-thumbnail-border">
              <img className="thumbnail-img" src="images/image-product-4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="about-company">
          <span> Sneakers Company</span>
          <h1> Full Limited Edition Sneakers </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam amet praesentium, consequuntur iure molestiae dolore .</p>
          <div className="price">
            <h1>$125.0</h1> <span>50%</span>
          </div>
          <div className="buttons">
            <div className="counter">
              <span onClick={decrease}>-</span>
              <div>{count}</div>
              <span onClick={increase}>+</span>
            </div>
            <button onClick={addToCart}>Add toCart</button>
          </div>
        </div>
        <Modal modal={modal} setModal={setModal} />
      </main>
    </div>
  );
}

export default App;
