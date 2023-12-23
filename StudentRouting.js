import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'

export default function StudentRouting() {
    return (
        <div>
            <h2>Student Routing</h2>
            <BrowserRouter>
                <ul>
                    <li><Link to="./Home">Home</Link></li>
                    {/* here we not using <a href> to avoid loading..  (check with anchor tag) */}
                    <li><Link to="./About">About</Link></li>
                    <li><Link to="./Services">Services</Link></li>
                    <li><Link to="./Contact">Contact</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/Home" element={<Home />}> </Route>
                    {/* usinng exact word will reach at the exact page*/}
                    <Route path="/About" element={<About />}> </Route>
                    <Route path="/Services" element={<Services />}> </Route>
                    <Route path="/Contact" element={<Contact />}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
