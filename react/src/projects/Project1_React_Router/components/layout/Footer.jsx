

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <h2 className="logo">Rutvik EcomStore</h2>
          <p>
            Welcome to Rutvik EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>

          <div className="payment-icons">
            <img src="https://img.icons8.com/color/48/visa.png" alt="visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="master" />
            <img src="https://img.icons8.com/color/48/paypal.png" alt="paypal" />
            <img src="https://img.icons8.com/color/48/apple-pay.png" alt="apple" />
          </div>
        </div>

        {/* SHOPPING */}
        <div className="footer-col">
          <h3>SHOPPING</h3>
          <ul>
            <li>Computer Store</li>
            <li>Laptop Store</li>
            <li>Accessories</li>
            <li>Sales & Discount</li>
          </ul>
        </div>

        {/* EXPERIENCE */}
        <div className="footer-col">
          <h3>Experience</h3>
          <ul>
            <li>Contact Us</li>
            <li>Payment Method</li>
            <li>Delivery</li>
            <li>Return and Exchange</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3>NEWSLETTER</h3>
          <p>Be the first to know about new arrivals, sales & promos!</p>
          <input type="email" placeholder="Your Email" />
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>Design and Code by Dolar Rutvik</p>
      </div>
    </footer>
  );
};
