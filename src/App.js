import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Cards  from './Components/Cards/Cards';
function App() {
  return (
    <div className="App">
     <Header></Header>
     <Cards></Cards>
     <Footer></Footer>
    </div>
  );
}

export default App;
