import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Body />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
