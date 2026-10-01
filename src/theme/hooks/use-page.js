import {createContext} from 'preact'
import {useContext} from 'preact/hooks'

/**
 * The page being rendered: its URL (`path`) and metadata. Provided by the
 * layout, so only components rendered on the server inside it can read it;
 * components hydrated on the client receive what they need as props.
 */
const Page = createContext({path: '/', metadata: {}})

export const PageProvider = Page.Provider

const usePage = () => useContext(Page)

export default usePage
