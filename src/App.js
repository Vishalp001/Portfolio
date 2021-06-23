import './App.css'
import Footer from './components/footer'
import Home from '../src/components/pages/home'
import Blogs from '../src/components/pages/blogs/blog'
import About from '../src/components/pages/about'
import Header from '../src/components/pages/header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Project from '../src/components/pages/project/projects'
import ScrollToTop from './components/Scrolltotop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Project} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
