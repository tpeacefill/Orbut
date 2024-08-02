import React, { useState } from "react";
import DropdownStatusSelect from "./DropdownStatusSelect";

interface CreateCampaignModalProps {
  isVisible: boolean;
  onClose: () => void;
  campaignId: string;
}

const UpdateCampaignModal: React.FC<CreateCampaignModalProps> = ({
  isVisible,
  onClose,
  campaignId,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [status, setStatus] = useState("");

  const handleUpdateCampaign = async () => {
    const payload = {
      name,
      description,
      start_date: startDate,
      end_date: endDate,
      banner_url: bannerUrl,
      status,
    };

    try {
      const response = await fetch(
        `https://test.quups.app/api/campaigns/${campaignId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Campaign updated successfully:", result);

      onClose();
    } catch (error) {
      console.error("Error updating campaign:", error);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-col text-base z-50 fixed top-0 left-0 w-full h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center px-20 py-40 w-full bg-black bg-opacity-70 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div
          className="flex flex-col items-start px-10 py-11 mb-0 max-w-full bg-white rounded-2xl w-[603px] max-md:px-5 max-md:mb-2.5 z-60"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-wrap gap-5 justify-between self-stretch text-3xl font-medium text-black max-md:max-w-full">
            <p className="font-poppins text-[28px] text-black font-medium">
              Update Campaign
            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={onClose}
            >
              <path
                d="M6.40002 18.308L5.69202 17.6L11.292 12L5.69202 6.40002L6.40002 5.69202L12 11.292L17.6 5.69202L18.308 6.40002L12.708 12L18.308 17.6L17.6 18.308L12 12.708L6.40002 18.308Z"
                fill="#707070"
              />
            </svg>
          </div>
          <p className="mt-2 text-neutral-600 max-md:max-w-full font-poppins text-[16px]">
            Edit Campaign details by filling in the necessary details
          </p>
          <input
            type="text"
            placeholder="Campaign name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 mt-6 max-w-full font-light rounded-lg border border-solid border-zinc-500 text-neutral-500 w-[494px] max-md:pr-5 placeholder-zinc-500 placeholder:font-poppins"
          />

          <textarea
            className="px-4 pt-4 pb-20 mt-6 max-w-full font-light rounded-lg border border-solid border-zinc-500 text-neutral-500 w-[494px] max-md:pr-5 placeholder-zinc-500 placeholder:font-poppins"
            placeholder="Description"
            wrap="soft"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <div className="flex flex-wrap gap-5 mt-6 font-light text-neutral-500 justify-between max-w-full w-[494px]">
            <input
              type="date"
              id="start-date"
              className="flex-1 p-4 rounded-lg border border-solid border-zinc-500 w-full max-w-[calc(50%-0.625rem)] placeholder:text-neutral-500 placeholder:font-light"
              placeholder="Enter start date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              id="end-date"
              className="flex-1 p-4 rounded-lg border border-solid border-zinc-500 w-full max-w-[calc(50%-0.625rem)] placeholder:text-neutral-500 placeholder:font-light"
              placeholder="Enter end date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <input
            type="text"
            className="p-4 mt-6 max-w-full font-light font-poppins rounded-lg border border-solid border-zinc-500 text-neutral-500 w-[494px] max-md:pr-5 placeholder:text-neutral-500 placeholder:font-light"
            placeholder="Banner URL"
            value={bannerUrl}
            onChange={(e) => setBannerUrl(e.target.value)}
          />

          <DropdownStatusSelect onSelect={setStatus} />

          <div className="flex gap-4 mt-12 text-lg max-md:mt-10">
            <button
              className="px-12 py-5 whitespace-nowrap border border-black border-solid rounded-[999px] text-[18px] text-stone-500 max-md:px-5 justify-center items-center font-poppins"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-9 py-5 font-medium text-white bg-indigo-600 rounded-[999px] max-md:px-5 justify-center items-center font-poppins"
              onClick={handleUpdateCampaign}
            >
              Update Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCampaignModal;
