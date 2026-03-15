import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import CreatePage from './pages/CreatePage';
import EditProductPage from './pages/EditProductPage';
import useAuthReq from './hooks/useAuthReq';
import useUserSync from './hooks/useUserSync';

export default function App() {
  const { isClerkLoaded, isSignedIn } = useAuthReq();
  useUserSync();

  if (!isClerkLoaded) return null;

  return (
    <div className='min-h-screen'>
      <header>
        <Navbar />
      </header>
      <main className='max-w-5xl mx-auto px-4 py-8'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route
            path='/profile'
            element={isSignedIn ? <ProfilePage /> : <Navigate to={'/'} />}
          />
          <Route
            path='/create'
            element={isSignedIn ? <CreatePage /> : <Navigate to={'/'} />}
          />
          <Route
            path='/edit/:id'
            element={isSignedIn ? <EditProductPage /> : <Navigate to={'/'} />}
          />
        </Routes>
      </main>
    </div>
  );
}
