import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [language, setLanguage] = useState('English')
  const [showBrandsDropdown, setShowBrandsDropdown] = useState(false)
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)
  const [showShopByDropdown, setShowShopByDropdown] = useState(false)
  const [showSeedsDropdown, setShowSeedsDropdown] = useState(false)
  const [showCropProtectionDropdown, setShowCropProtectionDropdown] = useState(false)
  const [showCropNutritionDropdown, setShowCropNutritionDropdown] = useState(false)
  const [showEquipmentsDropdown, setShowEquipmentsDropdown] = useState(false)
  const [showAdvisoryDropdown, setShowAdvisoryDropdown] = useState(false)
  const [showVedikaDropdown, setShowVedikaDropdown] = useState(false)
  const [showSchemesDropdown, setShowSchemesDropdown] = useState(false)
  const navigate = useNavigate()
  const { getTotalItems } = useCart()
  const { getTotalItems: getWishlistTotal } = useWishlist()
  const cartItemCount = getTotalItems()
  const wishlistItemCount = getWishlistTotal()

  const categories = [
    { name: 'Offers', path: '/categories?type=Offers' },
    { name: 'Insecticides', path: '/categories?type=Insecticides' },
    { name: 'Nutrients', path: '/categories?type=Nutrients' },
    { name: 'Fungicides', path: '/categories?type=Fungicides' },
    { name: 'Vegetable & Fruit Seeds', path: '/categories?type=Vegetable' },
    { name: 'Herbicides', path: '/categories?type=Herbicides' },
    { name: 'Growth Promoters', path: '/categories?type=Growth' },
    { name: 'Farm Machinery', path: '/categories?type=Machinery' },
    { name: 'Organic Farming', path: '/categories?type=Organic' },
    { name: 'Animal Husbandry', path: '/categories?type=Animal' },
  ]

  const shopByOptions = [
    { name: 'Plant Growth', path: '/shop-by/growth' },
    { name: 'Root Growth', path: '/shop-by/root' },
    { name: 'Color and Size', path: '/shop-by/color-size' },
    { name: 'Flowers and Fruits', path: '/shop-by/flowers' },
    { name: 'Nutrient Deficiencies', path: '/shop-by/deficiencies' },
  ]

  const seedsOptions = [
    { name: 'Vegetable Seeds', path: '/products?category=Vegetable' },
    { name: 'Fruit Seeds', path: '/products?category=Fruit' },
    { name: 'Flower Seeds', path: '/products?category=Flower' },
    { name: 'Field Crop Seeds', path: '/products?category=Field' },
    { name: 'Hybrid Seeds', path: '/products?category=Hybrid' },
    { name: 'Organic Seeds', path: '/products?category=OrganicSeeds' },
  ]

  const cropProtectionOptions = [
    { name: 'Insecticides', path: '/products?category=Insecticides' },
    { name: 'Fungicides', path: '/products?category=Fungicides' },
    { name: 'Herbicides', path: '/products?category=Herbicides' },
    { name: 'Bio Pesticides', path: '/products?category=BioPesticides' },
    { name: 'Weedicides', path: '/products?category=Weedicides' },
  ]

  const cropNutritionOptions = [
    { name: 'Fertilizers', path: '/products?category=Fertilizers' },
    { name: 'Micronutrients', path: '/products?category=Micronutrients' },
    { name: 'Growth Promoters', path: '/products?category=Growth' },
    { name: 'Soil Conditioners', path: '/products?category=SoilConditioners' },
    { name: 'Organic Manure', path: '/products?category=OrganicManure' },
  ]

  const equipmentsOptions = [
    { name: 'Sprayers', path: '/products?category=Sprayers' },
    { name: 'Irrigation Equipment', path: '/products?category=Irrigation' },
    { name: 'Farm Tools', path: '/products?category=Farm Tools' },
    { name: 'Harvesting Equipment', path: '/products?category=Harvesting' },
    { name: 'Storage Solutions', path: '/products?category=Storage' },
  ]

  const advisoryOptions = [
    { name: 'Crop Advisory', path: '/advisory/crop' },
    { name: 'Weather Updates', path: '/advisory/weather' },
    { name: 'Pest Management', path: '/advisory/pest' },
    { name: 'Soil Health', path: '/advisory/soil' },
    { name: 'Market Prices', path: '/advisory/market' },
  ]

  const vedikaOptions = [
    { name: 'About Vedika', path: '/vedika/about' },
    { name: 'Vedika Products', path: '/vedika/products' },
    { name: 'Vedika Services', path: '/vedika/services' },
    { name: 'Success Stories', path: '/vedika/stories' },
  ]

  const schemesOptions = [
    { name: 'Government Schemes', path: '/schemes/government' },
    { name: 'Subsidy Programs', path: '/schemes/subsidy' },
    { name: 'Loan Schemes', path: '/schemes/loans' },
    { name: 'Insurance Schemes', path: '/schemes/insurance' },
    { name: 'Training Programs', path: '/schemes/training' },
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    const trimmed = searchQuery.trim()
    if (trimmed) {
      navigate(`/search?query=${encodeURIComponent(trimmed)}`)
      setSearchQuery('')
      return
    }
    navigate('/search')
  }

  const handleBrandClick = () => {
    // Close all dropdowns when navigating to home
    setShowBrandsDropdown(false)
    setShowCategoriesDropdown(false)
    setShowShopByDropdown(false)
    setShowSeedsDropdown(false)
    setShowCropProtectionDropdown(false)
    setShowCropNutritionDropdown(false)
    setShowEquipmentsDropdown(false)
    setShowAdvisoryDropdown(false)
    setShowVedikaDropdown(false)
    setShowSchemesDropdown(false)
  }

  const handleLanguageSelect = () => {
    navigate('/language')
  }

  return (
    <header className="navbar-container">
      {/* Top Navigation Bar */}
      <div className="nav-top">
        <Link className="brand" to="/" onClick={handleBrandClick}>
          <span className="brand-mark" />
          <div className="brand-text">
            <span>Agriwave</span>
            <em>Farm Market</em>
          </div>
        </Link>

        {/* Search Bar */}
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
        </form>

        {/* Right Side Actions */}
        <div className="nav-actions-top">
          {/* Language Selector */}
          <div
            className="language-selector"
            role="button"
            tabIndex={0}
            onClick={handleLanguageSelect}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleLanguageSelect()
              }
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{language}</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
          </div>

          {/* Track Order */}
          <Link to="/track-order" className="nav-icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="3" width="15" height="13" />
              <path d="M16 8V3H2v13h14V8h7v8h-7" />
              <circle cx="5.5" cy="18.5" r="2.5" />
              <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
            <span>Track Order</span>
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="nav-icon-link">
            <div style={{ position: 'relative' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              {wishlistItemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#ff4081',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {wishlistItemCount}
                </span>
              )}
            </div>
            <span>Wishlist</span>
          </Link>

          {/* Login */}
          <Link to="/sign-in" className="nav-icon-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span>Login</span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="nav-icon-link">
            <div style={{ position: 'relative' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartItemCount > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    backgroundColor: '#4caf50',
                    color: 'white',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {cartItemCount}
                </span>
              )}
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav className="nav-bottom">
        <div className="nav-menu">
          {/* Categories Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowCategoriesDropdown(true)}
            onMouseLeave={() => setShowCategoriesDropdown(false)}
            onClick={() => (showCategoriesDropdown ? setShowCategoriesDropdown(false) : setShowCategoriesDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowCategoriesDropdown(!showCategoriesDropdown)
              }
            }}
          >
            <span>CATEGORIES</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showCategoriesDropdown && (
              <div className="mega-menu categories-menu">
                <div className="mega-menu-grid">
                  {categories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="mega-menu-item"
                      onClick={() => setShowCategoriesDropdown(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Shop By Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowShopByDropdown(true)}
            onMouseLeave={() => setShowShopByDropdown(false)}
            onClick={() => (showShopByDropdown ? setShowShopByDropdown(false) : setShowShopByDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowShopByDropdown(!showShopByDropdown)
              }
            }}
          >
            <span>SHOP BY</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showShopByDropdown && (
              <div className="mega-menu shop-by-menu">
                <div className="mega-menu-grid">
                  {shopByOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowShopByDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Seeds Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowSeedsDropdown(true)}
            onMouseLeave={() => setShowSeedsDropdown(false)}
            onClick={() => (showSeedsDropdown ? setShowSeedsDropdown(false) : setShowSeedsDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowSeedsDropdown(!showSeedsDropdown)
              }
            }}
          >
            <span>SEEDS</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showSeedsDropdown && (
              <div className="mega-menu seeds-menu">
                <div className="mega-menu-grid">
                  {seedsOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowSeedsDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Crop Protection Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowCropProtectionDropdown(true)}
            onMouseLeave={() => setShowCropProtectionDropdown(false)}
            onClick={() => (showCropProtectionDropdown ? setShowCropProtectionDropdown(false) : setShowCropProtectionDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowCropProtectionDropdown(!showCropProtectionDropdown)
              }
            }}
          >
            <span>CROP PROTECTION</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showCropProtectionDropdown && (
              <div className="mega-menu crop-protection-menu">
                <div className="mega-menu-grid">
                  {cropProtectionOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowCropProtectionDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Crop Nutrition Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowCropNutritionDropdown(true)}
            onMouseLeave={() => setShowCropNutritionDropdown(false)}
            onClick={() => (showCropNutritionDropdown ? setShowCropNutritionDropdown(false) : setShowCropNutritionDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowCropNutritionDropdown(!showCropNutritionDropdown)
              }
            }}
          >
            <span>CROP NUTRITION</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showCropNutritionDropdown && (
              <div className="mega-menu crop-nutrition-menu">
                <div className="mega-menu-grid">
                  {cropNutritionOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowCropNutritionDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Equipments Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowEquipmentsDropdown(true)}
            onMouseLeave={() => setShowEquipmentsDropdown(false)}
            onClick={() => (showEquipmentsDropdown ? setShowEquipmentsDropdown(false) : setShowEquipmentsDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowEquipmentsDropdown(!showEquipmentsDropdown)
              }
            }}
          >
            <span>EQUIPMENTS</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showEquipmentsDropdown && (
              <div className="mega-menu equipments-menu">
                <div className="mega-menu-grid">
                  {equipmentsOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowEquipmentsDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Brands Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowBrandsDropdown(true)}
            onMouseLeave={() => setShowBrandsDropdown(false)}
            onClick={() => navigate('/brands')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate('/brands')
              }
            }}
          >
            <span>BRANDS</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
          </div>
          
          {/* Advisory Dropdown */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowAdvisoryDropdown(true)}
            onMouseLeave={() => setShowAdvisoryDropdown(false)}
            onClick={() => (showAdvisoryDropdown ? setShowAdvisoryDropdown(false) : setShowAdvisoryDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowAdvisoryDropdown(!showAdvisoryDropdown)
              }
            }}
          >
            <span>ADVISORY</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showAdvisoryDropdown && (
              <div className="mega-menu advisory-menu">
                <div className="mega-menu-grid">
                  {advisoryOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowAdvisoryDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Vedika - Community Forum */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onClick={() => navigate('/vedika')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate('/vedika')
              }
            }}
          >
            <span>VEDIKA</span>
          </div>

          {/* Schemes Dropdown - New Addition */}
          <div
            className="nav-menu-item dropdown"
            role="button"
            tabIndex={0}
            onMouseEnter={() => setShowSchemesDropdown(true)}
            onMouseLeave={() => setShowSchemesDropdown(false)}
            onClick={() => (showSchemesDropdown ? setShowSchemesDropdown(false) : setShowSchemesDropdown(true))}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setShowSchemesDropdown(!showSchemesDropdown)
              }
            }}
          >
            <span>SCHEMES</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 8L2 4h8L6 8z" />
            </svg>
            {showSchemesDropdown && (
              <div className="mega-menu schemes-menu">
                <div className="mega-menu-grid">
                  {schemesOptions.map((option) => (
                    <Link
                      key={option.name}
                      to={option.path}
                      className="mega-menu-item"
                      onClick={() => setShowSchemesDropdown(false)}
                    >
                      {option.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
