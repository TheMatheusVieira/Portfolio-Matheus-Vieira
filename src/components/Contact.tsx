import { Mail, Linkedin, Github, Instagram } from "lucide-react";

export function Contact() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "vieiradesenvolvedor@gmail.com",
      href: "mailto:vieiradesenvolvedor@gmail.com",
      color: "hover:text-orange-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Matheus Vieira",
      href: "www.linkedin.com/in/eumatheusvieira1",
      color: "hover:text-blue-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "TheMatheusVieira",
      href: "https://github.com/TheMatheusVieira",
      color: "hover:text-purple-500"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@vieira.euu",
      href: "https://instagram.com/vieira.euu",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contato" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Entre em <span className="text-orange-500">contato</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <p className="text-center text-gray-400 mb-12 text-lg">
          Estou sempre aberto a novos projetos e oportunidades. 
          Vamos conversar sobre como posso ajudar você!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all group flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <link.icon className="text-white" size={24} />
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-1">{link.label}</div>
                <div className={`text-white ${link.color} transition-colors`}>{link.value}</div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="mailto:vieiradesenvolvedor@gmail.com" 
            className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors text-lg font-semibold"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}
