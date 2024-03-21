import Hero from "../components/hero"

export default function Main() {
  return (
    <div>
      <Hero/>
      <h1>Oli</h1>
      <p>with TypeScript and Tailwind CSS</p>

      <div className="flex flex-wrap gap-4">
        <div className="w-[90px] h-[90px] rounded-full bg-cyan"/>
        <div className="w-[90px] h-[90px] rounded-full bg-light-grey"/>
        <div className="w-[90px] h-[90px] rounded-full bg-grey"/>
        <div className="w-[90px] h-[90px] rounded-full bg-dark-grey"/>
        <div className="w-[90px] h-[90px] rounded-full bg-purple-grey"/>
        <div className="w-[90px] h-[90px] rounded-full bg-black"/>
      </div>

      <div className="font-sans text-sm">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>

      <div className="font-sans text-base">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>

      <div className="font-sans text-lg">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>

      <div className="font-sans text-xl">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>

      <div className="font-sans text-2xl">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>

      <div className="font-sans text-5xl">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>

      <div className="font-sans text-6xl">
        <h1 className="text-cyan">hello</h1>
        <h1 className="text-light-grey">hello</h1>
        <h1 className="text-grey">hello</h1>
        <h1 className="text-dark-grey">hello</h1>
        <h1 className="text-purple-grey">hello</h1>
        <h1 className="text-black">hello</h1>
      </div>
    </div>
  )
}