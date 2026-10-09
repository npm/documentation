import {PencilIcon} from '@primer/octicons-react'
import Link from './link'
import usePage from '../hooks/use-page'
import styles from './page-footer.module.css'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const format = d => `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`

const pluralize = (word, count) => `${word}${count === 1 ? '' : 's'}`

const Contributors = ({contributors = [], latestCommit}) => {
  if (!contributors.length) {
    return null
  }

  return (
    <>
      <div className={styles.Box}>
        <span className={styles.Text}>
          {contributors.length} {pluralize('contributor', contributors.length)}
        </span>
        {contributors.map(login => (
          <span key={login} className="Tooltip" data-tooltip={login}>
            <Link href={`https://github.com/${login}`} className={styles.Link}>
              <img className="Avatar" src={`https://github.com/${login}.png?size=40`} alt={login} />
            </Link>
          </span>
        ))}
      </div>
      {latestCommit ? (
        <span className={styles.Text_1}>
          Last edited by{' '}
          <Link href={`https://github.com/${latestCommit.login}`} showUnderline={true}>
            {latestCommit.login}
          </Link>{' '}
          on{' '}
          <Link href={latestCommit.url} showUnderline={true}>
            {format(new Date(latestCommit.date))}
          </Link>
        </span>
      ) : null}
    </>
  )
}

const PageFooter = () => {
  const {editUrl, latestCommit, contributors = []} = usePage().metadata

  if (!editUrl && !contributors.length) {
    return null
  }

  return (
    <div className={styles.Box_1}>
      <div className={styles.Box_2}>
        {editUrl ? (
          <Link href={editUrl}>
            <PencilIcon className={styles.Text} />
            Edit this page on GitHub
          </Link>
        ) : null}
        <Contributors contributors={contributors} latestCommit={latestCommit} />
      </div>
    </div>
  )
}

export default PageFooter
