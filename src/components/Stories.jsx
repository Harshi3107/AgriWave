const stories = [
  {
    name: 'Ravi, Maharashtra',
    note: 'Cut input costs by 22% using bundled kits.',
    image: 'https://images.unsplash.com/photo-1500382017468-7049fae79d69?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Anita, Karnataka',
    note: 'Improved tomato yield with weekly advisory.',
    image: 'https://images.unsplash.com/photo-1571407614e0c4d1bb0f63e73b7032fc7?auto=format&fit=crop&w=400&h=400&q=80'
  },
  {
    name: 'Iqbal, Punjab',
    note: 'Saved 3 days with doorstep delivery.',
    image: 'https://images.unsplash.com/photo-1573974267531-0d4a38fa27b7?auto=format&fit=crop&w=400&h=400&q=80'
  },
]

function Stories({ onReadStory }) {
  return (
    <section id="stories" className="section">
      <div className="section-head">
        <h2>Farmer stories</h2>
        <p>Real impact from growers who switched to digital procurement.</p>
      </div>
      <div className="grid stories">
        {stories.map((story) => (
          <article key={story.name} className="story-card">
            <img 
              src={story.image} 
              alt={story.name}
              onError={(e) => {
                e.target.style.display = 'none'
              }}
              className="story-avatar"
            />
            <h3>{story.name}</h3>
            <p>{story.note}</p>
            <button className="link" onClick={() => onReadStory(story.name)}>
              Read story
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Stories
