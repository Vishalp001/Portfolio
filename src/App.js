import './App.css'
import Footer from './components/footer'
import Home from '../src/components/pages/home'
import Blogs from '../src/components/pages/blogs/blog'
import About from '../src/components/pages/about'
import Header from '../src/components/pages/header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Blog1 from '../src/components/pages/blogs/blog1'
import Blog2 from '../src/components/pages/blogs/blog2'
import Blog3 from '../src/components/pages/blogs/blog3'
import Blog4 from '../src/components/pages/blogs/blog4'
import Blog5 from '../src/components/pages/blogs/blog5'
import Blog6 from '../src/components/pages/blogs/blog6'
import Project from '../src/components/pages/project/projects'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/about' component={About} />
          <Route path='/blog1' component={Blog1} />
          <Route path='/blog2' component={Blog2} />
          <Route path='/blog3' component={Blog3} />
          <Route path='/blog4' component={Blog4} />
          <Route path='/blog5' component={Blog5} />
          <Route path='/blog6' component={Blog6} />
          <Route path='/projects' component={Project} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
