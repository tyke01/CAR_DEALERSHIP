import './App.css'
import {Home} from "./pages"
import {Navbar} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
   <main>
    <BrowserRouter>
      <div>
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </BrowserRouter>
   </main>
  )
}

export default App

