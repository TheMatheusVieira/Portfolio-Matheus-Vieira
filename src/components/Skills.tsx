export function Skills() {
  const skillCategories = [
    {
      category: "Front End",
      skills: [
        { name: "React / Next.js", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 70 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      category: "Mobile & Design",
      skills: [
        { name: "React Native", level: 80 },
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 80 },
        { name: "Photoshop", level: 70 }
      ]
    },
    {
      category: "Audiovisual & Outros",
      skills: [
        { name: "Adobe Premiere", level: 85 },
        { name: "Git & GitHub", level: 80 },
        { name: "Java", level: 65 },
        { name: "Node.js", level: 75 }
      ]
    }
  ];

  return (
    <section id="habilidades" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Minhas <span className="text-orange-500">habilidades</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-6">{category.category}</h3>
              
              {category.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-orange-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-orange-600 to-orange-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
