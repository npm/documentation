import {useEffect} from 'preact/hooks'

const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')

const getFocusable = container => [...container.querySelectorAll(FOCUSABLE)].filter(el => !el.closest('[hidden]'))

/**
 * Keeps keyboard focus inside `ref` while `active`: Tab wraps around, Escape
 * calls `onEscape`, and focus returns to where it was when deactivated.
 *
 * @param {{ current: HTMLElement | null }} ref
 * @param {boolean} active
 * @param {() => void} [onEscape]
 */
export default function useFocusTrap(ref, active, onEscape) {
  useEffect(() => {
    if (!active || !ref.current) {
      return
    }

    const container = ref.current
    const previous = document.activeElement

    if (!container.contains(document.activeElement)) {
      getFocusable(container)[0]?.focus()
    }

    const onKeyDown = event => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onEscape?.()
        return
      }

      if (event.key !== 'Tab') {
        return
      }

      const focusable = getFocusable(container)
      if (!focusable.length) {
        event.preventDefault()
        return
      }

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (previous instanceof HTMLElement && document.contains(previous)) {
        previous.focus()
      }
    }
  }, [ref, active, onEscape])
}
