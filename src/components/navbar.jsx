import { useLocation } from 'react-router-dom'

export function Navbar() {
    const location = useLocation()

    return (
        <header className="fixed w-screen z-[99999] ">
            <nav>
                <ul className="flex items-center justify-center gap-16 h-16 bg-midnight font-medium font-sans">
                    <li
                        className={
                            location.hash === '#home' || location.hash === ''
                                ? 'text-zinc-50'
                                : 'text-zinc-400 hover:text-zinc-50'
                        }
                    >
                        <a href="#home"><span className='text-lilac'>#</span>início</a>
                    </li>
                    <li
                        className={
                            location.hash === '#about'
                                ? 'text-zinc-50'
                                : 'text-zinc-400 hover:text-zinc-50'
                        }
                    >
                        <a href="#about"><span className='text-lilac'>#</span>sobre</a>
                    </li>
                    <li
                        className={
                            location.hash === '#skills'
                                ? 'text-zinc-50'
                                : 'text-zinc-400 hover:text-zinc-50'
                        }
                    >
                        <a href="#skills"><span className='text-lilac'>#</span>habilidades</a>
                    </li>
                    <li
                        className={
                            location.hash === '#projects'
                                ? 'text-zinc-50'
                                : 'text-zinc-400 hover:text-zinc-50'
                        }
                    >
                        <a href="#projects"><span className='text-lilac'>#</span>projetos</a>
                    </li>
                    <li
                        className={
                            location.hash === '#contact'
                                ? 'text-zinc-50'
                                : 'text-zinc-400 hover:text-zinc-50'
                        }
                    >
                        <a href="#contact"><span className='text-lilac'>#</span>contatos</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
