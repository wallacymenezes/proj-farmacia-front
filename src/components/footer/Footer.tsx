
import { Link } from 'react-router-dom';

function Footer(){
    return(

        <footer className="bg-[#fed12f]">

            <div className="grid grid-cols-12 p-14 pb-10 justify-center">

                <div className="col-span-4">
                    <span className="text-gray-900 font-bold font-serif text-[28px] hover:text-gray-600">
                        <Link to={'/home'}>Farmacia</Link>
                    </span>
                    <p className='w-3/4 mt-3 text-gray-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam error nihil consequatur eaque. </p>
                </div>

                <div className="col-span-2">
                    <h3 className="text-gray-950 mb-4 font-semibold">Categorias</h3>
                    <ul className="text-gray-800">
                        <li className="mb-1 hover:text-white">
                            Anti-inflamatórios
                        </li>
                        <li className="mb-1 hover:text-white">
                            Antigripais
                        </li>
                        <li className="mb-1 hover:text-white">
                            Antibióticos
                        </li>
                        <li className="mb-1 hover:text-white">
                            Antialérgico
                        </li>
                    </ul>
                </div>

                <div className="col-span-2">
                    <h3 className="text-gray-950 mb-4 font-semibold">Páginas</h3>
                    <ul className="text-gray-800">
                        <li className="mb-1 hover:text-white">
                            <Link to={'/home'}>Principal</Link>
                        </li>
                        <li className="mb-1 hover:text-white">
                            <Link to={'/cadastrar'}>Cadastrar Categoria</Link>
                        </li>
                        <li className="mb-1 hover:text-white">
                            <Link to={'/categorias'}>Categorias</Link>
                        </li>
                    </ul>
                </div>

                <div className="col-span-4">
                    <h3 className="text-gray-950 mb-4 font-semibold ">Newsletter</h3>
                    <form action="" >
                        <input type="email" className="mr-4 rounded-md font-sans px-2 py-1 w-2/3 text-gray-800 h-8" placeholder='email@email.com' required/>
                        <button type="submit" className='text-white rounded-md bg-amber-600 hover:bg-amber-500 h-8 p-2 text-center leading-4'>Inscrever-se</button>
                    </form>
                </div>
            </div>

            <div className='flex justify-center pb-10'>
                <a href="#">
                    <img src="src/assets/redes-sociais/facebook.svg" alt="" className="w-10 h-10 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out"/>
                </a>
                <a href="#">
                    <img src="src/assets/redes-sociais/instagram.svg" alt="" className="w-10 h-10 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out"/>
                </a>
                <a href="#">
                    <img src="src/assets/redes-sociais/github.svg" alt="" className="w-10 h-10 mx-4 transition-transform transform hover:scale-125 duration-300 ease-in-out"/>
                </a>
            </div>

            <div className="flex items-center justify-center p-6">
                <p>© 2021 Farmacia Popular. All rights reserved.</p>
            </div>

        </footer>
    )
}

export default Footer;