import React from 'react'
import 'normalize.css/normalize.css'
import '../public/styles/global.css'
import '../public/styles/detailed.css'
// import '../public/styles/index.css'
import '../public/styles/components/header.css'
import '../public/styles/components/author.css'
import '../public/styles/components/advert.css'
import '../public/styles/components/footer.css'
import { formatCountdown } from 'antd/lib/statistic/utils'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
