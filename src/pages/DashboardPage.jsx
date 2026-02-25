import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const roleConfigs = {
  admin: {
    label: 'Admin',
    title: 'Admin Dashboard',
    tagline: 'Manage platform content, oversee user interactions, and ensure data accuracy.',
    pill: 'Platform operations',
    icon: '⚙️',
    heroTitle: 'Keep the platform accurate and trustworthy',
    heroText:
      'Track approvals, resolve user issues, and keep the marketplace data clean for every region.',
    heroImage:
      'https://images.unsplash.com/photo-1592578294688-48f19730d4d9?auto=format&fit=crop&w=800&q=80',
    heroActions: [
      { label: 'Review content queue', to: '/stories', variant: 'primary' },
      { label: 'Moderate discussions', to: '/vedika', variant: 'ghost' },
    ],
    stats: [
      { value: '24', label: 'Pending reviews' },
      { value: '3,840', label: 'Active users' },
      { value: '18', label: 'Data checks today' },
    ],
    tasks: [
      { id: 1, title: 'Approve advisory posts', category: 'content', priority: 'high', dueDate: 'Today', status: 'pending' },
      { id: 2, title: 'Review user flagged content', category: 'moderation', priority: 'high', dueDate: 'Today', status: 'pending' },
      { id: 3, title: 'Sync inventory data', category: 'data', priority: 'medium', dueDate: 'Tomorrow', status: 'in-progress' },
      { id: 4, title: 'Verify pricing updates', category: 'data', priority: 'medium', dueDate: 'This week', status: 'pending' },
    ],
    sections: [
      {
        title: 'Content governance',
        description: 'Approve advisory posts, highlight seasonal campaigns, and keep knowledge current.',
        items: [
          'Approve 12 advisory drafts for kharif season',
          'Schedule homepage banners for this week',
          'Audit partner content for compliance tags',
        ],
        actions: [
          { label: 'Advisory hub', to: '/advisory', variant: 'primary' },
          { label: 'Stories library', to: '/stories', variant: 'ghost' },
        ],
      },
      {
        title: 'Community oversight',
        description: 'Respond to reports, verify experts, and keep engagement healthy.',
        items: [
          'Resolve 5 flagged discussions',
          'Approve 3 expert profiles',
          'Reply to priority support tickets',
        ],
        actions: [
          { label: 'Support inbox', to: '/support/help', variant: 'primary' },
          { label: 'Community feed', to: '/vedika', variant: 'ghost' },
        ],
      },
      {
        title: 'Data accuracy',
        description: 'Verify pricing, inventory, and scheme eligibility data feeds.',
        items: [
          'Review 7 price discrepancies',
          'Sync 2 inventory partners',
          'Validate 4 subsidy program updates',
        ],
        actions: [
          { label: 'Schemes updates', to: '/schemes/government', variant: 'primary' },
          { label: 'Marketplace', to: '/categories', variant: 'ghost' },
        ],
      },
    ],
  },
  farmer: {
    label: 'Farmer',
    title: 'Farmer Dashboard',
    tagline: 'Access resources, connect with different sectors, and participate in farming initiatives.',
    pill: 'Grower workspace',
    icon: '🌾',
    heroTitle: 'Plan your season with confidence',
    heroText:
      'Stay on top of crop calendars, market prices, and the inputs you need for every stage.',
    heroImage:
      'https://images.unsplash.com/photo-1591595159652-49e4a8e47cce?auto=format&fit=crop&w=800&q=80',
    heroActions: [
      { label: 'View crop advisory', to: '/advisory', variant: 'primary' },
      { label: 'Browse inputs', to: '/categories', variant: 'ghost' },
    ],
    stats: [
      { value: '5', label: 'Advisories this week' },
      { value: '2', label: 'Weather alerts' },
      { value: '8', label: 'Saved bundles' },
    ],
    tasks: [
      { id: 1, title: 'Review water conservation advisory', category: 'advisory', priority: 'high', dueDate: 'Today', status: 'pending', crop: 'Wheat' },
      { id: 2, title: 'Schedule soil test', category: 'planning', priority: 'medium', dueDate: 'This week', status: 'pending', crop: 'N/A' },
      { id: 3, title: 'Stock up on fertilizers', category: 'shopping', priority: 'high', dueDate: 'Before sowing', status: 'pending', crop: 'Rice' },
      { id: 4, title: 'Join irrigation workshop', category: 'training', priority: 'low', dueDate: 'Next month', status: 'registered', crop: 'N/A' },
    ],
    savedBundles: [
      { id: 1, name: 'Summer paddy bundle', price: '₹3,200', items: 5 },
      { id: 2, name: 'Vegetable micro kit', price: '₹1,800', items: 3 },
      { id: 3, name: 'Cotton defense combo', price: '₹2,450', items: 4 },
    ],
    sections: [
      {
        title: 'Your crop plan',
        description: 'Track your crop stage, irrigation reminders, and pest prevention tasks.',
        items: [
          'Finalize nutrient schedule for week 3',
          'Set irrigation reminders for Wednesday',
          'Book a soil test with local lab',
        ],
        actions: [
          { label: 'Advisory plans', to: '/advisory', variant: 'primary' },
          { label: 'Field support', to: '/support/help', variant: 'ghost' },
        ],
      },
      {
        title: 'Connect and trade',
        description: 'Reach suppliers, buyers, and co-op groups for better pricing.',
        items: [
          'Compare seed offers from 4 vendors',
          'Review market prices for your crop',
          'Find nearby storage options',
        ],
        actions: [
          { label: 'Deals & offers', to: '/deals', variant: 'primary' },
          { label: 'Products', to: '/products', variant: 'ghost' },
        ],
      },
      {
        title: 'Programs and training',
        description: 'Join initiatives, government schemes, and learning sessions.',
        items: [
          'Apply to water conservation initiative',
          'Check new subsidy programs',
          'Enroll in post-harvest training',
        ],
        actions: [
          { label: 'Government schemes', to: '/schemes/government', variant: 'primary' },
          { label: 'Success stories', to: '/stories', variant: 'ghost' },
        ],
      },
    ],
  },
  expert: {
    label: 'Agricultural Expert',
    title: 'Expert Dashboard',
    tagline: "Provide guidance, create educational content, and support farmers' needs.",
    pill: 'Advisory studio',
    icon: '👨‍🌾',
    heroTitle: 'Support farmers with trusted guidance',
    heroText:
      'Respond to field requests, publish learning resources, and track the impact of your advice.',
    heroImage:
      'https://images.unsplash.com/photo-1574895838981-27451cf1a882?auto=format&fit=crop&w=800&q=80',
    heroActions: [
      { label: 'Create new guide', to: '/create-post', variant: 'primary' },
      { label: 'View advisory queue', to: '/advisory', variant: 'ghost' },
    ],
    stats: [
      { value: '14', label: 'Open requests' },
      { value: '6', label: 'Draft articles' },
      { value: '128', label: 'Farmers supported' },
    ],
    tasks: [
      { id: 1, title: 'Answer pest control query from Ravi Kumar', category: 'support', priority: 'high', dueDate: 'Today', status: 'pending', farmersCovered: 1 },
      { id: 2, title: 'Draft kharif season guide', category: 'content', priority: 'high', dueDate: 'This week', status: 'in-progress', farmersCovered: 150 },
      { id: 3, title: 'Conduct field visit - Village Patel', category: 'fieldwork', priority: 'medium', dueDate: 'Saturday', status: 'scheduled', farmersCovered: 25 },
      { id: 4, title: 'Review 5 community questions', category: 'community', priority: 'medium', dueDate: 'Tomorrow', status: 'pending', farmersCovered: 5 },
    ],
    drafts: [
      { id: 1, title: 'Wheat sowing best practices', type: 'Guide', status: '60% complete' },
      { id: 2, title: 'Irrigation scheduling tips', type: 'Article', status: '40% complete' },
      { id: 3, title: 'Pest identification video notes', type: 'Notes', status: '80% complete' },
    ],
    sections: [
      {
        title: 'Guidance queue',
        description: 'Prioritize urgent requests and follow up on field visits.',
        items: [
          'Review 4 pest infestation cases',
          'Confirm 2 field visit schedules',
          'Send follow-up notes to 6 farmers',
        ],
        actions: [
          { label: 'Advisory requests', to: '/advisory', variant: 'primary' },
          { label: 'Support center', to: '/support/help', variant: 'ghost' },
        ],
      },
      {
        title: 'Content studio',
        description: 'Publish crop guides, videos, and quick tips for the community.',
        items: [
          'Draft irrigation checklist for wheat',
          'Update fertilizer dosage chart',
          'Plan weekly weather advisory post',
        ],
        actions: [
          { label: 'Write a post', to: '/create-post', variant: 'primary' },
          { label: 'View stories', to: '/stories', variant: 'ghost' },
        ],
      },
      {
        title: 'Community support',
        description: 'Engage in discussions and verify high-impact comments.',
        items: [
          'Answer 5 new community questions',
          'Highlight 3 best-practice tips',
          'Monitor feedback from last webinar',
        ],
        actions: [
          { label: 'Community hub', to: '/vedika', variant: 'primary' },
          { label: 'Upcoming events', to: '/stories', variant: 'ghost' },
        ],
      },
    ],
  },
  public: {
    label: 'Public',
    title: 'Public Dashboard',
    tagline: 'Explore content, learn about farming, and engage in discussions.',
    pill: 'Open learning',
    icon: '📚',
    heroTitle: 'Discover the world of agriculture',
    heroText:
      'Browse educational content, follow market trends, and join community conversations.',
    heroImage:
      'https://images.unsplash.com/photo-1488459716781-6818f2af28cc?auto=format&fit=crop&w=800&q=80',
    heroActions: [
      { label: 'Explore stories', to: '/stories', variant: 'primary' },
      { label: 'Browse products', to: '/products', variant: 'ghost' },
    ],
    stats: [
      { value: '22', label: 'New articles' },
      { value: '9', label: 'Active discussions' },
      { value: '3', label: 'Local events' },
    ],
    browsingHistory: [
      { id: 1, title: 'Seeds & hybrids guide', date: 'Yesterday', category: 'Learning' },
      { id: 2, title: 'Crop nutrition basics', date: '2 days ago', category: 'Learning' },
      { id: 3, title: 'Summer paddy bundle', date: '3 days ago', category: 'Product' },
    ],
    recommendedContent: [
      { id: 1, title: 'Top 5 pest control methods', expert: 'Dr. Sharma', views: '2.3K' },
      { id: 2, title: 'Soil testing guide for beginners', expert: 'Ms. Patel', views: '1.8K' },
      { id: 3, title: 'Water conservation techniques', expert: 'Mr. Singh', views: '3.5K' },
    ],
    sections: [
      {
        title: 'Learning hub',
        description: 'Read crop explainers, watch guides, and follow expert interviews.',
        items: [
          'Start with the crop basics series',
          'Watch a 10-minute soil health guide',
          'Read this week\'s top advisory tips',
        ],
        actions: [
          { label: 'Advisory highlights', to: '/advisory', variant: 'primary' },
          { label: 'Stories', to: '/stories', variant: 'ghost' },
        ],
      },
      {
        title: 'Market snapshot',
        description: 'Track pricing trends and understand seasonal cycles.',
        items: [
          'View regional price updates',
          'Compare seasonal demand shifts',
          'Track top-selling categories',
        ],
        actions: [
          { label: 'Browse categories', to: '/categories', variant: 'primary' },
          { label: 'Search products', to: '/search', variant: 'ghost' },
        ],
      },
      {
        title: 'Community highlights',
        description: 'Join conversations and learn from growers and experts.',
        items: [
          'Read the latest success stories',
          'Join a live Q&A session',
          'Follow community announcements',
        ],
        actions: [
          { label: 'Community hub', to: '/vedika', variant: 'primary' },
          { label: 'Support', to: '/support/help', variant: 'ghost' },
        ],
      },
    ],
  },
}

