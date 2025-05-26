import React from 'react';

type Feature = {
  title: string;
  subtitle?: string;
};

type FeatureListProps = {
  features: Feature[];
};

export const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:max-w-4xl mx-auto pt-18 sm:pt-30 pb-15 px-10">
      {features.map((feature, index) => (
        <React.Fragment key={index}>
          <div className="text-[19px] text-center font-bold text-[#013a54]" style={{lineHeight:'24px'}}>
            {feature.title}
            {feature.subtitle && <><br />{feature.subtitle}</>}
          </div>
          {index !== features.length - 1 && (
            <div className="h-[2px] md:h-20 w-20 md:w-[2px] bg-[#0575ad] my-10 md:my-0"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
