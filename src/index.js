import ReactDOM from 'react-dom/client';
import List from './components/organisms/List.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function App() {
  return (
    <div className="container">
      <h1>Rick & Morty</h1>
      <List />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
