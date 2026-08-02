import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
      <h1>Hello, Rick & Morty!</h1>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
