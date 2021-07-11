import './App.css';
import Main from './components/Main';
import ProvideAuth from './components/ProvideAuth';

function App() {
  return (
    <div className="App">
      <h1>Hello From React Router DOM</h1>
      {/* <Main /> */}
      <ProvideAuth />
    </div>
  );
}

export default App;
