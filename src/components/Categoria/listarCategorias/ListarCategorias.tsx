import { useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { listar } from '../../../services/Service';
import CardTemas from '../cardCategoria/CardCategoria';
import Categoria from '../../../models/Categoria';



function ListarCategorias() {
  const [categoria, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias);
    } catch (error) {
      alert("Mensagem: " + error)
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categoria.length]);

  return (
    <>
      {categoria.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <>
                <CardTemas key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;