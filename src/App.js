import './App.css';
import { NavBar } from './NavBar'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from './content/Home'
import Contact from './content/Contact'
import Resume from './content/Resume'
import Projects from './content/Projects'


function Layout() {
  return <div>
    <h1>
      <div className="App">
        <NavBar />
      </div>
    </h1>
    <div>
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
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
