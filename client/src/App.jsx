import './App.css'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
