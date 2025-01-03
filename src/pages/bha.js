import React, { useState } from "react";
import "./bharath.css";

const categories = {
  "Pindi Padarthalu": [
    { id: 1, name: "జీలకర (Cumin Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/PqYquks.jpg" },
    { id: 2, name: "ఆవాలు (Mustard Seeds)", price: 100, mrp: 150, image: "https://i.imgur.com/UjW6Fwb.jpg" },
    { id: 44, name: "పసుపు,కుంకుమ (Turmeric,Kumkum)", price: 70, mrp: 100, image: "https://i.imgur.com/7oLuOTV.jpg" },
    { id: 45, name: "హారతి కర్పూరం (swastik karpur)", price: 100, mrp: 120, image: "https://i.imgur.com/9ELNVsm.jpg" },
    { id: 46, name: "వత్తులు (vattulu)", price: 100, mrp: 150, image: "https://i.imgur.com/qeMgNx2.jpg" },
    { id: 47, name: "అగర్బత్తి (agarbatti)", price: 40, mrp: 60, image: "https://i.imgur.com/yGBUqCr.jpg" },
    { id: 48, name: "ఓమ (oma)", price: 100, mrp: 150, image: "https://i.imgur.com/9SVU3qg.jpg" },
      
  ],
  "₹50 rs Items": [
    { id: 49, name: "పీతాంబరి (Pitambari Powder)", price: 45, mrp: 50, image: "https://i.imgur.com/PNJvfDC.jpg" },
  ],
  // Add other categories as neededhttps://imgur.com/gallery/bha-iK7jztp
};

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = item.price || item.pricePerKg || item.pricePerLitre;
      return total + price * item.quantity;
    }, 0);
  };
  const shareOnWhatsApp = () => {
    const shopOwnerNumber = "917036783962"; // Replace with actual number
    const message = cart
      .map((item) => `${item.name} - ${item.quantity} ${item.unit || "items"}`)
      .join(", ");
    const totalPrice = getTotalPrice();
    const whatsappLink = `https://wa.me/${shopOwnerNumber}?text=Order Details: ${message}. Total: ₹${totalPrice}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      {/* Fixed Header Section */}
      <div> 
      <div className="shop-header">
      {/* Left Section: Logo  Details */}
      <div className="header-left">
        <img
          src="https://i.imgur.com/SQ9wIqh.jpg" // Replace with the actual logo URL
          alt="Shop Logo"
          className="shop-logo"
        />
        <div className="shop-details">
          <h1>Lakshana Spices</h1>
          <h3>Owner: Ramesh Kumar</h3>
          <p>Phone: 7036783962</p>
          <div className="contact-icons">
            <a
              href="bhargavb272@gmail.com"
              className="icon email-icon"
            >
              📧
            </a>
            <a
              href="https://maps.app.goo.gl/rsNNSpmMLQ2j8aAQ8"
              target="_blank"
              rel="noopener noreferrer"
              className="icon map-icon"
            >
              📍
            </a>
            <a
              href="https://wa.me/917036783962"
              target="_blank"
              rel="noopener noreferrer"
              className="icon whatsapp-icon"
            >
              💬
            </a>
            <a href="tel:7036783962" className="icon call-icon">
              📞
            </a>
          </div>
        </div>
      </div>

      {/* Right Section: Free Door Delivery and Extra Info */}
      <div className="header-right">
        <h5>మీ షాపషాప్‌గా మార్చాలా? <br />call : 7036783962
        </h5>
        <div className="free-delivery-banner">
          🎉 Free Door Delivery 🎉
        </div><br />
        <button className="cart-button" onClick={() => document.getElementById("ca").scrollIntoView()}>
            CART <span className="cart-count">{getTotalItems()}</span>
          </button>
      </div>
    </div>
      </div>
      {/* Ads Section */}
      <div className="ads-section">
        <marquee behavior="scroll" direction="left">
        మీ వ్యాపారాన్ని కూడా నచ్చిన విధంగా ఆన్‌లైన్ చేయండి. మరింత ఆదాయాన్ని పొందండి. మరిన్ని వివరాలకు 7036783962 నంబర్‌ను సంప్రదించండి.
        </marquee>
      </div>
      {/* Product Categories */}
      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h2>{category}</h2>
          <div className="product-list">
            {categories[category].map((item) => (
              <div key={item.id} className="product-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price} <s>₹{item.mrp}</s></p>
                <button onClick={() => addToCart(item, 1)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Cart Section */}
      <div className="cart">
        <h3 id="ca">Cart</h3>
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <button onClick={() => removeFromCart(item)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item, 1)}>+</button>
          </div>
        ))}
        <h4>Total: ₹{getTotalPrice()}</h4>
        <button onClick={shareOnWhatsApp}>Share on WhatsApp</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>Address: Vill: Panchagudi, Mo: lokeshwaram, nirmal.</p>
        <p>Pincode: 504104</p>
        <p>&copy; 2024 E-Shop. All rights reserved.</p>
  
      </footer>
    </div>
    
  );
};

export default Home;