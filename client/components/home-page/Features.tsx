import React, { ReactNode } from "react";
import { BentoGridItem, BentoGrid } from "../ui/bento-grid";
import { CalendarDays, Link, Link2, TextSelect } from "lucide-react";

const Features = () => {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={i === 1 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};

export default Features;

const FeatureIcon = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-1 items-center justify-center rounded-xl h-56">
    {children}
  </div>
);

const items = [
  {
    title: "Analytics tracking",
    description:
      "Gain insights into your audience with detailed click analytics.",
    header: (
      <FeatureIcon>
        <TextSelect size={70} className="text-cyan-500" />
      </FeatureIcon>
    ),
  },
  {
    title: "Custom short links",
    description:
      "Create branded, memorable short links that reflect your brand.",
    header: (
      <FeatureIcon>
        <Link size={70} className="text-cyan-500" />
      </FeatureIcon>
    ),
  },
  {
    title: "Expiry dates",
    description:
      "Set expiration dates for your links to make them automatically expire.    ",
    header: (
      <FeatureIcon>
        <CalendarDays size={70} className="text-cyan-500" />
      </FeatureIcon>
    ),
  },
];
