import Link from 'next/link';
import { DiverAvatar } from '../components/LottieAnimations/DiverAvatar';


export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12 grid grid-flow-row">
      <Link href="/">
        <a className='justify-self-center'>
          <DiverAvatar/>
        </a>
      </Link>

      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a className='font-thin'>{name}</a>
        </Link>
      </p>
    </header>
  );
}
