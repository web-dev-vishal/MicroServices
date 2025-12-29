import CreateSnippet from './components/CreateSnippet'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <main className='container max-w-4xl mx-auto p-4'>
      <Navbar/>
      <CreateSnippet/>
    </main>
  )
}

export default App