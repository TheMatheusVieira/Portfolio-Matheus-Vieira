import Image from "next/image";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left order-2 md:order-1">
          <div className="mb-6">
            <span className="text-orange-500 text-lg font-mono">Olá, eu sou</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Matheus <span className="text-orange-500">Vieira</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-400 mb-8 font-light">
            Front and Mobile Developer • UX/UI Designer • Video Editor
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto md:mx-0 mb-12 text-lg leading-relaxed">
            Desenvolvedor apaixonado por criar experiências envolventes que unem código, design e criatividade.
            <br/><br/>
            Transformo ideias em interfaces interativas com foco em performance e usabilidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contato"
              className="px-8 py-4 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-all hover:scale-105 shadow-lg shadow-orange-500/25"
            >
              Entre em Contato
            </a>
            <a
              href="#projetos"
              className="px-8 py-4 border border-gray-700 rounded-full font-medium hover:border-orange-500 hover:text-orange-500 transition-all hover:scale-105"
            >
              Ver Projetos
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/profile-new.jpg"
              alt="Matheus Vieira"
              fill
              className="rounded-2xl object-cover shadow-2xl shadow-orange-500/20 rotate-3 hover:rotate-0 transition-all duration-500"
              priority
            />
            <div className="absolute -inset-4 border-2 border-orange-500/20 rounded-2xl -z-10 rotate-6 group-hover:rotate-3 transition-all duration-500" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="text-gray-500" size={24} />
      </div>
    </section>
  );
}
