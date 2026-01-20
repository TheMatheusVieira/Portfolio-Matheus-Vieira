import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h2 className="text-4xl font-bold mb-4 text-orange-500">Página Não Encontrada</h2>
      <p className="text-gray-400 mb-8 text-lg">Desculpe, a página que você está procurando não existe.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
      >
        Voltar para o Início
      </Link>
    </div>
  )
}
