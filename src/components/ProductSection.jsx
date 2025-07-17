import React from 'react'
import ProductCard from './ProductCard'

const ProductSection = ({ title, products, id }) => {
  const sectionStyle = {
    padding: '3rem 0'
  }

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }

  const titleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#1f2937'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem'
  }

  const responsiveStyle = `
    @media (max-width: 768px) {
      .product-grid {
        grid-template-columns: 1fr !important;
      }
    }
    @media (min-width: 769px) and (max-width: 1024px) {
      .product-grid {
        grid-template-columns: repeat(2, 1fr) !important;
      }
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
      .product-grid {
        grid-template-columns: repeat(3, 1fr) !important;
      }
    }
  `

  return (
    <>
      <style>{responsiveStyle}</style>
      <section id={id} style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={titleStyle}>
            {title}
          </h2>
          <div style={gridStyle} className="product-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductSection