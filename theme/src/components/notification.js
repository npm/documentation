'use strict'
const React = require('react')
const PropTypes = require('prop-types')
const Link = require('@primer/components')
// todofix styles
// const styles = require('./notifications.css')

const closeNotification = id => ({ type: 'NOTIFICATION_CLOSE', id })

class Notification extends React.PureComponent {
  componentDidMount () {
    const { duration, dispatch, id } = this.props

    if (!duration) return

    this.timeout = setTimeout(() => {
      dispatch(closeNotification(id))
    }, duration)
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  dispatchAction (ev) {
    const { link, dispatch } = this.props
    ev.preventDefault()
    dispatch(link.action)
  }

  render () {
    const { dispatch, message, level, id, link } = this.props
    // todo
    // const levelClass = styles[level]

    const HrefLink = () => {
      // todo redo links to primer format
      return <Link>{link.text}{/* <a href={link.href} target='_blank' rel='noopener noreferrer'>{link.text}</a> */}</Link>
    }

    const ActionLink = () => {
      return <a href='#' onClick={ev => this.dispatchAction(ev)}>
        {link.text}
      </a>
    }

    const linkElem = !link
      ? null
      : link.href
        ? HrefLink()
        : ActionLink()

    return <div
    // todo
      // className={`${styles.notification} ${levelClass}`}
      onKeyDown={() => dispatch(closeNotification(id))}
      onClick={() => dispatch(closeNotification(id))}
      style={{position: 'absolute', display: 'block'}}>
      <div style={{ display: 'flex' }}>
        <p className='ma0'>
          {message}{linkElem ? ' ' : ''}
        </p>
        {linkElem}
      </div>
      {/* todo */}
      <p tabIndex={0} aria-label='Close notification' role='button' /* className={styles.close} */>×</p>
    </div>
  }

  static get propTypes () {
    return {
      message: PropTypes.string.isRequired,
      level: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
      link: PropTypes.shape({
        href: PropTypes.string,
        action: PropTypes.object,
        text: PropTypes.string.isRequired
      }),
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
      ]).isRequired
    }
  }
}

module.exports = Notification
