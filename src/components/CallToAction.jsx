function CallToAction({ onGetStarted }) {
  return (
    <section className="section cta">
      <div>
        <h2>Ready to plan your next season?</h2>
        <p>Get a personalized shopping list and advisory roadmap.</p>
      </div>
      <button className="dark" onClick={onGetStarted}>
        Get started
      </button>
    </section>
  )
}

export default CallToAction
