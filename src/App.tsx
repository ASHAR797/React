import './App.css'
import UserAccount from './components/UserAccount'
import Form from './components/Form'
function App() {

  return (
    <>
    <h1 className='underline text-3xl text-center'> Hello World</h1>
    <UserAccount UserLogin={false} />
    <Form name='Mustafa' email='ha5219541@gmail.com' password={33043939} contact={3182393253}    />
    </>
  )
}

export default App
