export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 mb-2">
          Desenvolvido por Matheus Vieira.
        </p>
        <p className="text-gray-500 text-sm">
          © {currentYear} Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
