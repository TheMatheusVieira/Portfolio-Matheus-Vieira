import { Music, Gamepad2, Dumbbell, Footprints } from "lucide-react";

export function Interests() {
  const interests = [
    {
      icon: Music,
      title: "Música",
      description: "Grandes fãs de Alee, BK e Baco Exu do Blues",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Gamepad2,
      title: "Games",
      description: "League of Legends, GTA e Rainbow Six Siege",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Dumbbell,
      title: "Treino",
      description: "Musculação e exercícios físicos regulares",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Footprints,
      title: "Corrida",
      description: "Corrida ao ar livre e cardio",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="interesses" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Interesses <span className="text-orange-500">pessoais</span>
        </h2>
        <div className="w-20 h-1 bg-orange-500 mx-auto mb-12"></div>
        
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Além da tecnologia, tenho outras paixões que me mantêm motivado e equilibrado
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-orange-500 transition-all group"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${interest.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <interest.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{interest.title}</h3>
              <p className="text-gray-400 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
