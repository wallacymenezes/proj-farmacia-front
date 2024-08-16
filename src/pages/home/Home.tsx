import homeImg from '../../assets/img-home/home-img.png'


function Home(){

    return(
        <div>
            <div className="flex justify-center">
                <div className='container grid grid-cols-2'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
                        <p className='text-xl'>Na Farmacia Popular você encontra tudo que precisa no melhor preço</p>
                    </div>

                    <div className="flex justify-center">
                        <img src={homeImg} alt="" className='w-2/3' />
                
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home