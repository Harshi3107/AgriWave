import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('agriwave_cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error('Failed to load cart:', error)
        setItems([])
      }
    }
    setIsLoading(false)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('agriwave_cart', JSON.stringify(items))
    }
  }, [items, isLoading])

  const addItem = (item) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.name.toLowerCase() === item.name.toLowerCase()
      )

      if (existingItem) {
        return prevItems.map((i) =>
          i.name.toLowerCase() === item.name.toLowerCase()
            ? { ...i, quantity: i.quantity + (item.quantity || 1) }
            : i
        )
      }

      return [...prevItems, { ...item, quantity: item.quantity || 1 }]
    })
  }

  const removeItem = (name) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.name.toLowerCase() !== name.toLowerCase())
    )
  }

  const updateQuantity = (name, quantity) => {
    if (quantity <= 0) {
      removeItem(name)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.name.toLowerCase() === name.toLowerCase()
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0)
  }

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    isLoading,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
