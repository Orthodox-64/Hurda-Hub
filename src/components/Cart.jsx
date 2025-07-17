import React from 'react'
import { useCart } from '../contexts/CartContext'
import { useAuth } from '../contexts/AuthContext'
import { apiClient } from '../lib/api'

const Cart = ({ onClose }) => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()
  const { user } = useAuth()

  const handleCheckout = async () => {
    if (!user) {
      alert('Please sign in to place an order')
      return
    }

    try {
      const orderData = {
        items: cartItems.map(item => ({
          productId: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          unit: item.unit
        })),
        totalAmount: getTotalPrice()
      }

      await apiClient.createOrder(orderData)

      alert('Order placed successfully!')
      clearCart()
      onClose()
    } catch (error) {
      console.error('Error placing order:', error)
      alert(error.message || 'Error placing order. Please try again.')
    }
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50
  }

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    width: '100%',
    maxWidth: '42rem',
    maxHeight: '80vh',
    overflowY: 'auto'
  }

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  }

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  }

  const closeButtonStyle = {
    color: '#6b7280',
    background: 'none',
    border: 'none',
    fontSize: '1.25rem',
    cursor: 'pointer',
    transition: 'color 0.3s'
  }

  const closeButtonHoverStyle = {
    color: '#374151'
  }

  const emptyCartStyle = {
    textAlign: 'center',
    color: '#6b7280',
    padding: '2rem 0'
  }

  const itemsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '1.5rem'
  }

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#f9fafb',
    padding: '1rem',
    borderRadius: '0.5rem'
  }

  const itemImageStyle = {
    width: '4rem',
    height: '4rem',
    objectFit: 'cover',
    borderRadius: '0.25rem'
  }

  const itemInfoStyle = {
    flex: 1
  }

  const itemNameStyle = {
    fontWeight: '600'
  }

  const itemPriceStyle = {
    color: '#6b7280'
  }

  const quantityControlsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  }

  const quantityButtonStyle = {
    backgroundColor: '#e5e7eb',
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const quantityButtonHoverStyle = {
    backgroundColor: '#d1d5db'
  }

  const quantityDisplayStyle = {
    width: '2rem',
    textAlign: 'center'
  }

  const itemActionsStyle = {
    textAlign: 'right'
  }

  const itemTotalStyle = {
    fontWeight: '600'
  }

  const removeButtonStyle = {
    color: '#ef4444',
    background: 'none',
    border: 'none',
    fontSize: '0.875rem',
    cursor: 'pointer',
    transition: 'color 0.3s'
  }

  const removeButtonHoverStyle = {
    color: '#dc2626'
  }

  const totalSectionStyle = {
    borderTop: '1px solid #e5e7eb',
    paddingTop: '1rem'
  }

  const totalRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  }

  const totalAmountStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  }

  const actionsRowStyle = {
    display: 'flex',
    gap: '1rem'
  }

  const clearButtonStyle = {
    flex: 1,
    backgroundColor: '#6b7280',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const clearButtonHoverStyle = {
    backgroundColor: '#4b5563'
  }

  const checkoutButtonStyle = {
    flex: 1,
    backgroundColor: '#16a34a',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }

  const checkoutButtonHoverStyle = {
    backgroundColor: '#15803d'
  }

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>Shopping Cart</h2>
          <button
            onClick={onClose}
            style={closeButtonStyle}
            onMouseEnter={(e) => e.target.style.color = closeButtonHoverStyle.color}
            onMouseLeave={(e) => e.target.style.color = closeButtonStyle.color}
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p style={emptyCartStyle}>Your cart is empty</p>
        ) : (
          <>
            <div style={itemsContainerStyle}>
              {cartItems.map(item => (
                <div key={item.id} style={itemStyle}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={itemImageStyle}
                  />
                  <div style={itemInfoStyle}>
                    <h3 style={itemNameStyle}>{item.name}</h3>
                    <p style={itemPriceStyle}>₹{item.price} per {item.unit}</p>
                  </div>
                  <div style={quantityControlsStyle}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      style={quantityButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = quantityButtonHoverStyle.backgroundColor}
                      onMouseLeave={(e) => e.target.style.backgroundColor = quantityButtonStyle.backgroundColor}
                    >
                      -
                    </button>
                    <span style={quantityDisplayStyle}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      style={quantityButtonStyle}
                      onMouseEnter={(e) => e.target.style.backgroundColor = quantityButtonHoverStyle.backgroundColor}
                      onMouseLeave={(e) => e.target.style.backgroundColor = quantityButtonStyle.backgroundColor}
                    >
                      +
                    </button>
                  </div>
                  <div style={itemActionsStyle}>
                    <p style={itemTotalStyle}>₹{(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      style={removeButtonStyle}
                      onMouseEnter={(e) => e.target.style.color = removeButtonHoverStyle.color}
                      onMouseLeave={(e) => e.target.style.color = removeButtonStyle.color}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div style={totalSectionStyle}>
              <div style={totalRowStyle}>
                <span style={totalAmountStyle}>Total: ₹{getTotalPrice().toFixed(2)}</span>
              </div>
              <div style={actionsRowStyle}>
                <button
                  onClick={clearCart}
                  style={clearButtonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = clearButtonHoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = clearButtonStyle.backgroundColor}
                >
                  Clear Cart
                </button>
                <button
                  onClick={handleCheckout}
                  style={checkoutButtonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = checkoutButtonHoverStyle.backgroundColor}
                  onMouseLeave={(e) => e.target.style.backgroundColor = checkoutButtonStyle.backgroundColor}
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart