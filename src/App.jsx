import Header from './components/Header'
import MovieCard from './components/MovieCard'
import Footer from './components/Footer'

function App() {
  const filmes = [
    {
      id: 1,
      titulo: "Para todos os Garotos que Já Amei",
      descricao: "Lara Jean vê sua vida mudar quando suas cartas de amor secretas são enviadas para seus antigos crushes.",
      categoria: "Romance",
      ano: 2018,
      cor: "bg-purple-500",
      imagem: "https://i.pinimg.com/1200x/76/6f/d8/766fd875d9301f288c31c8ece6dfa2e8.jpg"
    },
    {
      id: 2,
      titulo: "Rapunzel",
      descricao: "Uma jovem de longos cabelos mágicos embarca em uma aventura para descobrir o mundo.",
      categoria: "Animação",
      ano: 2010,
      cor: "bg-pink-500",
      imagem: "https://i.pinimg.com/736x/eb/e2/9f/ebe29f22a9007e711f61b507287e0033.jpg"
    },
    {
      id: 3,
      titulo: "Barbie",
      descricao: "Barbie deixa Barbieland e conhece o mundo real em uma aventura cheia de descobertas.",
      categoria: "Comédia",
      ano: 2023,
      cor: "bg-pink-400",
      imagem: "https://www.europanet.com.br/upload/id_produto/107___/107344g.jpg"
    },
    {
      id: 4,
      titulo: "Cidade de Deus",
      descricao: "A história de jovens que crescem na Cidade de Deus, no Rio de Janeiro, seguindo caminhos diferentes.",
      categoria: "Drama",
      ano: 2002,
      cor: "bg-cyan-600",
      imagem: "https://m.media-amazon.com/images/I/61gnWDl7S4L._AC_UF1000,1000_QL80_.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          Filmes em destaque
        </h2>

        <p className="text-slate-600 mb-8">
          Confira alguns filmes selecionados para você.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filmes.map((filme) => (
            <MovieCard
              key={filme.id}
              titulo={filme.titulo}
              descricao={filme.descricao}
              categoria={filme.categoria}
              ano={filme.ano}
              cor={filme.cor}
              imagem={filme.imagem}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App