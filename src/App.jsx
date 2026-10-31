
import Body from "./Body";
import Login from "./Login";
import Footer from "./Footer";
import Profile from "./Profile";
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>

    <BrowserRouter basename="/">
    <Routes>

      <Route path="/" element={<Body/>}>
      <Route path="login" element={<Login/>} />
      <Route path="footer" element={<Footer/>} />
      <Route path="profile" element={<Profile/>} />
      </Route>



     


    </Routes>
    
    </BrowserRouter>


      
    
    </>
  );
}

export default App;

