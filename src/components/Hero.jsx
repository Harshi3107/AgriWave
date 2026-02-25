function Hero({ onStartShopping, onExploreAdvisory, onViewKits }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="pill">Trusted by 120k+ growers across India</div>
        <h1>
          Everything your farm needs,
          <span> delivered in 48 hours.</span>
        </h1>
        <p>
          Seeds, crop nutrition, tools, and smart advisory in one place. Shop
          curated kits, compare prices, and get field-ready guidance.
        </p>
        <div className="hero-actions">
          <button className="primary" onClick={onStartShopping}>
            Start shopping
          </button>
          <button className="ghost" onClick={onExploreAdvisory}>
            Explore advisory
          </button>
        </div>
        <div className="hero-metrics">
          <div>
            <strong>12,400+</strong>
            <span>Products</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>Farmer rating</span>
          </div>
          <div>
            <strong>1,250</strong>
            <span>Local brands</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <img 
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80" 
          alt="Lush green agricultural field with crops"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
          className="hero-main-image"
        />
      </div>
      <div className="hero-card">
        <img 
          src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&h=220&fit=crop&q=80" 
          alt="Beautiful farm field landscape"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
          className="hero-image"
        />
        <div className="hero-card-body">
          <h3>Crop starter packs</h3>
          <p>High-yield seed + nutrition combos for seasonal crops.</p>
          <div className="hero-card-tags">
            <span>Soil tested</span>
            <span>Price lock</span>
            <span>Expert backed</span>
          </div>
          <button className="dark" onClick={onViewKits}>
            View kits
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
