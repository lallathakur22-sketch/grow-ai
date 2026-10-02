const metrics = [
  { label: 'AI profit signals', value: '1.3M+' },
  { label: 'Average monthly gain', value: '+18.7%' },
  { label: 'Execution speed', value: '0.2s' },
  { label: 'Risk protection', value: '92%' },
];

const features = [
  {
    title: 'Smart Buy Logic',
    text: 'Detect momentum, volume shifts, and trend strength before entering any position.',
    icon: '↗',
  },
  {
    title: 'Auto Sell Execution',
    text: 'Exit at the right time using adaptive strategy models and live market volatility checks.',
    icon: '⏱',
  },
  {
    title: 'Profit Locking',
    text: 'Protect gains automatically with trailing stops and smart take-profit logic.',
    icon: '💰',
  },
  {
    title: 'AI Risk Shield',
    text: 'Control exposure with model-driven alerts, emergency exits, and drawdown protection.',
    icon: '🛡',
  },
];

const steps = [
  'Connect your exchange or wallet account',
  'Choose risk profile and strategy preferences',
  'Let AI monitor, buy, sell, and exit at profit',
  'Track performance in real time and scale smarter',
];

const portfolio = [
  { name: 'BTC', change: '+9.8%', gain: '$4,420' },
  { name: 'ETH', change: '+7.1%', gain: '$2,180' },
  { name: 'SOL', change: '+12.3%', gain: '$1,930' },
  { name: 'ADA', change: '+5.4%', gain: '$780' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <div className="brand-wrap">
          <div className="brand-mark">G</div>
          <div className="brand-text">Grow AI</div>
        </div>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#benefits">Benefits</a>
          <a href="#strategy">Strategy</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <button className="cta-button secondary">Login</button>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">AI Trading Growth Engine</span>
            <h1>Buy, sell, and exit with profit automatically.</h1>
            <p>
              Grow AI helps investors automate smart market entries and exits with real-time
              intelligence, built-in risk management, and profit-focused execution.
            </p>

            <div className="hero-actions">
              <button className="cta-button primary">Start Free Trial</button>
              <button className="cta-button ghost">Watch Demo</button>
            </div>

            <div className="social-proof">
              <div>
                <strong>18.7k</strong>
                <span>Active users</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Average rating</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-card">
              <div className="card-header">
                <span>Portfolio AI</span>
                <span className="live-pill">Live</span>
              </div>

              <div className="balance-row">
                <div>
                  <small>Total balance</small>
                  <h3>$148,240</h3>
                </div>
                <span className="profit-tag">+12.4%</span>
              </div>

              <div className="chart-bars" aria-label="Market chart visualization">
                <span style={{ height: '35%' }} />
                <span style={{ height: '45%' }} />
                <span style={{ height: '52%' }} />
                <span style={{ height: '64%' }} />
                <span style={{ height: '80%' }} />
                <span style={{ height: '72%' }} />
                <span style={{ height: '92%' }} />
                <span style={{ height: '100%' }} />
              </div>

              <div className="portfolio-list">
                {portfolio.map((item) => (
                  <div className="portfolio-item" key={item.name}>
                    <div className="asset-name">
                      <span className="dot" />
                      {item.name}
                    </div>
                    <div className="asset-right">
                      <span className="change">{item.change}</span>
                      <strong>{item.gain}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="metrics-wrap">
          <div className="container metrics-grid">
            {metrics.map((metric) => (
              <div className="metric-box" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="features" className="container section-block">
          <div className="section-heading">
            <span className="eyebrow">Built for growth</span>
            <h2>Everything your trading workflow needs.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="benefits" className="container dual-section">
          <div className="info-panel">
            <span className="eyebrow">Why Grow AI</span>
            <h2>Turn market noise into confident decisions.</h2>
            <p>
              Our AI models scan signals across momentum, volatility, liquidity, and trend history,
              then act automatically with disciplined risk rules and profit-taking logic.
            </p>
          </div>

          <div className="steps-panel">
            {steps.map((step, index) => (
              <div className="step-item" key={step}>
                <div className="step-index">0{index + 1}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="strategy" className="container strategy-panel">
          <div className="strategy-card">
            <div>
              <span className="eyebrow">AI Strategy Engine</span>
              <h2>Adaptive execution that protects gains and lowers emotional risk.</h2>
            </div>

            <ul>
              <li>Live signal detection across trending and breakout conditions</li>
              <li>Trailing stops for dynamic profit protection</li>
              <li>Instant risk cap and position sizing control</li>
              <li>Custom strategy preferences based on your market goals</li>
            </ul>
          </div>
        </section>

        <section id="pricing" className="container pricing-section">
          <div className="section-heading centered">
            <span className="eyebrow">Simple pricing</span>
            <h2>Start growing smarter.</h2>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <span className="plan">Starter</span>
              <h3>$19<span>/mo</span></h3>
              <ul>
                <li>Basic AI signals</li>
                <li>1 connected account</li>
                <li>Email alerts</li>
              </ul>
              <button className="cta-button secondary">Try now</button>
            </div>

            <div className="price-card featured">
              <span className="plan">Pro</span>
              <h3>$49<span>/mo</span></h3>
              <ul>
                <li>Advanced auto-trading</li>
                <li>Unlimited strategy rules</li>
                <li>Priority execution</li>
              </ul>
              <button className="cta-button primary">Get Pro</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="brand-wrap">
            <div className="brand-mark">G</div>
            <div className="brand-text">Grow AI</div>
          </div>
          <p>© 2026 Grow AI. Automated growth for smarter markets.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
