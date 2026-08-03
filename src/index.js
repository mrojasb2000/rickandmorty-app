import ReactDOM from 'react-dom/client';
import List from './components/organisms/List.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function App() {
  return (
    <div className="container">
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>Rick & Morty</h1>
      </nav>
      <List />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
