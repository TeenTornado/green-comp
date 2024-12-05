import { BorderBeam } from "@/components/magicui/border-beam";

 function BorderBeamDemo() {
  return (
    <div className="relative flex h-[500px] w-[700px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Border Beam
      </span>
      <BorderBeam size={20} duration={20} delay={24}/>
    </div>
  );
}

export default BorderBeamDemo;