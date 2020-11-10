import './App.css';

// IMPORTAMOS REACT ROUTER DECONSTRUIDO CON SUS PROPIEDADES
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
// Browser: funge como nuestro router
// Switch: se comporta como conditional rendering pero va a decir qué componente de UI nos va a mostrar
// Route: nueva ruta
// Link: ni puta idea

import PostsList from './pages/PostsList'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page1">Pagina 1</Link>
            </li>
            <li>
              <Link to="/page2">Pagina 2</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/page1">
          <h1>Contenido Pagina 1</h1>
        </Route>
        <Route path="/page2">
          <h1>Contenido Pagina 2</h1>
        </Route>
        <Route path="/posts">
          <PostsList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
