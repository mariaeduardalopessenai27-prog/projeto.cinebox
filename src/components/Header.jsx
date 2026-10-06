function Header() {
  return (
    <header className="bg-slate-950 text-white px-8 py-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-white">Cine</span><span className="text-purple-400">Box</span>
          </h1>

          <p className="text-slate-400 text-sm mt-1">
            Seu catálogo de filmes
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <a href="#" className="text-purple-400 font-semibold">
            Início
          </a>

          <a href="#" className="text-slate-300 hover:text-white">
            Filmes
          </a>

          <a href="#" className="text-slate-300 hover:text-white">
            Favoritos
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
