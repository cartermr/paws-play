import 'primereact/resources/themes/lara-light-cyan/theme.css'
import Link from 'next/link'
import { Image } from 'primereact/image'

export default function Home() {
  return (
   <main className='flex flex-column md:flex-row'>
    <div className='p-1 md:p-4 mb-3 md:mb-0'>
      <section>
        <span className='block text-center md:text-left text-6xl font-bold mb-3'>Paws & Plays</span>
        <p className='mt-0 mb-4 text-700 line-height-3'>
          Paws and Play is a pet sitting service to ease the anxiety on you and your pets while you’re away. Have fast paced lives with no time to walk your pet between activities? I offer walks. Mom and dad need some time off? I also babysit.
        </p>
        <span className='block text-3xl font-bold'>Services</span>
        <ul className='mt-2'>
          <li>
            <span className='font-bold'>Pet Sitting</span>
            <ul>
              <li>$10.00 per visit</li>
              <li>Pet sitting includes playtime, a walk, feeding, locking your pet back up if needed, and/or any special requests. I will also send you a text with an update on your pet.</li>
            </ul>
          </li>
          <li className='mt-1'>
            <span className='font-bold'>Dog Walking</span>
            <ul>
              <li>$5.00 per visit</li>
              <li>Dog walking can be provided separate from pet sitting.</li>
            </ul>
          </li>
          <li className='mt-1'>
            <span className='font-bold'>Babysitting</span>
            <ul>
              <li>$10.00 an hour for 1 - 2 children.</li>
            </ul>
          </li>
        </ul>
        <Link className='mr-3 p-button' href='/contact'>Contact Me</Link>
        <Link className='p-button' href='/'>About Me</Link>
      </section>
    </div>
    <div className='flex flex-column xl:flex-row align-items-center justify-content-around	pt-4 xl:pt-0'>
      <Image src='/images/cookie.jpg' className='mx-2' alt="Image of dog" height='400' />
      <Image src='/images/avery.jpg' alt="Image of dog" height='400' />
    </div>
   </main>
  );
}
