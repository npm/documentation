import React from 'react'
import Slugger from 'github-slugger'

const SluggerContext = React.createContext(null)

export const Provider = props => <SluggerContext.Provider value={new Slugger()} {...props} />
export const useSlugger = () => React.useContext(SluggerContext)
