import { createContext, useContext, useState, useEffect } from 'react'

const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('agriwave_wishlist')
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist))
      } catch (error) {
        console.error('Failed to load wishlist:', error)
        setWishlist([])
      }
    }
    setIsLoading(false)
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('agriwave_wishlist', JSON.stringify(wishlist))
    }
  }, [wishlist, isLoading])

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find(
        (i) => i.name.toLowerCase() === item.name.toLowerCase()
      )
      if (exists) {
        return prevWishlist
      }
      return [...prevWishlist, item]
    })
  }

  const removeFromWishlist = (name) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.name.toLowerCase() !== name.toLowerCase())
    )
  }

  const isInWishlist = (name) => {
    return wishlist.some((item) => item.name.toLowerCase() === name.toLowerCase())
  }

  const getTotalItems = () => wishlist.length

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        getTotalItems,
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (!context) {
    throw new Error('useWishlist must be used within WishlistProvider')
  }
  return context
}
