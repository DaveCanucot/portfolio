import './App.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import Hero from './Componets/Hero'
// import About from './Componets/About';
import Home from './Pages/index'
import ReadMore from './Pages/ReadMore';
// import Services from './Componets/Services'
// import Experience from './Componets/Experience'
// import Works from './Componets/Works'


function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
