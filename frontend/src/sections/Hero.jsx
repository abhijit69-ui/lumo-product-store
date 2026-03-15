import { Link } from 'react-router';
import { SparklesIcon } from 'lucide-react';
import { useAuth, SignInButton } from '@clerk/react';

export default function Hero() {
  const { isSignedIn } = useAuth();

  const button = (
    <button className='btn btn-primary'>
      <SparklesIcon className='size-4' />
      Start Selling
    </button>
  );

  return (
    <section className='hero bg-linear-to-br from-base-300 via-base-200 to-base-300 rounded-box overflow-hidden'>
      <div className='hero-content flex-col lg:flex-row-reverse gap-10 py-10'>
        {/* hero image */}
        <div className='relative'>
          <div className='absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110' />
          <img
            src='/assets/hero-shop.png'
            alt='girl with lots of shopping bags'
            className='relative h-66 lg:h-74 rounded-2xl'
          />
        </div>

        {/* hero text */}
        <div className='text-center lg:text-left'>
          <h1 className='text-4xl lg:text-5xl font-bold leading-tight'>
            Share Your <span className='text-primary'>Products</span>
          </h1>

          <p className='py-4 text-base-content/60'>
            Upload, discover, and connect with sellers.
          </p>

          {isSignedIn ? (
            <Link to='/create'>{button}</Link>
          ) : (
            <SignInButton mode='modal' forceRedirectUrl='/create'>
              {button}
            </SignInButton>
          )}
        </div>
      </div>
    </section>
  );
}
