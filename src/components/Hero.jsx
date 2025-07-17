import React from 'react'

const Hero = () => {
  const sectionStyle = {
    background: 'linear-gradient(to right, #16a34a, #166534)',
    color: 'white',
    padding: '5rem 0',
    textAlign: 'center'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const titleStyle = {
    fontSize: '3.75rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  }

  const subtitleStyle = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    maxWidth: '32rem',
    margin: '0 auto 2rem auto'
  }

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem'
  }

  const primaryButtonStyle = {
    backgroundColor: 'white',
    color: '#16a34a',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background-color 0.3s',
    border: 'none',
    cursor: 'pointer'
  }

  const primaryButtonHoverStyle = {
    backgroundColor: '#f3f4f6'
  }

  const secondaryButtonStyle = {
    backgroundColor: '#15803d',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'background-color 0.3s',
    border: 'none',
    cursor: 'pointer'
  }

  const secondaryButtonHoverStyle = {
    backgroundColor: '#166534'
  }

  const responsiveStyle = `
    @media (min-width: 640px) {
      .button-container {
        flex-direction: row !important;
        justify-content: center !important;
      }
    }
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem !important;
      }
      .hero-subtitle {
        font-size: 1.125rem !important;
      }
    }
  `

  return (
    <>
      <style>{responsiveStyle}</style>
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h1 style={titleStyle} className="hero-title">
            🌿 Organic Hurda Hub
          </h1>
          <p style={subtitleStyle} className="hero-subtitle">
            Premium quality organic hurda products delivered fresh to your doorstep
          </p>
          <div style={buttonContainerStyle} className="button-container">
            <a
              href="#fine-grained"
              style={primaryButtonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = primaryButtonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = primaryButtonStyle.backgroundColor}
            >
              Shop Fine Grained
            </a>
            <a
              href="#bulk-hurda"
              style={secondaryButtonStyle}
              onMouseEnter={(e) => e.target.style.backgroundColor = secondaryButtonHoverStyle.backgroundColor}
              onMouseLeave={(e) => e.target.style.backgroundColor = secondaryButtonStyle.backgroundColor}
            >
              Shop Bulk Hurda
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero