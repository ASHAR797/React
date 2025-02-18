import './App.css'
import Cart from './components/Cart'
import Counter from './components/counter'
import Navber from './components/nav'
function App() {

  return (
    <>
    <Navber/>
    <h1 className='underline text-3xl text-center'> Hello World</h1>
    <Cart/>
    <Counter/>
    </>
  )
}

export default App
