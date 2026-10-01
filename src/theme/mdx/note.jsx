const Note = ({variant = 'info', children, ...props}) => (
  <div className="note" data-variant={variant} {...props}>
    {children}
  </div>
)

export default Note
