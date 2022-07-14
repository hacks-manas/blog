import Link from 'next/link';
/*  */
export default function Layout({ children }) {
    return (
        <div className='flex flex-col min-h-screen'>
            {/* Tailwind calsses for bg color, margin and padding */}
            <header className='bg-teal-300 mb-8 py-4'>
                {/* Container class, center container , use flexbox, justified to center*/}
                <div className='container mx-auto flex justify-center'>
                    <Link href='/'>
                        <a><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="Black" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg></a>
                    </Link>
                    <span className='mx-auto'> Welcome to Manas-Hacks 👨🏻‍💻</span>{' '}
                </div>
            </header>
            <main className='container mx-auto flex-1'>{children}</main>
            <footer className='bg-teal-300 mt-8 py-4'>
                <div className='container mx-auto flex justify-center'>
                    Made with <svg class="w-6 h-6" fill="red" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> by Manas
                </div>
            </footer>
        </div>
    );
}