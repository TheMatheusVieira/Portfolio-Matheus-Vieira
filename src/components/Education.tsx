import { GraduationCap, BookOpen } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Pós-Graduação em Front End Engineer",
      institution: "Em Andamento",
      period: "2025 - Presente",
      status: "Cursando",
      icon: GraduationCap
    },
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "Formado",
      period: "Concluído",
      status: "Completo",
      icon: GraduationCap
    },
    {
      degree: "Técnico em Eletroeletrônica",
      institution: "Formado",
      period: "Concluído",
      status: "Completo",
      icon: BookOpen
    }
  ];

  return (
    <section id="formacao" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Formação <span className="text-orange-500">acadêmica</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all group"
            >
              <div className="mb-4">
                <edu.icon className="text-orange-500 group-hover:scale-110 transition-transform" size={40} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              
              <div className="text-gray-400 mb-3">{edu.institution}</div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{edu.period}</span>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  edu.status === "Cursando" 
                    ? "bg-orange-500/20 text-orange-500" 
                    : "bg-green-500/20 text-green-500"
                }`}>
                  {edu.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
