import HyperText from "@/components/ui/hyper-text";
import { AnimatedBeamDemo } from "./components/AnimatedBeams";

import { SparklesTextDemo } from "./components/SparkleText";

const Page = () => {
  return (
    <div className="h-screen w-full flex-col flex items-center justify-center">
      <div className="mb-20"><SparklesTextDemo /></div>
        

        
      

      <AnimatedBeamDemo />
    </div>
  );
};

export default Page;
