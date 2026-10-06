function MovieCard({ titulo, descricao, categoria, ano, cor, imagem }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">

      <div className={`${cor} h-2`}></div>

      <img
        src={imagem}
        alt={titulo}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
          {categoria}
        </span>

        <h2 className="text-xl font-bold text-slate-900 mt-3">
          {titulo}
        </h2>

        <p className="text-slate-600 text-sm leading-6 mt-3">
          {descricao}
        </p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-sm text-slate-500">
            {ano}
          </span>

          <button className="text-sm font-semibold text-purple-600 hover:text-purple-800">
            Ver detalhes
          </button>
        </div>
      </div>

    </article>
  )
}

export default MovieCard