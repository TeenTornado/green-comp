"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { CircleIcon } from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const StyledBentoCard = ({ name, description, href, cta, className }) => {
  return (
    <BentoCard
      className={cn(
        "bg-gradient-to-b from-[#21212100] via-[#21212100] to-[#13131338]",
        className
      )}
      name={<span className="text-[#9C9C9C] text-6xl font-sfpro">{name}</span>}
      description={
        <span className="text-white font-medium text-2xl">{description}</span>
      }
      href={href}
      cta={cta}
      background={
        <div className="absolute inset-0 bg-gradient-to-b from-[#212121AD] via-[#212121AD] to-[#13131338] opacity-90" />
      }
    />
  );
};

const features = [
  {
    name: (
      <>
        <span className="font-sfpro font-bold text-7xl">Our</span>
        <br />
        <span className="font-sfpro font-bold text-7xl">Vision</span>
      </>
    ),
    description: "IT & AI towards Sustainable Development",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: " ",
    description: (
      <div className="flex items-center">
        <Image
          src="/Bulb.png"
          alt="Bulb"
          width={115.77}
          height={199.92}
          className="mr-4"
        />
        <span>
          Exploring approaches to reduce power consumption, improve recycling of
          electronic waste, and enhance the overall sustainability of computing
          systems
        </span>
      </div>
    ),
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
  },
  {
    name: (
      <>
        <span className="font-sfpro font-bold text-7xl">Our</span>
        <br />
        <span className="font-sfpro font-bold text-7xl">Objective</span>
      </>
    ),
    description:
      "Encouraging the development of energy-efficient software and applications.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: (
      <>
        <span className="font-sfpro text-8xl">Our</span>
        <br />
        <span className="font-sfpro text-8xl">Mission</span>
      </>
    ),
    description:
      "Design and Development of Cost Effective Smart Products with the Reduced Impact of Technology on the Environment. Intelligent Automation and Maximizing the implementation of Automation to Achieve Sustainable Economies and Energy Transitions",
    className: "col-span-3 lg:col-span-2",
    href: "#",
    cta: "Learn more",
  },
];

function Vision() {
  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="pb-3">
        <Image
          src="/ArrowOrnament.png"
          alt=""
          className=""
          width={100}
          height={100}
        />
      </div>
      <BentoGrid className="gap-4">
        {features.map((feature, idx) => (
          <StyledBentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default Vision;
