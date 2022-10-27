import logo from './logo.svg';
import './App.css';
import Countries from './Components/Countries/Countries';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Countries></Countries>
        <Footer></Footer>
    </div>
  );
}

export default App;
