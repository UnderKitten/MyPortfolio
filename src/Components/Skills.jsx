import { motion } from "framer-motion";

const Skills = ({ skillCategories }) => {
  return (
    <div className="max-w-4xl  space-y-4 flex flex-col">
      {skillCategories.map((category, categoryIdx) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIdx * 0.15 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold text-white">{category.title}</h3>

          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIdx) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: categoryIdx * 0.15 + skillIdx * 0.05,
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/80 border border-gray-600/50 rounded-md backdrop-blur-sm hover:bg-gray-700/80 hover:border-gray-500/70 transition-all duration-200 cursor-default"
              >
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={`${skill.name} icon`}
                    className="w-4 h-4 object-contain opacity-90"
                  />
                )}

                <span className="text-gray-200 text-sm font-medium">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
