import { ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

import EventosImage from "../app/Projetos/appIlumi.png"
import MyFinanceImage from "../app/Projetos/MyFinanceHub.png"
import LotoImage from "../app/Projetos/appLOTO.png"
import DashboardImage from "../app/Projetos/UXDashboardSensores.png"
import pssImage from "../app/Projetos/ProjetoPSS.png"
 
export function Portfolio() {
  const portfolioProjects = [
    {
      title: "Aplicativo para gestão de eventos",
      company: "Ilumi",
      description: "Aplicativo móvel para gestão de eventos, com foco na otimização do receptivo e controle de check-in para equipe de assessoria.",
      tech: ["React Native", "Node.js", "UX/UI design"],
      image: EventosImage,
      link: "#"
    },
    {
      title: "Aplicativo para teste de aquecedores",
      company: "Empresa parceira",
      description: "Aplicativo de automação para testes em aquecedores a gás, incluindo validação de rotinas e geração automática de laudos técnicos em PDF.",
      tech: ["React Native", "Node.js", "UX/UI design"],
      image: null,
      link: "#"
    },
    {
      title: "Plataforma de finanças pessoais",
      company: "Pessoal",
      description: "Plataforma web e mobile para gestão de finanças, incluindo cadastro de receitas e despesas, visualização de gráficos e relatórios.",
      tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
      image: MyFinanceImage,
      link: "#"
    },
    {
      title: "Plataforma para controle de manutenções industriais",
      company: "Empresa parceira",
      description: "Design de plataforma web, aplicativo e front-end web para gestão de manutenções industriais adotando o procedimento LOTO de segurança.",
      tech: ["React", "Next.js", "Node.js", "UX/UI design"],
      image: LotoImage,
      link: "#"
    },
    {
      title: "Dashboard - Monitoramento de sensores de lubrificação",
      company: "Empresa parceira",
      description: "Design de interface e desenvolvimento Front-end para dashboard de monitoramento em tempo real de sensores de lubrificação.",
      tech: ["Figma", "Next.js", "UX/UI design"],
      image: DashboardImage,
      link: "#"
    },
    {
      title: "Game de carro retrô",
      company: "SENAI Armando de Arruda Pereira",
      description: "Jogo desenvolvido para a 1ª SENAI Open Game, feira de exposição de projetos do curso de Análise e Desenvolvimento de Sistemas (ADS).",
      tech: ["Java", "Spring Boot", "Design"],
      image: "/videos/VideoJogoRetro.mp4",
      isVideo: true,
      link: "#"
    },
    {
      title: "Projeto PSS",
      company: "SESI-SP",
      description: "Protótipo de dispositivo capaz de identificar solos em processo de erosão e automaticamente distribuir macronutrientes.",
      tech: ["Arduino", "C++", "Design"],
      image: pssImage,
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Portfólio de <span className="text-orange-500">Projetos</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Projetos desenvolvidos ao longo da minha carreira profissional, 
          aplicando as melhores práticas e tecnologias modernas
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-orange-500 transition-all group"
            >
              {/* Imagem ou Vídeo do Projeto */}
              <div className="relative h-48 bg-gray-900/50 overflow-hidden">
                {project.image ? (
                  project.isVideo ? (
                    <video 
                      src={project.image as string}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <Code2 className="text-orange-500/30 group-hover:text-orange-500/50 transition-colors" size={64} />
                  </div>
                )}
                
                {/* Badge da Empresa */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                    {project.company}
                  </span>
                </div>
              </div>
              
              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold"
                >
                  Ver Projeto
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
