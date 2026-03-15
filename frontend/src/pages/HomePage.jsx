import { useProducts } from '../hooks/useProducts';
import LoadingSpinner from '../components/LoadingSpinner';
import Hero from '../sections/Hero';
import Products from '../sections/Products';

export default function HomePage() {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) return <LoadingSpinner />;

  if (error) {
    return (
      <div role='alert' className='alert alert-error'>
        <span>Something went wrong. Please refresh the page.</span>
      </div>
    );
  }

  return (
    <section className='space-y-10'>
      {/* HERO */}
      <Hero />
      {/* Products */}
      <Products products={products} />
    </section>
  );
}
