const deals = [
  {
    name: 'Summer paddy bundle',
    deal: 'Save 18%',
    detail: 'NPK + bio enhancer pack',
    image: 'https://static.vecteezy.com/system/resources/previews/054/053/508/non_2x/close-up-of-a-farmer-holding-freshly-harvested-rice-stalks-in-golden-sunlight-amidst-a-lush-green-paddy-field-photo.jpg'
  },
  {
    name: 'Vegetable micro kit',
    deal: 'Save 12%',
    detail: 'Zinc, boron, calcium trio',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&h=250&q=80'
  },
  {
    name: 'Cotton defense combo',
    deal: 'Save 15%',
    detail: 'Pest shield + spray kit',
    image: 'https://th.bing.com/th/id/OIP.N4FhYX8O0AzNrJNfXZUGOQHaEM?w=260&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3'
  },
]

function Deals({ onAddBundle, onViewDetails, onShopClearance, onStockStatus, onWishlistToggle, isInWishlist }) {
  return (
    <section id="deals" className="section highlight">
      <div className="section-head">
        <h2>Today’s hot deals</h2>
        <p>Limited-time bundles and price drops for fast-moving inputs.</p>
      </div>
      <div className="grid deals">
        {deals.map((deal) => (
          <article key={deal.name} className="deal-card">
            <div className="deal-image">
              <img 
                src={deal.image} 
                alt={deal.name}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <div className="deal-top">
              <span>{deal.deal}</span>
              <button className="tag" onClick={onStockStatus}>
                In stock
              </button>
              <button
                onClick={() => onWishlistToggle && onWishlistToggle(deal.name)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  marginLeft: 'auto',
                }}
                title={isInWishlist && isInWishlist(deal.name) ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                {isInWishlist && isInWishlist(deal.name) ? '❤️' : '🖤'}
              </button>
            </div>
            <h3>{deal.name}</h3>
            <p>{deal.detail}</p>
            <div className="deal-cta">
              <button className="primary" onClick={() => onAddBundle(deal.name)}>
                Add bundle
              </button>
              <button className="ghost" onClick={() => onViewDetails(deal.name)}>
                Details
              </button>
            </div>
          </article>
        ))}
        <article className="deal-card wide">
          <h3>Warehouse clearance</h3>
          <p>Tools, sprayers, and spare parts up to 40% off.</p>
          <button className="dark" onClick={onShopClearance}>
            Shop clearance
          </button>
        </article>
      </div>
    </section>
  )
}

export default Deals
