/** Joins class names, skipping falsy values. */
const cx = (...names) => names.filter(Boolean).join(' ')

export default cx
