import './App.css';
import { NavBar } from './NavBar'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from './content/Home'
import Contact from './content/Contact'
import Resume from './content/Resume'
import Projects from './content/Projects'
import Blog from './content/Blog'
import Error from './content/Error'

function Layout() {
  return <div>
    <title>{document.title = "Alex Jensen"}</title>
    <div className="App">
      <NavBar />
    </div>
    <div id="greeting">
      <img id="avatar-image" alt="A 'metaverse' style avatar of my face" src="5fe5e0c4-8fc9-4b60-8afb-c94bab25226a.jpg"></img>
      Hello, I'm Alex! 👋</div>
    <div>
      {/* Page router renders here */}
      <Outlet ></Outlet>
    </div>
  </div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
