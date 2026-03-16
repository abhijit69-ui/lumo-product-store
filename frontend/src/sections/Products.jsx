import { PackageIcon } from 'lucide-react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import NoProductsYet from '../components/NoProductsYet';

export default function Products({ products }) {
  return (
    <section>
      <h2 className='text-xl font-bold flex items-center gap-2 mb-4'>
        <PackageIcon className='size-5 text-primary' />
        All Products
      </h2>
      {products.length === 0 ? (
        <NoProductsYet
          title='No products yet'
          subtitle='Be the first to share something!'
        />
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
