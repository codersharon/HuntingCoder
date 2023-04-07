import Link from 'next/link';

export default function Navbar() {
	return <>
	<nav className='Navbar'>
		<h1 className='title'>Hunting Coders</h1>
		<ul style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
			<Link href='/'><li className='lists'>Home</li></Link>
			<Link href='/blog'><li className='lists'>Blog</li></Link>
			<Link href='/about'><li className='lists'>About</li></Link>
			<Link href='/contact'><li className='lists'>Contact</li></Link>
		</ul>
	</nav>
	</>
}