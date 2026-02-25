import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function ShopByPage() {
  const navigate = useNavigate()
  const { category } = useParams()
  const { addItem } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const shopByData = {
    growth: {
      title: "Plant Growth Solutions",
      description: "Boost overall plant health, stem strength, and foliage development",
      products: [
        {
          name: "Gibberellic Acid 0.001% L",
          price: 420,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
          description: "Promotes stem elongation and leaf expansion"
        },
        {
          name: "Seaweed Extract Liquid",
          price: 580,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Natural growth stimulant with amino acids"
        },
        {
          name: "Humic Acid Granules",
          price: 680,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Improves nutrient uptake and plant vigor"
        },
        {
          name: "Plant Growth Promoter (NAA)",
          price: 520,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
          description: "Enhances cell division and vegetative growth"
        },
        {
          name: "Multi Vitamin Plant Booster",
          price: 450,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Complete vitamin blend for healthy growth"
        },
        {
          name: "Amino Acid Foliar Spray",
          price: 620,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "22 amino acids for rapid plant development"
        },
        {
          name: "Triacontanol 0.05% EC",
          price: 720,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
          description: "Increases photosynthesis and biomass"
        },
        {
          name: "Brassinolide 0.01% SP",
          price: 850,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Plant hormone for stress tolerance and growth"
        }
      ]
    },
    root: {
      title: "Root Growth Enhancers",
      description: "Strengthen root systems for better nutrient absorption and plant stability",
      products: [
        {
          name: "Indole Butyric Acid (IBA)",
          price: 680,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=400&q=80",
          description: "Promotes adventitious root formation"
        },
        {
          name: "Mycorrhizal Fungi Bio-fertilizer",
          price: 520,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Enhances root area and nutrient uptake"
        },
        {
          name: "Phosphate Solubilizing Bacteria",
          price: 380,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Improves phosphorus availability to roots"
        },
        {
          name: "Root Pro Growth Hormone",
          price: 620,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=400&q=80",
          description: "Specialized root development formula"
        },
        {
          name: "Azospirillum Bio-fertilizer",
          price: 320,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Nitrogen-fixing bacteria for root growth"
        },
        {
          name: "Phosphorus 52% WSF",
          price: 780,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "High phosphorus for root establishment"
        },
        {
          name: "Root Gel Transplanting Aid",
          price: 420,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1492496913980-501348b61469?auto=format&fit=crop&w=400&q=80",
          description: "Reduces transplant shock and promotes rooting"
        },
        {
          name: "Humic + Fulvic Acid Complex",
          price: 720,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Stimulates lateral root development"
        }
      ]
    },
    'color-size': {
      title: "Color & Size Enhancement",
      description: "Improve fruit color, size, and overall produce quality",
      products: [
        {
          name: "Potassium Nitrate 13:0:45",
          price: 820,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Enhances fruit size and color development"
        },
        {
          name: "Calcium Boron Complex",
          price: 580,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
          description: "Improves fruit firmness and shelf life"
        },
        {
          name: "Ethephon 39% SL",
          price: 680,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Promotes uniform fruit ripening and color"
        },
        {
          name: "Chelated Micronutrient Mix",
          price: 720,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Complete micronutrients for quality produce"
        },
        {
          name: "Sulphate of Potash 0:0:50",
          price: 920,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Premium quality for fruit coloring"
        },
        {
          name: "Calcium Chloride 77%",
          price: 480,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
          description: "Prevents fruit cracking and improves size"
        },
        {
          name: "Magnesium Sulphate (Epsom Salt)",
          price: 380,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Enhances chlorophyll and fruit quality"
        },
        {
          name: "Fruit Size Booster PGR",
          price: 850,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Increases fruit weight and uniformity"
        }
      ]
    },
    flowers: {
      title: "Flowering & Fruiting Solutions",
      description: "Maximize flower formation, fruit set, and yield potential",
      products: [
        {
          name: "00:52:34 NPK (Fruit Special)",
          price: 920,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "High phosphorus for flower and fruit induction"
        },
        {
          name: "Planofix (NAA 4.5% w/w)",
          price: 620,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
          description: "Prevents flower and fruit drop"
        },
        {
          name: "Boron 20% Granular",
          price: 420,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Essential for pollen formation and fruit set"
        },
        {
          name: "Paclobutrazol 23% SC",
          price: 780,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
          description: "Controls vegetative growth, promotes flowering"
        },
        {
          name: "Fruit Set Hormone Spray",
          price: 720,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Improves fruit setting percentage"
        },
        {
          name: "Zinc Sulphate 33%",
          price: 380,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Critical for flowering and fruiting"
        },
        {
          name: "Mono Potassium Phosphate (MKP)",
          price: 1080,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Water-soluble PK for fruit development"
        },
        {
          name: "Bloom Booster Complete",
          price: 950,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
          description: "All-in-one flowering and fruiting solution"
        }
      ]
    },
    deficiencies: {
      title: "Nutrient Deficiency Solutions",
      description: "Correct specific nutrient deficiencies for optimal plant health",
      products: [
        {
          name: "Ferrous Sulphate Heptahydrate",
          price: 320,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Corrects iron deficiency and chlorosis"
        },
        {
          name: "Chelated Iron EDTA 12%",
          price: 580,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Fast-acting iron for yellowing leaves"
        },
        {
          name: "Manganese Sulphate 30.5%",
          price: 420,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Treats manganese deficiency symptoms"
        },
        {
          name: "Zinc EDTA 12% Chelated",
          price: 680,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Rapid correction of zinc deficiency"
        },
        {
          name: "Multi Micronutrient Mixture",
          price: 520,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Complete micronutrient package (Zn, Fe, Mn, Cu, B, Mo)"
        },
        {
          name: "Calcium Nitrate 15.5:0:0+19Ca",
          price: 780,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Corrects calcium deficiency in fruits"
        },
        {
          name: "Copper Sulphate Pentahydrate",
          price: 380,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Treats copper deficiency in crops"
        },
        {
          name: "Molybdenum Trioxide",
          price: 920,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Essential for legume nitrogen fixation"
        },
        {
          name: "Sulphur 80% WDG",
          price: 420,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
          description: "Corrects sulphur deficiency and improves protein"
        },
        {
          name: "Borax 10.5% Boron",
          price: 360,
          stock: "In stock",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
          description: "Prevents hollow stem and poor fruit set"
        }
      ]
    }
  }

  const currentData = shopByData[category] || shopByData.growth

  const handleAddToCart = (product) => {
    addItem({
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    navigate('/cart')
  }

  const handleWishlistToggle = (product) => {
    if (isInWishlist(product.name)) {
      removeFromWishlist(product.name)
    } else {
      addToWishlist({
        name: product.name,
        price: product.price,
      })
    }
  }

  return (
    <div className="page">
      <Navbar />
      <div className="page-shell">
        <header className="page-header">
          <Link className="back-link" to="/">
            Back to home
          </Link>
          <h1>{currentData.title}</h1>
          <p>{currentData.description}</p>
          <div className="page-stats">
            <span>{currentData.products.length} products</span>
            <span>Expert recommended</span>
            <span>Fast delivery</span>
          </div>
        </header>

        <div className="page-grid">
          {currentData.products.map((product) => (
            <article key={product.name} className="page-card">
              <img 
                className="page-card-image" 
                src={product.image} 
                alt={product.name}
              />
              <div className="page-card-body">
                <h3>{product.name}</h3>
                {product.description && <p>{product.description}</p>}
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginTop: '12px'
                }}>
                  <strong style={{ fontSize: '18px', color: '#2d3e1f' }}>
                    ₹{product.price}
                  </strong>
                  <span style={{ 
                    color: '#4caf50',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    {product.stock}
                  </span>
                </div>
              </div>
              <div className="page-card-actions">
                <button
                  className="ghost"
                  onClick={() => handleWishlistToggle(product)}
                  style={{
                    background: isInWishlist(product.name) ? '#fff3e0' : 'transparent',
                    color: isInWishlist(product.name) ? '#f27f29' : 'inherit'
                  }}
                >
                  {isInWishlist(product.name) ? '♥ In Wishlist' : '♡ Wishlist'}
                </button>
                <button
                  className="primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ShopByPage
