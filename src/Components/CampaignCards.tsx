import React, { useState } from "react";
import UpdateCampaignModal from "./UpdateCampaignModal";

interface CampaignCardProps {
  title: string;
  status: string;
  lastUpdated: string;
  progress: number; // percentage value between 0 and 100
  campaignId: string;
}

const CampaignCards: React.FC<CampaignCardProps> = ({
  title,
  status,
  lastUpdated,
  progress,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col max-w-xs">
      <div className="flex flex-col items-start p-6 w-full rounded-lg border border-solid border-stone-300">
        <div className="flex gap-5 justify-between w-full text-base text-black whitespace-nowrap">
          <img
            src="/CampaignProfiles.svg"
            className="object-contain shrink-0 aspect-[3.66] w-[88px]"
            alt="Main"
          />
          <div className="flex gap-2" onClick={handleOpenModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.475 5.40795L18.592 7.52495M17.836 3.54295L12.109 9.26995C11.8131 9.56545 11.6113 9.94193 11.529 10.3519L11 12.9999L13.648 12.4699C14.058 12.3879 14.434 12.1869 14.73 11.8909L20.457 6.16395C20.6291 5.99185 20.7656 5.78754 20.8588 5.56269C20.9519 5.33783 20.9998 5.09683 20.9998 4.85345C20.9998 4.61007 20.9519 4.36907 20.8588 4.14421C20.7656 3.91936 20.6291 3.71505 20.457 3.54295C20.2849 3.37085 20.0806 3.23434 19.8557 3.1412C19.6309 3.04806 19.3899 3.00012 19.1465 3.00012C18.9031 3.00012 18.6621 3.04806 18.4373 3.1412C18.2124 3.23434 18.0081 3.37085 17.836 3.54295Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H9"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p className="text-[16px] font-poppins">Edit</p>
          </div>
          <UpdateCampaignModal
            isVisible={isModalVisible}
            onClose={handleCloseModal}
            campaignId={""}
          />
        </div>
        <p className="self-stretch mt-6 text-lg font-poppins text-black">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="flex gap-2 mt-3.5 text-sm">
          <p className="font-poppins text-[14px] text-stone-500">Status:</p>
          <p className="text-neutral-900 font-poppins text-[14px]">{status}</p>
        </div>
        <div className="flex flex-col items-start mt-2 max-w-full bg-gray-200 rounded-[999px] w-[272px]">
          <div
            className="flex shrink-0 h-2.5 bg-green-600 rounded-[999px]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex gap-2 mt-6 text-sm">
          <p className="font-poppins text-[14px] text-stone-500">
            Last updated:
          </p>
          <p className="text-neutral-800 font-poppins text-[14px]">
            {lastUpdated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignCards;
