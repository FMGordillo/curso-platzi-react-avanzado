import { useEffect, useState } from 'react'

const useScrollListener = () => {
  const [scrollY, setScrollY] = useState(0)

  const handleOnScroll = () => setScrollY(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleOnScroll)
    return () =>
      window.removeEventListener('scroll', handleOnScroll)
  }, [])

  return { scrollY }
}

export default useScrollListener
