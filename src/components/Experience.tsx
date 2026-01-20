import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "SENAI-SP",
      location: "Distrito Tecnológico",
      role: "Desenvolvedor Front End",
      period: "Abril 2024 - Presente",
      duration: "Quase 2 anos",
      description: [
        "Desenvolvimento de aplicações",
        "Design de interfaces e experiência do usuário",
        "Apresentação de projetos",
        "Comunicação com clientes"
      ]
    },
    {
      company: "SESI",
      location: "Mauá - São Paulo",
      role: "Orientador de Educação Digital",
      period: "Março 2023",
      duration: "1 ano e 2 meses",
      description: [
        "Orientação de alunos em projetos de tecnologia",
        "Desenvolvimento de conteúdo educacional digital",
        "Implementação de ferramentas tecnológicas",
        "Capacitação de educadores"
      ]
    },
    {
      company: "SESI",
      location: "Mauá - São Paulo",
      role: "Aprendiz - Técnico em Eletroeletrônica",
      period: "Fevereiro 2021",
      duration: "1 ano e 11 meses",
      description: [
        "Desenvolvimento de projeto de inovação",
        "Projeto criado: PSS",
        "Objetivo: Dispositivo capaz de restaurar solos degradados",
      ]
    },
  ];

  return (
    <section id="experiencia" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Experiência <span className="text-orange-500">profissional</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 hover:border-orange-500 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-orange-500 mb-2">
                    <Briefcase size={18} />
                    <span className="font-semibold">{exp.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-400">{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={18} />
                  <div>
                    <div>{exp.period}</div>
                    {exp.duration && <div className="text-sm text-orange-500">{exp.duration}</div>}
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-orange-500 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
