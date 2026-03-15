import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import CreatePage from './pages/CreatePage';
import EditProductPage from './pages/EditProductPage';

export default function App() {
  return (
    <div className='min-h-screen'>
      <header>
        <Navbar />
      </header>
      <main className='max-w-5xl mx-auto px-4 py-8'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/create' element={<CreatePage />} />
          <Route path='/edit/:id' element={<EditProductPage />} />
        </Routes>
      </main>
    </div>
  );
}
