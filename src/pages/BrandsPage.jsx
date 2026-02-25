import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'

function BrandsPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const categoryFilter = searchParams.get('category')
  const [selectedCategory, setSelectedCategory] = useState(categoryFilter || 'All')

  const brandCategories = [
    'All',
    'Seeds',
    'Crop Protection',
    'Fertilizers',
    'Farm Equipment',
    'Irrigation Systems',
    'Agrochemicals',
    'Spraying Equipment'
  ]

  const brands = [
    // Seeds Brands
    {
      name: "Kaveri Seeds",
      category: "Seeds",
      description: "Hybrid seeds for cotton, corn, and vegetables",
      image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&w=400&q=80",
      products: "40+ varieties"
    },
    {
      name: "Nuziveedu Seeds",
      category: "Seeds",
      description: "Quality seeds for major crops across India",
      image: "https://images.unsplash.com/photo-1614957004077-0c97e34134cd?auto=format&fit=crop&w=400&q=80",
      products: "35+ varieties"
    },
    {
      name: "Bayer CropScience Seeds",
      category: "Seeds",
      description: "Innovation in hybrid seeds and crop traits",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=400&q=80",
      products: "180+ varieties"
    },
    {
      name: "Syngenta Seeds",
      category: "Seeds",
      description: "High-performance vegetable and field crop seeds",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80",
      products: "220+ varieties"
    },
    {
      name: "Mahyco Seeds",
      category: "Seeds",
      description: "Pioneer in hybrid seed technology in India",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=400&q=80",
      products: "50+ varieties"
    },
    {
      name: "UPL Seeds",
      category: "Seeds",
      description: "Quality seeds with certified germination rates",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
      products: "45+ varieties"
    },

    // Crop Protection Brands
    {
      name: "Tata Rallis",
      category: "Crop Protection",
      description: "Leading manufacturer of crop protection chemicals",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400&q=80",
      products: "150+ products"
    },
    {
      name: "UPL Limited",
      category: "Crop Protection",
      description: "Global provider of sustainable crop protection",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=400&q=80",
      products: "200+ products"
    },
    {
      name: "Bayer Crop Protection",
      category: "Crop Protection",
      description: "Advanced crop protection and pest management",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=400&q=80",
      products: "120+ products"
    },
    {
      name: "Dhanuka Agritech",
      category: "Crop Protection",
      description: "Specialized formulations for crop protection",
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=400&q=80",
      products: "120+ products"
    },
    {
      name: "Nagarjuna Agrichem",
      category: "Crop Protection",
      description: "Manufacturer of insecticides and fungicides",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=400&q=80",
      products: "80+ products"
    },
    {
      name: "Krishi Rasayan",
      category: "Crop Protection",
      description: "Affordable agrochemicals for Indian farmers",
      image: "https://images.unsplash.com/photo-1591622261695-f7a3d6c17f7c?auto=format&fit=crop&w=400&q=80",
      products: "90+ products"
    },

    // Agrochemicals Brands
    {
      name: "Syngenta Agrochemicals",
      category: "Agrochemicals",
      description: "Science-based agrochemical solutions",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=400&q=80",
      products: "180+ products"
    },
    {
      name: "Coromandel International",
      category: "Agrochemicals",
      description: "Integrated crop nutrition and protection",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80",
      products: "200+ products"
    },
    {
      name: "Crystal Crop Protection",
      category: "Agrochemicals",
      description: "Wide range of pesticides and fungicides",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400&q=80",
      products: "110+ products"
    },
    {
      name: "PI Industries",
      category: "Agrochemicals",
      description: "Research-driven agrochemical manufacturer",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
      products: "85+ products"
    },

    // Fertilizers Brands
    {
      name: "IFFCO",
      category: "Fertilizers",
      description: "India's largest fertilizer cooperative",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=400&q=80",
      products: "50+ fertilizers"
    },
    {
      name: "Coromandel Fertilizers",
      category: "Fertilizers",
      description: "Premium quality fertilizers and nutrients",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=400&q=80",
      products: "60+ fertilizers"
    },
    {
      name: "Zuari Agro Chemicals",
      category: "Fertilizers",
      description: "Comprehensive fertilizer solutions",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400&q=80",
      products: "40+ fertilizers"
    },
    {
      name: "EID Parry",
      category: "Fertilizers",
      description: "Bio-fertilizers and organic solutions",
      image: "https://images.unsplash.com/photo-1595855759920-86582396756d?auto=format&fit=crop&w=400&q=80",
      products: "60+ products"
    },
    {
      name: "Tata Chemicals",
      category: "Fertilizers",
      description: "Innovative fertilizer formulations",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=400&q=80",
      products: "35+ fertilizers"
    },

    // Farm Equipment / Tractors
    {
      name: "Mahindra Tractors",
      category: "Farm Equipment",
      description: "India's leading tractor manufacturer",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
      products: "45+ models"
    },
    {
      name: "TAFE Tractors",
      category: "Farm Equipment",
      description: "Massey Ferguson and TAFE branded tractors",
      image: "https://images.unsplash.com/photo-1589906241683-f0c2c8e5a3f6?auto=format&fit=crop&w=400&q=80",
      products: "40+ models"
    },
    {
      name: "John Deere India",
      category: "Farm Equipment",
      description: "Premium tractors and farm machinery",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
      products: "25+ models"
    },
    {
      name: "VST Tillers Tractors",
      category: "Farm Equipment",
      description: "Power tillers and compact tractors",
      image: "https://images.unsplash.com/photo-1589906241683-f0c2c8e5a3f6?auto=format&fit=crop&w=400&q=80",
      products: "25+ models"
    },
    {
      name: "Sonalika Tractors",
      category: "Farm Equipment",
      description: "Affordable and reliable farm tractors",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=400&q=80",
      products: "30+ models"
    },
    {
      name: "Escorts Tractors",
      category: "Farm Equipment",
      description: "Farmtrac and Powertrac branded equipment",
      image: "https://images.unsplash.com/photo-1589906241683-f0c2c8e5a3f6?auto=format&fit=crop&w=400&q=80",
      products: "35+ models"
    },

    // Irrigation Systems
    {
      name: "Jain Irrigation",
      category: "Irrigation Systems",
      description: "Micro irrigation and plastic products",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
      products: "150+ products"
    },
    {
      name: "Netafim Irrigation",
      category: "Irrigation Systems",
      description: "Drip and precision irrigation solutions",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
      products: "100+ products"
    },
    {
      name: "Finolex Pipes",
      category: "Irrigation Systems",
      description: "PVC pipes and irrigation fittings",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
      products: "80+ products"
    },
    {
      name: "Supreme Industries",
      category: "Irrigation Systems",
      description: "Comprehensive piping and irrigation range",
      image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=400&q=80",
      products: "120+ products"
    },

    // Spraying Equipment
    {
      name: "Neptune Sprayers",
      category: "Spraying Equipment",
      description: "Manual and power sprayers for pest control",
      image: "https://images.unsplash.com/photo-1598515213902-24f5f59f0013?auto=format&fit=crop&w=400&q=80",
      products: "30+ sprayers"
    },
    {
      name: "Aspee Sprayers",
      category: "Spraying Equipment",
      description: "Innovation in agricultural spraying technology",
      image: "https://images.unsplash.com/photo-1598515213902-24f5f59f0013?auto=format&fit=crop&w=400&q=80",
      products: "40+ sprayers"
    },
    {
      name: "KisanKraft Sprayers",
      category: "Spraying Equipment",
      description: "Battery and petrol-operated sprayers",
      image: "https://images.unsplash.com/photo-1598515213902-24f5f59f0013?auto=format&fit=crop&w=400&q=80",
      products: "25+ sprayers"
    },
    {
      name: "Shakti Sprayers",
      category: "Spraying Equipment",
      description: "Durable manual and power sprayers",
      image: "https://images.unsplash.com/photo-1598515213902-24f5f59f0013?auto=format&fit=crop&w=400&q=80",
      products: "20+ sprayers"
    }
  ]

  // Filter brands based on selected category
  const filteredBrands = selectedCategory === 'All' 
    ? brands 
    : brands.filter(brand => brand.category === selectedCategory)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category === 'All') {
      navigate('/brands')
    } else {
      navigate(`/brands?category=${encodeURIComponent(category)}`)
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
          <h1>Trusted Brands</h1>
          <p>Browse products from India's top agricultural manufacturers and verified suppliers.</p>
          <div className="page-stats">
            <span>{brands.length} verified brands</span>
            <span>1,250+ local vendors</span>
            <span>Certified quality</span>
          </div>
        </header>
        
        {/* Category Filter */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          flexWrap: 'wrap',
          marginBottom: '32px',
          paddingBottom: '24px',
          borderBottom: '1px solid #e5e5e5'
        }}>
          {brandCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={selectedCategory === category ? 'primary' : 'ghost'}
              style={{
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: selectedCategory === category ? '600' : '500',
                borderRadius: '20px',
                transition: 'all 0.3s ease'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div style={{ 
          marginBottom: '24px',
          fontSize: '16px',
          color: '#6c6250'
        }}>
          Showing <strong>{filteredBrands.length}</strong> brand{filteredBrands.length !== 1 ? 's' : ''} 
          {selectedCategory !== 'All' && <span> in <strong>{selectedCategory}</strong></span>}
        </div>
        
        <div className="page-grid">
          {filteredBrands.map((brand) => (
            <article key={brand.name} className="page-card">
              <img 
                className="page-card-image" 
                src={brand.image} 
                alt={brand.name}
                style={{ cursor: 'pointer' }}
                onClick={() => navigate(`/search?query=${encodeURIComponent(brand.name)}`)}
              />
              <div className="page-card-body">
                <span className="page-pill">{brand.category}</span>
                <h3>{brand.name}</h3>
                <p>{brand.description}</p>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginTop: '12px',
                  fontSize: '14px',
                  color: '#6c6250'
                }}>
                  <span>{brand.products}</span>
                </div>
              </div>
              <div className="page-card-actions">
                <button
                  className="primary"
                  onClick={() => navigate(`/search?query=${encodeURIComponent(brand.name)}`)}
                >
                  View products
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

export default BrandsPage
