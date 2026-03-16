import { PackageIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function NoProductsYet({ title, subtitle }) {
  return (
    <div className='card bg-base-300'>
      <div className='card-body items-center text-center py-16'>
        <PackageIcon className='size-16 text-base-content/20' />
        <h3 className='card-title text-base-content/50'>{title}</h3>
        <p className='text-base-content/40 text-sm'>{subtitle}</p>
        <Link to={'/create'} className='btn btn-primary btn-sm mt-2'>
          Create Product
        </Link>
      </div>
    </div>
  );
}
