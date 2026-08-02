import ReactDOM from 'react-dom/client';
import List from './components/molecules/List.js';


function App() {
  return (
    <div>
      <h1>Rick & Morty</h1>
      <List />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
