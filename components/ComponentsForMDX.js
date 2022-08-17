import Link from 'next/link';

export function CustomLink({ as, href, ...otherProps }) {
  return <>
    <Link as={as} href={href}>
      <a className='text-primary hover:text-gradient-4 transition-colors' {...otherProps} />
    </Link>
  </>
}

export function CustomH2({as, ...otherProps}) {
  return <>
      <h2 className='text-primary' as={as} {...otherProps}></h2>
  </>
}

export function CustomH3({as, ...otherProps}) {
  return <>
      <h3 className='text-primary' as={as} {...otherProps}></h3>
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
