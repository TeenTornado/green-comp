import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";



import { cn } from "@/lib/utils";
// import { Calendar } from "@/components/ui/calendar";
// import AnimatedBeamMultipleOutputDemo from "@/components/example/animated-beam-multiple-outputs";
// import AnimatedListDemo from "@/components/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
// import Marquee from "@/components/magicui/marquee";

const features = [
  {
    Icon: FileTextIcon,
    name: "Our Vision",
    description: "IT & AI towards Sustainable Development",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1", 
  },
  {
    Icon: BellIcon,
    name: "",
    description: "Exploring approaches to reduce power consumption, improve recycling of electronic waste, and enhance the overall sustainability of computing systems",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: Share2Icon,
    name: "Our Objective",
    description: "Encouraging the development of energy-efficient software and applications.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
  },
  {
    Icon: CalendarIcon,
    name: "Our Mission",
    description: "Design and Development of Cost Effective Smart Products with the Reduced Impact of Technology on the Environment. Intelligent Automation and Maximizing the implementation of Automation to Achieve Sustainable Economies and Energy Transitions`",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
  },
];

function Vision() {
  return (
    <div className="max-w-4xl mx-auto py-8"> {/* Centered and constrained width */}
    <div className="pb-5"><img src="ArrowOrnament.png" alt="" className="" /></div>
      <BentoGrid className="gap-4">
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Vision;
