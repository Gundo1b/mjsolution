import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import BusinessSolutions from './pages/BusinessSolutions';
import ICTServices from './pages/ICTServices';
import EngineeringConstruction from './pages/EngineeringConstruction';
import MJAcademy from './pages/MJAcademy';
import SecurityCleaning from './pages/SecurityCleaning';
import TenderingSupport from './pages/TenderingSupport';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business-solutions" element={<BusinessSolutions />} />
          <Route path="/ict-services" element={<ICTServices />} />
          <Route path="/engineering-construction" element={<EngineeringConstruction />} />
          <Route path="/mj-academy" element={<MJAcademy />} />
          <Route path="/security-cleaning" element={<SecurityCleaning />} />
          <Route path="/tendering-support" element={<TenderingSupport />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
