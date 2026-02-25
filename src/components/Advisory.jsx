function Advisory({ onBookCall }) {
  return (
    <section id="advisory" className="section advisory">
      <div className="advisory-panel">
        <h2>Advisory that feels local</h2>
        <p>
          Get crop calendars, field diagnostics, and weather-smart alerts. Every
          recommendation is tailored to your region and crop stage.
        </p>
        <div className="advisory-steps">
          <div>
            <strong>1</strong>
            <span>Share crop & stage</span>
          </div>
          <div>
            <strong>2</strong>
            <span>Receive a plan</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Track progress</span>
          </div>
        </div>
        <button className="primary" onClick={onBookCall}>
          Book a field call
        </button>
      </div>
      <div className="advisory-stats">
        <div>
          <h3>3.2x</h3>
          <p>Yield improvement in demo farms.</p>
        </div>
        <div>
          <h3>24 hr</h3>
          <p>Average response time from experts.</p>
        </div>
        <div>
          <h3>98%</h3>
          <p>Order fulfillment rate.</p>
        </div>
      </div>
    </section>
  )
}

export default Advisory
