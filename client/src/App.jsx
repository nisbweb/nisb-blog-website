import './App.css'

import {Routes, Route, BrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Try from './components/Try';
import WriteBlog from './pages/WriteBlog';
import ContributeBlogPage from './pages/ContributeBlogPage';
import WriterDetails from './pages/WriterDetails';
import { BlogContextProvider } from './BlogContext';
import TryPage from './pages/TryPage';
import BlogPage from './pages/BlogPage';

function App() {

  return (
    <div>
      <BlogContextProvider>

      <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/try' element={<TryPage/>}/>
            <Route path='/tech-blogs' element={<HomePage/>}/>
            <Route path='/placements-higherstudies' element={<HomePage/>}/>
            <Route path='/writeblog' element={<WriteBlog/>}/>
            <Route path={'/blog/:id'} element={<BlogPage/>}></Route>
            <Route path='/details' element={<WriterDetails/>}/>
            <Route path='/contribute' element={<ContributeBlogPage/>}/>
          </Routes>
        </BrowserRouter>
      </BlogContextProvider>
    </div>
  )
}

export default App