function DashboardPage() {
  const { role } = useParams()
  const navigate = useNavigate()
  const storedRole = typeof window !== 'undefined' ? window.localStorage.getItem('agriwaveRole') : null
  const resolvedRole = role || storedRole || 'public'
  const config = roleConfigs[resolvedRole]
  const [tasks, setTasks] = useState(config?.tasks || [])
  const [completedTasks, setCompletedTasks] = useState([])

  const handleTaskComplete = (taskId) => {
    setTasks(tasks.filter(t => t.id !== taskId))
    setCompletedTasks([...completedTasks, taskId])
  }

  const handleLogout = () => {
    localStorage.removeItem('agriwaveRole')
    navigate('/')
  }

  if (!config) {
    return (
      <div className="page-shell">
        <header className="page-header">
          <Link className="back-link" to="/sign-in">
            Back to sign in
          </Link>
          <h1>Dashboard</h1>
          <p>Select a role to access the right dashboard experience.</p>
        </header>
        <div className="page-card">
          <p>We could not find that role. Please sign in again to choose a role.</p>
          <div className="page-actions">
            <Link className="button-link primary" to="/sign-in">
              Go to sign in
            </Link>
            <Link className="button-link ghost" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <header className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
          <div>
            <Link className="back-link" to="/">
              Back to home
            </Link>
            <h1 style={{ margin: '12px 0 4px 0' }}>
              {config.icon} {config.title}
            </h1>
            <p style={{ margin: '0 0 8px 0' }}>{config.tagline}</p>
            <span className="page-pill">{config.pill}</span>
          </div>
          <button 
            className="ghost" 
            style={{ padding: '8px 16px', fontSize: '0.9rem', marginTop: '8px' }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      <section className="dashboard-hero">
        <div className="dashboard-hero-copy">
          <h2>{config.heroTitle}</h2>
          <p>{config.heroText}</p>
          <div className="page-actions">
            {config.heroActions.map((action) => (
              <Link
                key={action.label}
                to={action.to}
                className={`button-link ${action.variant === 'primary' ? 'primary' : 'ghost'}`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
        <div
          className="dashboard-hero-visual"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(47, 58, 37, 0.15), rgba(94, 122, 58, 0.2)), url("${config.heroImage}")`,
          }}
        />
      </section>

      <section className="dashboard-stats">
        {config.stats.map((stat) => (
          <div key={stat.label} className="dashboard-stat">
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Role-Specific Task Management */}
      {config.tasks && config.tasks.length > 0 && (
        <section style={{ marginBottom: '40px' }}>
          <div className="page-card">
            <h3 style={{ marginBottom: '20px' }}>📋 Your Tasks</h3>
            {tasks.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
                🎉 All tasks completed! Great work!
              </p>
            ) : (
              <div style={{ display: 'grid', gap: '12px' }}>
                {tasks.map((task) => (
                  <div 
                    key={task.id}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px',
                      background: '#f9f9f9',
                      borderLeft: `4px solid ${task.priority === 'high' ? '#d32f2f' : task.priority === 'medium' ? '#f57c00' : '#4caf50'}`,
                      borderRadius: '8px',
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: '0 0 4px 0', fontWeight: '600', color: '#333' }}>
                        {task.title}
                      </p>
                      <div style={{ display: 'flex', gap: '12px', fontSize: '0.85rem', color: '#666' }}>
                        <span>📌 {task.category}</span>
                        <span>📅 {task.dueDate}</span>
                        {task.crop && <span>🌾 {task.crop}</span>}
                        {task.farmersCovered && <span>👥 {task.farmersCovered} farmer(s)</span>}
                      </div>
                    </div>
                    <button
                      onClick={() => handleTaskComplete(task.id)}
                      style={{
                        padding: '8px 16px',
                        background: '#5eb62f',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontWeight: '600',
                        marginLeft: '16px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      ✓ Complete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Farmer-Specific: Saved Bundles */}
      {resolvedRole === 'farmer' && config.savedBundles && (
        <section style={{ marginBottom: '40px' }}>
          <div className="page-card">
            <h3 style={{ marginBottom: '16px' }}>💚 Your Saved Bundles</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {config.savedBundles.map((bundle) => (
                <div
                  key={bundle.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    background: '#f5f5f5',
                    borderRadius: '8px',
                  }}
                >
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>{bundle.name}</p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{bundle.items} items</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ margin: '0 0 4px 0', fontWeight: '700', color: '#5eb62f' }}>{bundle.price}</p>
                    <button 
                      style={{ padding: '6px 12px', background: '#5eb62f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expert-Specific: Draft Articles */}
      {resolvedRole === 'expert' && config.drafts && (
        <section style={{ marginBottom: '40px' }}>
          <div className="page-card">
            <h3 style={{ marginBottom: '16px' }}>📝 Your Drafts</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {config.drafts.map((draft) => (
                <div
                  key={draft.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    background: '#f5f5f5',
                    borderRadius: '8px',
                  }}
                >
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>{draft.title}</p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>{draft.type} • {draft.status}</p>
                  </div>
                  <button 
                    style={{ padding: '6px 12px', background: '#5eb62f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    Continue Editing
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Public-Specific: Recommended Content */}
      {resolvedRole === 'public' && config.recommendedContent && (
        <section style={{ marginBottom: '40px' }}>
          <div className="page-card">
            <h3 style={{ marginBottom: '16px' }}>⭐ Recommended For You</h3>
            <div style={{ display: 'grid', gap: '12px' }}>
              {config.recommendedContent.map((content) => (
                <div
                  key={content.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 16px',
                    background: '#f5f5f5',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>{content.title}</p>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#666' }}>By {content.expert} • {content.views} views</p>
                  </div>
                  <button 
                    style={{ padding: '6px 12px', background: '#5eb62f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    Read
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="dashboard-grid">
        {config.sections.map((section) => (
          <article key={section.title} className="page-card dashboard-section">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <ul className="dashboard-list">
              {section.items.map((item) => (
                <li key={item}>
                  <span className="dashboard-dot" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="page-actions">
              {section.actions.map((action) => (
                <Link
                  key={action.label}
                  to={action.to}
                  className={`button-link ${action.variant === 'primary' ? 'primary' : 'ghost'}`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default DashboardPage
