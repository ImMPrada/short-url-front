import { FeatureCardProps } from "./types";

export default function FeatureCard({ title, description, image}: FeatureCardProps) {
  return (
    <div className="w-[350px] relative pt-10">
      <div className="rounded-full w-20 h-20 flex justify-start align-middle p-5 bg-black absolute z-20 top-0 left-8">
        <img src={image} alt="" />
      </div>

      <div className="w-full bg-white px-8 pt-20 pb-10 rounded-md font-sans text-black">
        <h3 className="font-bold text-2xl mb-3 text-black">{title}</h3>
        <p className="text-sm text-grey">
          {description}
        </p>
      </div>
    </div>
  );
}
