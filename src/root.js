import React from 'react'
import {MDXProvider} from '@mdx-js/react'
import * as components from './mdx'

const RootElement = ({element}) => <MDXProvider components={components}>{element}</MDXProvider>

export default RootElement
