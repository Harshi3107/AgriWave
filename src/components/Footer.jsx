import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div>
        <h3>Agriwave</h3>
        <p>Modern agri commerce and advisory for growing communities.</p>
      </div>
      <div className="footer-links">
        <div>
          <strong>Marketplace</strong>
          <Link to="/categories">Shop</Link>
          <Link to="/deals">Bundles</Link>
          <Link to="/advisory">Advisory</Link>
        </div>
        <div>
          <strong>Support</strong>
          <Link to="/support/help">Help center</Link>
          <Link to="/support/delivery">Delivery</Link>
          <Link to="/support/returns">Returns</Link>
        </div>
        <div>
          <strong>Contact</strong>
          <span>hello@agriwave.com</span>
          <span>+91 90000 00000</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
