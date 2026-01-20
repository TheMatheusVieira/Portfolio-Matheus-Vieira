import { Code2, Smartphone, Video, Calendar } from "lucide-react";

export function About() {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Front End",
      description: "Criação de interfaces modernas e responsivas com React e TypeScript"
    },
    {
      icon: Smartphone,
      title: "Desenvolvimento Mobile",
      description: "Desenvolvimento de aplicativos mobile com foco em UX/UI e usabilidade"
    },
    {
      icon: Video,
      title: "Edição de Vídeos",
      description: "Produção e edição de conteúdo audiovisual"
    },
    {
      icon: Calendar,
      title: "Assessoria de Eventos",
      description: "Suporte e divulgação de eventos"
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span>Apresentação</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sou um profissional com formação técnica em Eletroeletrônica, 
              graduação em Análise e Desenvolvimento de Sistemas (ADS) e atualmente cursando 
              pós-graduação em engenharia de front-end.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Com quase 2 anos de experiência no SENAI-SP Distrito Tecnológico e experiência 
              anterior como Orientador de Educação Digital no SESI, desenvolvo soluções 
              tecnológicas e inovadoras.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Com o conhecimento técnico e criatividade entrego projetos que 
              vão além de código, focando sempre na melhor experiência do usuário.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Atualmente trabalho em projetos pessoais como um <span className="text-orange-500 font-semibold">jogo mobile retrô 
              com tema de carro</span> e com parceiros estou estruturando minha própria <span className="text-orange-500 font-semibold">empresa 
              de divulgação de eventos</span>, unindo a tecnologia ao empreendedorismo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-colors"
              >
                <service.icon className="text-orange-500 mb-3" size={32} />
                <h3 className="text-white text-sm font-semibold mb-2">{service.title}</h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}