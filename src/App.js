import './App.css';
import { MovieProvider } from './components/MovieContext';
import Search from './components/Search';
function App() {
  return (
    <MovieProvider>
      <Search />

    </MovieProvider>
    

  );
}

export default App;
