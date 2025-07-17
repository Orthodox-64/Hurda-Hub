import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import { CartProvider } from './contexts/CartContext'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSection from './components/ProductSection'
import { fineGrainedProducts, bulkHurdaProducts } from './data/products'
import './App.css'

function App() {
  const appStyle = {
    minHeight: '100vh',
    backgroundColor: '#f9fafb'
  }

  const aboutSectionStyle = {
    padding: '4rem 0',
    backgroundColor: '#f0fdf4'
  }

  const aboutContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const aboutContentStyle = {
    maxWidth: '64rem',
    margin: '0 auto',
    textAlign: 'center'
  }

  const aboutTitleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '2rem'
  }

  const aboutTextStyle = {
    fontSize: '1.125rem',
    color: '#6b7280',
    marginBottom: '1.5rem'
  }

  const featuresGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  }

  const featureStyle = {
    textAlign: 'center'
  }

  const featureIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  }

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  }

  const featureDescStyle = {
    color: '#6b7280'
  }

  const footerStyle = {
    backgroundColor: '#1f2937',
    color: 'white',
    padding: '2rem 0'
  }

  const footerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const footerGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  }

  const footerSectionTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem'
  }

  const footerTextStyle = {
    color: '#9ca3af'
  }

  const footerListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0
  }

  const footerListItemStyle = {
    marginBottom: '0.5rem'
  }

  const footerLinkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.3s'
  }

  const footerLinkHoverStyle = {
    color: 'white'
  }

  const footerBottomStyle = {
    borderTop: '1px solid #374151',
    marginTop: '2rem',
    paddingTop: '2rem',
    textAlign: 'center',
    color: '#9ca3af'
  }

  const responsiveStyle = `
    @media (max-width: 768px) {
      .features-grid {
        grid-template-columns: 1fr !important;
      }
      .footer-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `

  return (
    <>
      <style>{responsiveStyle}</style>
      <AuthProvider>
        <CartProvider>
          <div style={appStyle}>
            <Header />
            <Hero />
            <ProductSection
              title="Fine Grained Hurda"
              products={fineGrainedProducts}
              id="fine-grained"
            />
            <ProductSection
              title="Bulk Hurda"
              products={bulkHurdaProducts}
              id="bulk-hurda"
            />
            
            {/* About Section */}
            <section id="about" style={aboutSectionStyle}>
              <div style={aboutContainerStyle}>
                <div style={aboutContentStyle}>
                  <h2 style={aboutTitleStyle}>
                    About Organic Hurda Hub
                  </h2>
                  <p style={aboutTextStyle}>
                    We are committed to providing the finest quality organic hurda products
                    sourced directly from certified organic farms. Our products are carefully
                    processed to maintain their nutritional value and authentic taste.
                  </p>
                  <div style={featuresGridStyle} className="features-grid">
                    <div style={featureStyle}>
                      <div style={featureIconStyle}>🌱</div>
                      <h3 style={featureTitleStyle}>100% Organic</h3>
                      <p style={featureDescStyle}>Certified organic products with no chemicals</p>
                    </div>
                    <div style={featureStyle}>
                      <div style={featureIconStyle}>🚚</div>
                      <h3 style={featureTitleStyle}>Fresh Delivery</h3>
                      <p style={featureDescStyle}>Fresh products delivered to your doorstep</p>
                    </div>
                    <div style={featureStyle}>
                      <div style={featureIconStyle}>⭐</div>
                      <h3 style={featureTitleStyle}>Premium Quality</h3>
                      <p style={featureDescStyle}>Hand-picked premium quality hurda</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer style={footerStyle}>
              <div style={footerContainerStyle}>
                <div style={footerGridStyle} className="footer-grid">
                  <div>
                    <h3 style={footerSectionTitleStyle}>Organic Hurda Hub</h3>
                    <p style={footerTextStyle}>
                      Your trusted source for premium organic hurda products.
                    </p>
                  </div>
                  <div>
                    <h4 style={footerSectionTitleStyle}>Quick Links</h4>
                    <ul style={footerListStyle}>
                      <li style={footerListItemStyle}>
                        <a 
                          href="#fine-grained" 
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = footerLinkHoverStyle.color}
                          onMouseLeave={(e) => e.target.style.color = footerLinkStyle.color}
                        >
                          Fine Grained Hurda
                        </a>
                      </li>
                      <li style={footerListItemStyle}>
                        <a 
                          href="#bulk-hurda" 
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = footerLinkHoverStyle.color}
                          onMouseLeave={(e) => e.target.style.color = footerLinkStyle.color}
                        >
                          Bulk Hurda
                        </a>
                      </li>
                      <li style={footerListItemStyle}>
                        <a 
                          href="#about" 
                          style={footerLinkStyle}
                          onMouseEnter={(e) => e.target.style.color = footerLinkHoverStyle.color}
                          onMouseLeave={(e) => e.target.style.color = footerLinkStyle.color}
                        >
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 style={footerSectionTitleStyle}>Contact</h4>
                    <p style={footerTextStyle}>Email: info@organichurdahub.com</p>
                    <p style={footerTextStyle}>Phone: +91 98765 43210</p>
                  </div>
                </div>
                <div style={footerBottomStyle}>
                  <p>&copy; 2025 Organic Hurda Hub. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App