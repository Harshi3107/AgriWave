import { useNavigate } from 'react-router-dom'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Deals from '../components/Deals'
import Advisory from '../components/Advisory'
import Stories from '../components/Stories'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

function LandingPage() {
  const navigate = useNavigate()
  const { addItem } = useCart()
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist()

  const handleBrowseCategory = (name) => {
    navigate(`/categories?type=${encodeURIComponent(name)}`)
  }

  const handleAddBundle = (name) => {
    const { bundles } = require('../data/catalog')
    const bundleItem = bundles.find((b) => b.name === name)
    if (bundleItem) {
      addItem({
        name: bundleItem.name,
        type: 'bundle',
        price: bundleItem.price,
        quantity: 1,
      })
      navigate('/cart')
    }
  }

  const handleViewDetails = (name) => {
    navigate(`/detail/bundle/${encodeURIComponent(name)}`)
  }

  const handleWishlistToggle = (name) => {
    if (isInWishlist(name)) {
      removeFromWishlist(name)
    } else {
      const { bundles } = require('../data/catalog')
      const bundleItem = bundles.find((b) => b.name === name)
      if (bundleItem) {
        addToWishlist({
          name: bundleItem.name,
          price: bundleItem.price,
          type: 'bundle',
        })
      }
    }
  }

  const handleReadStory = (name) => {
    navigate(`/detail/story/${encodeURIComponent(name)}`)
  }

  return (
    <div className="page">
      <Navbar />
      <Hero
        onStartShopping={() => navigate('/categories')}
        onExploreAdvisory={() => navigate('/advisory')}
        onViewKits={() => navigate('/deals')}
      />
      <Categories onBrowseCategory={handleBrowseCategory} />
      <Deals
        onAddBundle={handleAddBundle}
        onViewDetails={handleViewDetails}
        onStockStatus={() => navigate('/deals')}
        onShopClearance={() => navigate('/clearance')}
        onWishlistToggle={handleWishlistToggle}
        isInWishlist={isInWishlist}
      />
      <Advisory onBookCall={() => navigate('/advisory')} />
      <Stories onReadStory={handleReadStory} />
      <CallToAction onGetStarted={() => navigate('/create-account')} />
      <Footer />
    </div>
  )
}

export default LandingPage
