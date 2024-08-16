import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { listar, deletar } from '../../../services/Service'
import Categoria from '../../../models/Categoria'


function DeletarCategoria() {
    const [categoria, setCategorias] = useState<Categoria>({} as Categoria);

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategorias)
        } catch (error) {
            alert("Mensagem: " + error)
          }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)

            alert("Deletado com sucesso")

        } catch (error) {
            alert("Mensagem: " + error)
        }

        retornar()
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-[#fed12f] text-white font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-2xl bg-slate-200 h-full'>{categoria.nome}</p>
                <p className='p-8 text-2xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria