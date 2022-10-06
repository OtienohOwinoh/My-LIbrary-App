import './App.css';
import { Route, Routes} from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import ContactUs from './components/ContactUs';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path ="/" element={<BookList />} />
        <Route path ="/books/:id" element={<BookDetails />} />
        <Route path ="/favorites" element={<Favorites />} />
        <Route path ="/contactus" element={<ContactUs />} />
        <Route path ="/blog" element={<Blog />} />

        
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
