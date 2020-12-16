import './App.css';
import Footer from "./components/footer"
import Home from "../src/components/pages/home"
import Blogs from "../src/components/pages/blog"
import About from "../src/components/pages/about"
import Header from "../src/components/pages/header"
import {BrowserRouter, Switch, Route } from "react-router-dom";
import Blog1 from "../src/components/pages/blog1"
import Blog2 from "../src/components/pages/blog2"
import Blog3 from "../src/components/pages/blog3"
import Blog4 from "../src/components/pages/blog4"
import Blog5 from "../src/components/pages/blog5"
import Blog6 from "../src/components/pages/blog6"
import Project from "../src/components/pages/projects"

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/blogs" component={Blogs} />
         <Route exact path="/about" component={About} />
         <Route exact path="/blog1" component={Blog1} />
         <Route exact path="/blog2" component={Blog2} />
         <Route exact path="/blog3" component={Blog3} />
         <Route exact path="/blog4" component={Blog4} />
         <Route exact path="/blog5" component={Blog5} />
         <Route exact path="/blog6" component={Blog6} />
         <Route exact path="/projects" component={Project} />
        
       </Switch>
       <Footer />
     </div>
    </BrowserRouter>
  );
}

export default App;
