import React from "react";

interface CampaignProgressProps {
  statusText: string;
  countText: string;
}

const CampaignProgress: React.FC<CampaignProgressProps> = ({
  statusText,
  countText,
}) => {
  return (
    <div className="flex gap-2 text-base text-black whitespace-nowrap rounded mb-2">
      <p className="my-auto">{statusText}</p>
      <p className="px-2 py-0.5 rounded bg-neutral-200">{countText}</p>
    </div>
  );
};

export default CampaignProgress;
