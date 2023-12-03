import Body from './Body'
import Footer from './Footer'
import Header from './Header'
import { inject } from '@vercel/analytics'

function App() {
  
  inject()
  
  return (
    <div className='wrapper'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App
