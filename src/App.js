import './css/bootstrap.min.css';
import './css/core.css';
//import './css/font-icon.min.css';
import './css/index.css';
import './css/reset.css';
import HeaderSection from './Components/Header';
import HomeSection from './Components/HomeSection';
import FooterSection from './Components/Footer';


function App() {
    return (
        <div id="nt_wrapper" className="App">
          <HeaderSection />
          <HomeSection />
            <FooterSection />
    </div>
  );
}

export default App;
