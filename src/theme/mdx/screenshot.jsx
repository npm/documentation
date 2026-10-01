import cx from '../util/cx'

const required = (prop, name) => {
  if (!prop) {
    throw new Error(`${name} prop is required`)
  }
  return prop
}

export const Image = ({src, alt, className, ...props}) => (
  <img src={required(src, 'src')} alt={required(alt, 'alt')} className={className} {...props} />
)

const Screenshot = ({className, ...props}) => <Image className={cx('screenshot', className)} {...props} />

export default Screenshot
