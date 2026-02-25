import './App.css'
import { Route, Routes } from 'react-router-dom'
import FloatingHelpButton from './components/FloatingHelpButton'
import LandingPage from './pages/LandingPage'
import SignInPage from './pages/SignInPage'
import CreateAccountPage from './pages/CreateAccountPage'
import CategoriesPage from './pages/CategoriesPage'
import DealsPage from './pages/DealsPage'
import AdvisoryPage from './pages/AdvisoryPage'
import AdvisorySubPage from './pages/AdvisorySubPage'
import VedikaPage from './pages/VedikaPage'
import VedikaSubPage from './pages/VedikaSubPage'
import CreatePostPage from './pages/CreatePostPage'
import SchemesSubPage from './pages/SchemesSubPage'
import StoriesPage from './pages/StoriesPage'
import ClearancePage from './pages/ClearancePage'
import ContactPage from './pages/ContactPage'
import SupportPage from './pages/SupportPage'
import NotFoundPage from './pages/NotFoundPage'
import InfoPage from './pages/InfoPage'
import SearchPage from './pages/SearchPage'
import DetailPage from './pages/DetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderSuccessPage from './pages/OrderSuccessPage'
import WishlistPage from './pages/WishlistPage'
import LanguagePage from './pages/LanguagePage'
import ProductsPage from './pages/ProductsPage'
import DashboardPage from './pages/DashboardPage'
import BrandsPage from './pages/BrandsPage'
import ShopByPage from './pages/ShopByPage'

function App() {
  return (
    <>
      <FloatingHelpButton />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/deals" element={<DealsPage />} />
        <Route path="/advisory" element={<AdvisoryPage />} />
        <Route path="/advisory/:topic" element={<AdvisorySubPage />} />
        <Route path="/vedika" element={<VedikaPage />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/vedika/post/:id" element={<VedikaSubPage />} />
        <Route path="/schemes/:topic" element={<SchemesSubPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/clearance" element={<ClearancePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/support/:topic" element={<SupportPage />} />
        <Route path="/track-order" element={(
          <InfoPage
            title="Track order"
            summary="Follow delivery progress and dispatch updates."
            detailTitle="Order tracking"
            detailText="Use the tracking link from your SMS or email confirmation."
            linkTo="/support/delivery"
            linkLabel="Delivery support"
          />
        )} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/seeds" element={(
          <InfoPage
            title="Seeds"
            summary="Hybrid, vegetable, and specialty seed collections."
            detailTitle="Seed catalogue"
            detailText="Seasonal availability will be listed here soon."
          />
        )} />
        <Route path="/crop-protection" element={(
          <InfoPage
            title="Crop protection"
            summary="Insecticides, fungicides, and integrated solutions."
            detailTitle="Protection plans"
            detailText="Product recommendations will appear after onboarding."
          />
        )} />
        <Route path="/crop-nutrition" element={(
          <InfoPage
            title="Crop nutrition"
            summary="Fertilizers, micronutrients, and soil boosters."
            detailTitle="Nutrition kits"
            detailText="Nutrient schedules will be tailored per crop."
          />
        )} />
        <Route path="/equipments" element={(
          <InfoPage
            title="Equipments"
            summary="Tools, sprayers, and field-ready machinery."
            detailTitle="Equipment list"
            detailText="Verified equipment bundles are coming soon."
          />
        )} />
        <Route path="/animal-husbandry" element={(
          <InfoPage
            title="Animal husbandry"
            summary="Feed, supplements, and livestock care essentials."
            detailTitle="Livestock care"
            detailText="Curated packs will be added after partner intake."
          />
        )} />
        <Route path="/organic" element={(
          <InfoPage
            title="Organic"
            summary="Bio inputs and natural crop care solutions."
            detailTitle="Organic range"
            detailText="Compliance-ready products will be published soon."
          />
        )} />
        <Route path="/tapas" element={(
          <InfoPage
            title="Tapas"
            summary="Regional input packs and agri essentials."
            detailTitle="Regional kits"
            detailText="Local assortments will launch shortly."
          />
        )} />
        <Route path="/services" element={(
          <InfoPage
            title="Services"
            summary="Advisory, diagnostics, and post-harvest help."
            detailTitle="Service desk"
            detailText="Service booking tools are coming soon."
            linkTo="/advisory"
            linkLabel="Explore advisory"
          />
        )} />
        <Route path="/vedika" element={(
          <InfoPage
            title="Vedika"
            summary="Knowledge hub for growers and agronomists."
            detailTitle="Insights"
            detailText="Articles, guides, and tips will be published here."
          />
        )} />
        <Route path="/blogs" element={(
          <InfoPage
            title="Blogs"
            summary="Updates on crops, weather, and market trends."
            detailTitle="Latest posts"
            detailText="Content updates will start once the editorial queue is live."
          />
        )} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/shop-by/:category" element={<ShopByPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/:role" element={<DashboardPage />} />
        <Route path="/detail/:type/:name" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
