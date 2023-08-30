import { useState, useEffect } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    clientWidth: 0,
    width: 0,
    clientHeight: 0,
    height: 0
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        clientWidth: document.documentElement.clientWidth,
        clientHeight: document.documentElement.clientHeight,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
export default useWindowSize
