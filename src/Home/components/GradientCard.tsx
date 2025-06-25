
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, HeartPulse, Flame, Timer } from "lucide-react"; // Icons from lucide-react
import { MagicCard } from "@/components/magicui/magic-card";

const modules = [
  {
    icon: <Dumbbell className="w-8 h-8 text-muted" />,
    title: "Strength Training",
    description: "Build muscle and improve endurance with guided routines.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-muted" />,
    title: "Cardio",
    description: "Boost your stamina with effective cardio workouts.",
  },
  {
    icon: <Flame className="w-8 h-8 text-muted" />,
    title: "Fat  Burn",
    description: "High-intensity modules to target fat loss.",
  },
  {
    icon: <Timer className="w-8 h-8 text-muted" />,
    title: "HIIT",
    description: "Short and powerful workouts to fit any schedule.",
  },
];

export function GradientCard() {
  return (
    <>
      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {modules.map((module, idx) => (
          <Card key={idx} className="p-0 glass-card "> {/* Adjust height here */}
             {/* <MagicCard
              gradientColor="#f3fcd4" // vivid lime-green gradient
              className="w-full h-full  p-6 py-10 flex flex-col items-center text-center 
             transition-transform duration-300 ease-in-out transform hover:scale-[1.02]
             shadow-[0_-2px_35px_rgba(100,200,100,0.4)] 
             rounded-xl justify-between"
            > */}
              <div className="w-16 h-16 flex items-center justify-center mb-4 bg-primary rounded-full mx-auto">
                {module.icon}
              </div>

              <CardHeader className="p-0 mb-2 flex justify-center whitespace-nowrap">
                <CardTitle className="text-[17px] font-bold text-white">{module.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <CardDescription className="text-gray-300 font-light">{module.description}</CardDescription>
              </CardContent>
           </Card>
        ))}
      </div>
    </>
  );
}
