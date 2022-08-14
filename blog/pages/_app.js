import React from 'react'
import '../node_modules/antd/dist/antd.css'
import 'normalize.css/normalize.css'
import '../public/styles/global.css'
import '../public/styles/detailed.css'
import '../public/styles/components/navbar.css'
import { formatCountdown } from 'antd/lib/statistic/utils'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
