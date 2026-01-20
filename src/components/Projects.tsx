import { Gamepad2, Megaphone, Code2, Rocket } from "lucide-react";

export function Projects() {
  const currentProjects = [
    {
      title: "Jogo Mobile - Retro Racing",
      description: "Desenvolvimento de um jogo mobile retrô com temática de carro. Focado em gameplay envolvente e estética nostálgica dos anos 80/90.",
      icon: Gamepad2,
      status: "Em Desenvolvimento",
      tags: ["Mobile", "Game Dev", "React Native", "Design"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Empresa de Divulgação de Eventos",
      description: "Criação e estruturação de uma empresa focada em divulgação e marketing de eventos, combinando tecnologia e estratégias de comunicação.",
      icon: Megaphone,
      status: "Em Andamento",
      tags: ["Empreendedorismo", "Marketing", "Eventos", "Digital"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const skills = [
    { icon: Code2, label: "Desenvolvimento" },
    { icon: Rocket, label: "Inovação" }
  ];

  return (
    <section id="projetos" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Projetos <span className="text-orange-500">atuais</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Além do trabalho no SENAI-SP, estou desenvolvendo projetos pessoais 
          que combinam tecnologia e muita criatividade
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-all group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <project.icon className="text-white" size={32} />
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <span className="text-xs px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 border border-orange-500/30">
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
