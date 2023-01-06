import { useEffect, useRef } from 'react'

export default function useHotKeyPressed(key, action) {
  const actionRef = useRef(action)

  useEffect(() => {
    actionRef.current = action
  })

  useEffect(() => {
    function onKeyDown(event) {
      if (event.code === key) {
        actionRef.current()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => document.removeEventListener('keydown', onKeyDown)
  }, [key])

  return null
}
