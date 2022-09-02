import Link from 'next/link';

export function CustomLink({ as, href, ...otherProps }) {
  return <>
    <Link as={as} href={href}>
      <a className='text-primary hover:text-gradient-1 transition-colors no-underline' {...otherProps} />
    </Link>
  </>
}

export function CustomH2({as, ...otherProps}) {
  return <>
      <h2 className='text-primary' as={as} {...otherProps}></h2>
  </>
}

export function CustomBold({as, ...otherProps}) {
  return <>
      <b className='text-gradient-2' as={as} {...otherProps}></b>
  </>
}

export function CustomSpan({as, ...otherProps}) {
  return <>
      <span className='text-gradient-4' as={as} {...otherProps}></span>
  </>
}

export function CustomBlockquote({as, ...otherProps}) {
  return <>
      <blockquote className='border-l-gradient-2 opacity-60' as={as} {...otherProps}/>
  </>
}

export function CustomLi({as, ...otherProps}) {
  return <>
      <li className='marker:text-gradient-2' as={as} {...otherProps}></li>
  </>
}

export function CustomImage({as, ...otherProps}) {
  return <>
      <img className='rounded-lg shadow-lg' as={as} {...otherProps} />
  </>
}
