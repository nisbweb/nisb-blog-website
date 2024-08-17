import './App.css'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Try from './components/Try';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/try' element={<Try/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
