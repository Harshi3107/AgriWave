import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { categories } from '../data/catalog'

function CategoriesPage() {
  const [params] = useSearchParams()
  const focus = params.get('type')
  const navigate = useNavigate()

  // Map subcategories to main categories
  const categoryMapping = {
    // Seeds
    Vegetable: ['Seeds & Hybrids'],
    Fruit: ['Seeds & Hybrids'],
    Flower: ['Seeds & Hybrids'],
    Field: ['Seeds & Hybrids'],
    Hybrid: ['Seeds & Hybrids'],
    OrganicSeeds: ['Seeds & Hybrids'],
    Seeds: ['Seeds & Hybrids'],

    // Crop Protection
    Insecticides: ['Crop Protection'],
    Fungicides: ['Crop Protection'],
    Herbicides: ['Crop Protection'],
    BioPesticides: ['Crop Protection'],
    Weedicides: ['Crop Protection'],

    // Crop Nutrition
    Fertilizers: ['Fertilizers'],
    Micronutrients: ['Micronutrients'],
    Growth: ['Growth'],
    SoilConditioners: ['SoilConditioners'],
    OrganicManure: ['OrganicManure'],
    Nutrients: ['Fertilizers', 'Micronutrients', 'Growth', 'SoilConditioners', 'OrganicManure'],

    // Equipments
    Sprayers: ['Sprayers'],
    Irrigation: ['Irrigation'],
    Tools: ['Farm Tools'],
    Harvesting: ['Harvesting'],
    Storage: ['Storage'],
    Machinery: ['Farm Tools', 'Sprayers', 'Irrigation', 'Harvesting', 'Storage'],

    // Organic and animal care
    Organic: ['OrganicManure', 'SoilConditioners'],
    Animal: ['Animal Husbandry'],

    // Offers
    Offers: ['Offers'],
  }

  const selectedCategories = focus ? categoryMapping[focus] : null

  // Filter categories based on focus
  const filteredCategories = focus
    ? selectedCategories
      ? categories.filter((cat) => selectedCategories.includes(cat.name))
      : []
    : categories

  return (
    <div className="page-shell">
      <header className="page-header">
        <Link className="back-link" to="/">
          Back to home
        </Link>
        <h1>Categories</h1>
        <p>Browse input families curated by agronomists.</p>
        {focus ? <span className="page-pill">Selected: {focus}</span> : null}
      </header>
      <div className="page-grid">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((item) => (
            <article key={item.name} className="page-card">
              {item.image ? (
                <Link to={`/detail/category/${encodeURIComponent(item.name)}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <img className="page-card-image" src={item.image} alt={item.name} style={{ cursor: 'pointer' }} />
                </Link>
              ) : null}
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button
                className="ghost"
                onClick={() => navigate(`/detail/category/${encodeURIComponent(item.name)}`)}
              >
                View items
              </button>
            </article>
          ))
        ) : (
          <p>No categories found for the selected filter.</p>
        )}
      </div>
    </div>
  )
}

export default CategoriesPage
