const categories = [
  {
    name: 'Offers',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&q=80',
    color: '#b8d4a8'
  },
  
  {
    name: 'Nutrients',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=300&q=80',
    color: '#f5b8c8'
  },
  
  {
    name: 'Vegetable & Fruit Seeds',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=300&q=80',
    color: '#d4c19c'
  },
  {
    name: 'Herbicides',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=300&q=80',
    color: '#ffa940'
  },

  {
    name: 'Farm Machinery',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=300&q=80',
    color: '#9db4f5'
  },
  {
    name: 'Flower Seeds',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=300&q=80',
    color: '#f5c4a8'
  },
  {
    name: 'Organic Farming',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=300&q=80',
    color: '#7dd3f0'
  },
  {
    name: 'Animal Husbandry',
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=300&q=80',
    color: '#ffa940'
  },
  {
    name: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=300&q=80',
    color: '#f5c4c4'
  }
]

function Categories({ onBrowseCategory }) {
  return (
    <section id="categories" className="section">
      <div className="section-head">
        <h2>Categories</h2>
      </div>
      <div className="categories-grid">
        {categories.map((category) => (
          <div 
            key={category.name} 
            className="category-item"
            onClick={() => onBrowseCategory(category.name)}
          >
            <div className="category-circle" style={{ background: category.color }}>
              <img 
                src={category.image} 
                alt={category.name}
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
