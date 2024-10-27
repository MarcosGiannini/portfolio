import { Code, Layout, Zap, Sparkles } from "lucide-react";

interface Skill {
  icon: string;
  name: string;
  color: string;
  subtitle: string;
}

interface SkillProps {
  data: Skill[];
  skillsInfo: {
    yoe: string;
    number_of_projects: string;
  };
}

const Skills = ({ data, skillsInfo }: SkillProps) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Code: <Code className="w-8 h-8" />,
    Layout: <Layout className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
    Sparkles: <Sparkles className="w-8 h-8" />,
  };

  const getColorStyle = (color: string) => {
    const colorMap: { [key: string]: string } = {
      "yellow": "#fde047",
      "purple": "#d8b4fe",
      "red": "#fca5a5",
      "blue": "#93c5fd",
    };
    return colorMap[color] || color;
  };

  return (
    <section id="skills" className="py-20 border-b-4 border-black bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Frontend Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="border-2 border-black p-6 rounded-lg shadow-md bg-yellow-200">
              <h3 className="text-5xl font-bold">{skillsInfo.yoe}</h3>
              <p className="text-xl">Years Experience</p>
            </div>
            <div className="border-2 border-black p-6 rounded-lg shadow-md bg-blue-200">
              <h3 className="text-5xl font-bold">
                {skillsInfo.number_of_projects}
              </h3>
              <p className="text-xl">Personal Projects Completed</p>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {data.map((skill, idx) => (
              <div
                key={idx}
                className="border-2 border-black p-6 rounded-lg shadow-md"
              >
                <div
                  className="rounded-full p-3 inline-block mb-4"
                  style={{ backgroundColor: getColorStyle(skill.color) }}
                >
                  {iconMap[skill.icon] || null}
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                <p className="mb-2 text-gray-600">{skill.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
