import React from 'react'
import { useCart } from '../contexts/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s'
  }

  const cardHoverStyle = {
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
  }

  const imageStyle = {
    width: '100%',
    height: '12rem',
    objectFit: 'cover'
  }

  const contentStyle = {
    padding: '1rem'
  }

  const titleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: '0.5rem'
  }

  const descriptionStyle = {
    color: '#6b7280',
    fontSize: '0.875rem',
    marginBottom: '0.75rem'
  }

  const priceRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '0.75rem'
  }

  const priceStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#16a34a'
  }

  const unitStyle = {
    fontSize: '0.875rem',
    color: '#6b7280'
  }

  const bottomRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }

  const stockStyle = {
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontSize: '0.75rem'
  }

  const inStockStyle = {
    ...stockStyle,
    backgroundColor: '#dcfce7',
    color: '#166534'
  }

  const outOfStockStyle = {
    ...stockStyle,
    backgroundColor: '#fef2f2',
    color: '#b91c1c'
  }

  const buttonStyle = {
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const buttonHoverStyle = {
    backgroundColor: '#15803d'
  }

  const buttonDisabledStyle = {
    opacity: 0.5,
    cursor: 'not-allowed'
  }

  return (
    <div 
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = cardStyle.boxShadow}
    >
      <img
        src={product.image}
        alt={product.name}
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h3 style={titleStyle}>
          {product.name}
        </h3>
        <p style={descriptionStyle}>
          {product.description}
        </p>
        <div style={priceRowStyle}>
          <span style={priceStyle}>
            ₹{product.price}
          </span>
          <span style={unitStyle}>
            {product.unit}
          </span>
        </div>
        <div style={bottomRowStyle}>
          <span style={product.stock > 0 ? inStockStyle : outOfStockStyle}>
            {product.stock > 0 ? `${product.stock} available` : 'Out of stock'}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            style={{
              ...buttonStyle,
              ...(product.stock === 0 ? buttonDisabledStyle : {})
            }}
            onMouseEnter={(e) => product.stock > 0 && (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
            onMouseLeave={(e) => product.stock > 0 && (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard