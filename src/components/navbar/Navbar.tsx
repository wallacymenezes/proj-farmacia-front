import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className='w-full bg-[#fed12f] text-gray-900 flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase'>Farmacia</Link>

            <div className='flex gap-6'>
                <Link to='/' className='hover:underline'>Categorias</Link>
                <Link to='/' className='hover:underline'>Cadastrar Categoria</Link>
                <Link to='/' className='scale-95 transition-transform transform hover:scale-125 duration-300 ease-in-out'>
                    <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="9" cy="21" r="1" />  <circle cx="20" cy="21" r="1" />  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
