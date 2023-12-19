import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Layout from './components/Layout';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/products" element={<Products/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="*" element={<PageNotFound/>}/>
                    </Route>
                </Routes>
                <Header/>
                <Outlet/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;