import React from 'react'

const Page = React.createContext(null)
export const PageProvider = Page.Provider
const usePage = () => React.useContext(Page)
export default usePage
