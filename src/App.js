import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import About from "./About";
import Search from './Search';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return ( 
        <div className = "app" >

         <Router>
             
     <Header/>
    
            <Routes>

                <Route path="/" element={ <Home/>} />
                 
                <Route path="/search" element={<Search />} />

                <Route path="/about" element={<About />} />
            
            </Routes>
  
         </Router>

     <Footer />

        </div>
    );
}

export default App;