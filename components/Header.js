import Link from 'next/link';
import { DiverAvatar } from '../components/LottieAnimations/DiverAvatar';
import { InstagramLogo, LinkedinLogo, TwitterLogo, GithubLogo } from 'phosphor-react'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12 grid grid-flow-row">
      <Link href="/posts" legacyBehavior>
        <a className='justify-self-center'>
          <DiverAvatar/>
        </a>
      </Link>

      <p className="text-2xl dark:text-white text-center">
        <Link href="/" legacyBehavior>
          <a className='font-thin'>{name}</a>
        </Link>
      </p>
      
      <ul className='flex justify-between py-10 mx-8 text-3xl'>
        <li>
          <Link href='https://twitter.com/SanCruz_Dev/' legacyBehavior>
            <a target='_blank' title='Twitter'>
              <div className='group rounded-lg p-2 opacity-70 hover:bg-[#00acee] hover:opacity-100 hover:text-[#fff] transition-colors'>
                <TwitterLogo className='delay-200 group-hover:scale-125 transition-transform'/>
              </div>
            </a>
          </Link>
        </li>
        <li> 
          <Link href='https://www.linkedin.com/in/sanmir-cruz/' legacyBehavior>
            <a target='_blank' title='LinkedIn'>
              <div className='group rounded-lg p-2 opacity-70 hover:bg-[#0e76a8] hover:opacity-100 hover:text-[#fff] transition-colors'>
                <LinkedinLogo className='delay-200 group-hover:scale-125 transition-transform'/>
              </div>
            </a>
          </Link>
        </li>
        <li> 
          <Link href='https://github.com/Sancruz-dev/' legacyBehavior>
            <a target='_blank' title='Github'>
              <div className='group rounded-lg p-2 opacity-70 hover:bg-[#181616] hover:opacity-100 hover:text-[#fff] transition-colors'>
                <GithubLogo className='delay-200 group-hover:scale-125 transition-transform'/>
              </div>
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://www.instagram.com/sancruz_dev/' legacyBehavior>
            <a target='_blank' title='Instagram'>
              <div className='rounded-lg p-2 opacity-70 hover:bg-[#dd2a7b] hover:opacity-100 hover:text-[#fff] transition-colors group' >
                <InstagramLogo className='delay-200 group-hover:scale-125 transition-transform'/>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
