import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './Layout/Layout.jsx'
import Home from './Pages/Home/Home.jsx'
import ListElements from './Pages/Elements/ListElements.jsx'
import ElementDetail from './Pages/Elements/ElementDetail.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/items'>
              <Route index element={<ListElements />} />
              <Route path=':id' element={<ElementDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
