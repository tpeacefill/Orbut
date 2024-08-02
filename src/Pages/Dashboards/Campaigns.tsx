import React, { useState } from 'react';
import SidePanel from "../../Components/SidePanel";
import Card from "../../Components/Card";
import CampaignProgress from "../../Components/CampaignProgress";
import CampaignCards from "../../Components/CampaignCards";
import CreateCampaignModal from '../../Components/CreateCampaignModal';

const Campaigns: React.FC = () => {
  const buttons = [
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.25 12L11.205 3.045C11.3094 2.94056 11.4333 2.85772 11.5697 2.80119C11.7061 2.74467 11.8523 2.71558 12 2.71558C12.1477 2.71558 12.2939 2.74467 12.4303 2.80119C12.5667 2.85772 12.6906 2.94056 12.795 3.045L21.75 12M4.5 9.75V19.875C4.5 20.496 5.004 21 5.625 21H9.75V16.125C9.75 15.504 10.254 15 10.875 15H13.125C13.746 15 14.25 15.504 14.25 16.125V21H18.375C18.996 21 19.5 20.496 19.5 19.875V9.75M8.25 21H16.5"
            stroke="#3A3A3A"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      buttonText: "Dashboard",
      background: "bg-transparent",
      border: "border-none",
    },

    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3.28267 24C2.38667 24 1.61556 23.6769 0.969333 23.0307C0.323111 22.3844 0 21.6133 0 20.7173C0 19.8213 0.323111 19.0507 0.969333 18.4053C1.61556 17.76 2.38667 17.4369 3.28267 17.436C3.66489 17.436 4.03644 17.5031 4.39733 17.6373C4.75822 17.7707 5.07956 17.9609 5.36133 18.208L11.3333 12.236V6.492C10.5956 6.34 9.97511 5.96444 9.472 5.36533C8.96978 4.76533 8.71867 4.07111 8.71867 3.28267C8.71867 2.38667 9.04133 1.61556 9.68667 0.969333C10.3338 0.323111 11.1049 0 12 0C12.8951 0 13.6662 0.323111 14.3133 0.969333C14.9604 1.61556 15.2836 2.38667 15.2827 3.28267C15.2827 4.07111 15.0356 4.76533 14.5413 5.36533C14.0471 5.96444 13.4222 6.34 12.6667 6.492V12.236L18.6467 18.208C18.9284 17.9618 19.2471 17.7716 19.6027 17.6373C19.9582 17.5031 20.3302 17.436 20.7187 17.436C21.6138 17.436 22.3844 17.7591 23.0307 18.4053C23.6769 19.0516 24 19.8227 24 20.7187C24 21.6147 23.6769 22.3853 23.0307 23.0307C22.3844 23.676 21.6133 23.9991 20.7173 24C19.8213 24.0009 19.0507 23.6778 18.4053 23.0307C17.76 22.3836 17.4369 21.6129 17.436 20.7187C17.436 20.4538 17.4644 20.1969 17.5213 19.948C17.5791 19.6991 17.6711 19.468 17.7973 19.2547L12 13.456L6.20267 19.2547C6.32889 19.468 6.42089 19.6991 6.47867 19.948C6.53556 20.1969 6.564 20.4538 6.564 20.7187C6.564 21.6138 6.24089 22.3844 5.59467 23.0307C4.94844 23.6769 4.17778 24 3.28267 24ZM20.7147 22.6667C21.2551 22.6667 21.7156 22.4778 22.096 22.1C22.4764 21.7213 22.6667 21.2618 22.6667 20.7213C22.6667 20.1809 22.4778 19.7204 22.1 19.34C21.7222 18.9596 21.2627 18.7693 20.7213 18.7693C20.18 18.7693 19.7196 18.9582 19.34 19.336C18.9604 19.7138 18.7702 20.1733 18.7693 20.7147C18.7684 21.256 18.9573 21.7164 19.336 22.096C19.7147 22.4756 20.1742 22.6658 20.7147 22.6667ZM11.9973 5.23067C12.5378 5.23067 12.9982 5.04178 13.3787 4.664C13.7591 4.28533 13.9493 3.82578 13.9493 3.28533C13.9493 2.74489 13.76 2.28444 13.3813 1.904C13.0027 1.52356 12.5431 1.33333 12.0027 1.33333C11.4622 1.33333 11.0018 1.52267 10.6213 1.90133C10.2409 2.28 10.0511 2.73911 10.052 3.27867C10.0529 3.81822 10.2418 4.27867 10.6187 4.66C10.9956 5.04133 11.4551 5.23155 11.9973 5.23067ZM3.27867 22.6667C3.81911 22.6667 4.27956 22.4778 4.66 22.1C5.04044 21.7213 5.23067 21.2618 5.23067 20.7213C5.23067 20.1809 5.04178 19.7204 4.664 19.34C4.28622 18.9596 3.82667 18.7693 3.28533 18.7693C2.744 18.7693 2.28356 18.9582 1.904 19.336C1.52444 19.7138 1.33422 20.1733 1.33333 20.7147C1.33244 21.256 1.52178 21.7164 1.90133 22.096C2.27822 22.4764 2.73822 22.6667 3.27867 22.6667Z"
            fill="black"
          />
        </svg>
      ),
      buttonText: "Campaigns",
      background: "bg-zinc-100",
      border: "border-zinc-300",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 21C13.78 21 15.5201 20.4722 17.0001 19.4832C18.4802 18.4943 19.6337 17.0887 20.3149 15.4442C20.9961 13.7996 21.1743 11.99 20.8271 10.2442C20.4798 8.49836 19.6226 6.89472 18.364 5.63604C17.1053 4.37737 15.5016 3.5202 13.7558 3.17294C12.01 2.82567 10.2004 3.0039 8.55585 3.68509C6.91131 4.36628 5.50571 5.51983 4.51677 6.99987C3.52784 8.47991 3 10.22 3 12C3 13.44 3.338 14.8 3.94 16.007C4.393 16.918 3.763 18.147 3.523 19.044C3.46983 19.2424 3.46982 19.4513 3.52297 19.6497C3.57613 19.8481 3.68057 20.029 3.8258 20.1742C3.97103 20.3194 4.15194 20.4239 4.35033 20.477C4.54872 20.5302 4.75761 20.5302 4.956 20.477C5.853 20.237 7.082 19.607 7.993 20.061C9.23777 20.6805 10.6096 21.002 12 21Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      buttonText: "Chat",
      background: "bg-transparent",
      border: "border-none",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
        >
          <path
            d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 5L16.3 9.7M16.3 9.7C18.0973 11.4987 18.0973 14.5027 16.3 16.3M16.3 9.7C14.5027 7.90267 11.4987 7.90267 9.7 9.7M5 21L9.7 16.3M9.7 16.3C7.90267 14.5027 7.90267 11.4987 9.7 9.7M9.7 16.3C11.4973 18.0973 14.5013 18.0973 16.3 16.3M5 5L9.7 9.7M21 21L16.3 16.3"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      buttonText: "Support Center",
      background: "bg-transparent",
      border: "border-none",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.67442C9.26149 1.67442 6.63513 2.76229 4.69871 4.69871C2.76229 6.63513 1.67442 9.26149 1.67442 12C1.67442 14.7385 2.76229 17.3649 4.69871 19.3013C6.63513 21.2377 9.26149 22.3256 12 22.3256C14.7385 22.3256 17.3649 21.2377 19.3013 19.3013C21.2377 17.3649 22.3256 14.7385 22.3256 12C22.3256 9.26149 21.2377 6.63513 19.3013 4.69871C17.3649 2.76229 14.7385 1.67442 12 1.67442ZM0 12C0 5.37265 5.37265 0 12 0C18.6273 0 24 5.37265 24 12C24 18.6273 18.6273 24 12 24C5.37265 24 0 18.6273 0 12ZM12 4.46512C12.222 4.46512 12.435 4.55332 12.592 4.71033C12.749 4.86734 12.8372 5.08028 12.8372 5.30233V5.65619C14.6567 5.98214 16.186 7.34958 16.186 9.2093C16.186 9.43134 16.0978 9.64429 15.9408 9.8013C15.7838 9.95831 15.5709 10.0465 15.3488 10.0465C15.1268 10.0465 14.9138 9.95831 14.7568 9.8013C14.5998 9.64429 14.5116 9.43134 14.5116 9.2093C14.5116 8.45247 13.882 7.64986 12.8372 7.36409V11.2376C14.6567 11.5635 16.186 12.931 16.186 14.7907C16.186 16.6504 14.6567 18.0179 12.8372 18.3438V18.6977C12.8372 18.9197 12.749 19.1327 12.592 19.2897C12.435 19.4467 12.222 19.5349 12 19.5349C11.778 19.5349 11.565 19.4467 11.408 19.2897C11.251 19.1327 11.1628 18.9197 11.1628 18.6977V18.3438C9.34326 18.0179 7.81395 16.6504 7.81395 14.7907C7.81395 14.5687 7.90216 14.3557 8.05917 14.1987C8.21617 14.0417 8.42912 13.9535 8.65116 13.9535C8.8732 13.9535 9.08615 14.0417 9.24316 14.1987C9.40017 14.3557 9.48837 14.5687 9.48837 14.7907C9.48837 15.5475 10.118 16.3501 11.1628 16.6348V12.7624C9.34326 12.4365 7.81395 11.069 7.81395 9.2093C7.81395 7.34958 9.34326 5.98214 11.1628 5.65619V5.30233C11.1628 5.08028 11.251 4.86734 11.408 4.71033C11.565 4.55332 11.778 4.46512 12 4.46512ZM11.1628 7.36409C10.118 7.64986 9.48837 8.45247 9.48837 9.2093C9.48837 9.96614 10.118 10.7687 11.1628 11.0534V7.36409ZM12.8372 12.9455V16.6359C13.882 16.3501 14.5116 15.5487 14.5116 14.7907C14.5116 14.0339 13.882 13.2301 12.8372 12.9455Z"
            fill="black"
          />
        </svg>
      ),
      buttonText: "Leads",
      background: "bg-transparent",
      border: "border-none",
    },
    {
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 6H16V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V18C2 18.7956 2.31607 19.5587 2.87868 20.1213C3.44129 20.6839 4.20435 21 5 21H19C19.7956 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V9C22 8.20435 21.6839 7.44129 21.1213 6.87868C20.5587 6.31607 19.7956 6 19 6ZM10 5H14V6H10V5ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19H5C4.73478 19 4.48043 18.8946 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18V12.39L8.68 14C8.78618 14.0144 8.89382 14.0144 9 14H15C15.1084 13.998 15.2161 13.9812 15.32 13.95L20 12.39V18ZM20 10.28L14.84 12H9.16L4 10.28V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H19C19.2652 8 19.5196 8.10536 19.7071 8.29289C19.8946 8.48043 20 8.73478 20 9V10.28Z"
            fill="black"
          />
        </svg>
      ),
      buttonText: "Archive",
      background: "bg-transparent",
      border: "border-none",
    },
  ];

  const GreenUp = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
    >
      <path
        d="M16.6064 0.516716C16.5219 0.313072 16.36 0.151244 16.1564 0.066673C16.0562 0.0239681 15.9486 0.00131678 15.8397 0H11.6726C11.4516 0 11.2396 0.087806 11.0833 0.244101C10.927 0.400397 10.8392 0.612379 10.8392 0.833414C10.8392 1.05445 10.927 1.26643 11.0833 1.42273C11.2396 1.57902 11.4516 1.66683 11.6726 1.66683H13.8312L9.17238 6.32561L6.43045 3.57535C6.35298 3.49723 6.2608 3.43523 6.15924 3.39292C6.05768 3.35061 5.94875 3.32882 5.83873 3.32882C5.72871 3.32882 5.61978 3.35061 5.51822 3.39292C5.41666 3.43523 5.32448 3.49723 5.24701 3.57535L0.246522 8.57583C0.168408 8.65331 0.106407 8.74548 0.0640953 8.84704C0.021784 8.9486 0 9.05753 0 9.16755C0 9.27757 0.021784 9.3865 0.0640953 9.48806C0.106407 9.58962 0.168408 9.6818 0.246522 9.75928C0.323999 9.83739 0.416176 9.89939 0.517735 9.9417C0.619294 9.98402 0.728226 10.0058 0.838246 10.0058C0.948267 10.0058 1.0572 9.98402 1.15876 9.9417C1.26032 9.89939 1.35249 9.83739 1.42997 9.75928L5.83873 5.34218L8.58066 8.09245C8.65814 8.17056 8.75031 8.23256 8.85187 8.27488C8.95343 8.31719 9.06236 8.33897 9.17238 8.33897C9.2824 8.33897 9.39134 8.31719 9.4929 8.27488C9.59446 8.23256 9.68663 8.17056 9.76411 8.09245L15.0063 2.84194V5.00048C15.0063 5.22152 15.0941 5.4335 15.2504 5.5898C15.4067 5.74609 15.6187 5.8339 15.8397 5.8339C16.0607 5.8339 16.2727 5.74609 16.429 5.5898C16.5853 5.4335 16.6731 5.22152 16.6731 5.00048V0.833414C16.6718 0.724506 16.6491 0.616911 16.6064 0.516716Z"
        fill="#04B200"
      />
    </svg>
  );

  const RedDown = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
    >
      <path
        d="M13.8505 13.7915C14.0245 13.6561 14.1378 13.4572 14.1655 13.2384C14.1802 13.1305 14.1736 13.0207 14.146 12.9154L13.0437 8.89673C12.9853 8.68357 12.8445 8.50237 12.6524 8.39298C12.4604 8.2836 12.2327 8.25499 12.0195 8.31346C11.8064 8.37193 11.6252 8.51268 11.5158 8.70476C11.4064 8.89683 11.3778 9.12449 11.4363 9.33765L12.0073 11.4193L6.28207 8.15882L8.20907 4.78705C8.26391 4.69167 8.29932 4.58638 8.31326 4.47724C8.32719 4.36811 8.31939 4.25729 8.29029 4.15119C8.26118 4.04509 8.21136 3.9458 8.14369 3.85905C8.07602 3.7723 7.99185 3.69981 7.89602 3.64576L1.75091 0.146138C1.65553 0.0913006 1.55024 0.0558902 1.44111 0.0419509C1.33197 0.0280116 1.22116 0.0358185 1.11506 0.0649215C1.00896 0.0940245 0.909666 0.143847 0.822916 0.211516C0.736167 0.279185 0.663675 0.363361 0.609622 0.459187C0.554784 0.554567 0.519373 0.659861 0.505433 0.768995C0.491494 0.878129 0.499302 0.988943 0.528405 1.09504C0.557508 1.20115 0.60733 1.30044 0.674999 1.38718C0.742668 1.47393 0.826844 1.54643 0.922671 1.60048L6.34864 4.68377L4.42165 8.05554C4.36681 8.15092 4.3314 8.25622 4.31746 8.36535C4.30352 8.47449 4.31133 8.5853 4.34043 8.6914C4.36953 8.7975 4.41936 8.89679 4.48703 8.98354C4.55469 9.07029 4.63887 9.14278 4.7347 9.19684L11.1849 12.8634L9.1032 13.4344C8.89004 13.4929 8.70883 13.6336 8.59945 13.8257C8.49006 14.0177 8.46146 14.2454 8.51993 14.4586C8.5784 14.6717 8.71915 14.8529 8.91122 14.9623C9.10329 15.0717 9.33095 15.1003 9.54411 15.0418L13.5627 13.9396C13.6674 13.9095 13.7652 13.8592 13.8505 13.7915Z"
        fill="#B20000"
      />
    </svg>
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };



  return (
    <div className="flex flex-col md:flex-row justify-center items-start text-lg bg-white text-neutral-700 h-screen overflow-hidden">
        
      <SidePanel buttons={buttons} />
      <div className="flex flex-col px-4 sm:px-8 w-full lg:w-[88%] h-full overflow-y-auto">
        <div className="flex flex-col pt-8  max-md:max-w-full">
          <div className="flex flex-row text-3xl text-black justify-between items-center mb-2 lg:hidden">
            <h1 className="flex-auto text-[28px] text-[#02208D] font-krona">
              Orbùt
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="17"
              viewBox="0 0 29 17"
              fill="none"
            >
              <path
                d="M1 16H28M1 8.5H28M1 1H28"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center w-full max-md:flex-wrap max-md:max-w-full">
            <p className="my-auto font-normal font-poppins text-2xl text-[#151515]">
              Campaigns
            </p>
            <div className="flex gap-5 justify-between px-1.5 text-base font-medium text-black">
              <div className="shrink-0 my-auto w-12 h-12 border border-black rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.962 17.986H18.772C19.0372 18.0009 19.3018 17.9476 19.5405 17.8311C19.7793 17.7147 19.9842 17.5391 20.1358 17.321C20.2874 17.1029 20.3806 16.8497 20.4066 16.5853C20.4325 16.321 20.3903 16.0544 20.284 15.811C19.924 14.723 18.489 13.418 18.489 12.134C18.489 9.284 18.489 8.534 17.085 6.858C16.6301 6.31908 16.0669 5.88194 15.432 5.575L14.649 5.195C14.5172 5.11624 14.4035 5.01047 14.3154 4.88466C14.2274 4.75885 14.1669 4.61584 14.138 4.465C14.0597 3.95741 13.7913 3.49859 13.3873 3.18159C12.9832 2.8646 12.4736 2.71316 11.962 2.758C11.4596 2.72784 10.964 2.88602 10.572 3.20167C10.18 3.51731 9.91972 3.96775 9.84201 4.465C9.80682 4.62082 9.73779 4.76699 9.6398 4.89315C9.54182 5.0193 9.41727 5.12236 9.27501 5.195L8.49201 5.575C7.85744 5.88206 7.29458 6.31919 6.84001 6.858C5.43701 8.534 5.43701 9.284 5.43701 12.134C5.43701 13.418 4.06701 14.592 3.70701 15.745C3.49001 16.442 3.37001 17.986 5.18701 17.986H11.962Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.225 17.986C15.2339 18.4169 15.1555 18.8452 14.9947 19.2451C14.8338 19.645 14.5938 20.0082 14.289 20.313C13.9842 20.6178 13.621 20.8578 13.2211 21.0186C12.8212 21.1795 12.393 21.2578 11.962 21.249C11.5311 21.2581 11.1027 21.18 10.7027 21.0192C10.3028 20.8585 9.93949 20.6184 9.63473 20.3136C9.32997 20.0087 9.09005 19.6454 8.92941 19.2453C8.76878 18.8453 8.69075 18.417 8.70002 17.986"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="flex gap-2 py-2">
                <div className="shrink-0 w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <img
                    src="/AvatarProfile.svg"
                    alt="avatar"
                    className="shrink-0 w-12 rounded-full aspect-square"
                  />
                </div>
                <p className="my-auto font-poppins text-[16px] font-medium hidden sm:block">
                  Ebenezer Frimpong
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-7 w-full  max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col sm:flex-row w-full justify-between">
              <div className="flex flex-col gap-3 mb-2 sm:mb-0">
                <h1 className="text-[24px] sm:text-[24px] md:text-[32px] lg:text-[40px] text-black font-poppins font-medium leading-tight">
                  Your total revenue
                </h1>
                <h1 className="text-[24px] sm:text-[24px] md:text-[32px] lg:text-[40px] font-poppins font-semibold bg-gradient-to-r from-[#DF1EFF]  to-[#FFC93C] bg-clip-text text-transparent leading-tight">
                  GH₵6,609,234.00
                </h1>
              </div>

              <div className="flex gap-4">
                <div className="flex gap-2 px-4 py-3 h-[46px] rounded-lg items-center border border-solid border-zinc-400 mb-0 mt-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V5.586C20.9999 5.85119 20.8946 6.10551 20.707 6.293L14.293 12.707C14.1055 12.8945 14.0001 13.1488 14 13.414V19.719C14 19.871 13.9653 20.021 13.8987 20.1576C13.832 20.2942 13.735 20.4138 13.6152 20.5073C13.4954 20.6008 13.3558 20.6658 13.2071 20.6973C13.0584 20.7288 12.9044 20.7259 12.757 20.689L10.757 20.189C10.5408 20.1348 10.3488 20.01 10.2117 19.8342C10.0745 19.6585 10 19.4419 10 19.219V13.414C9.99994 13.1488 9.89455 12.8945 9.707 12.707L3.293 6.293C3.10545 6.10551 3.00006 5.85119 3 5.586V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="font-poppins text-[16px] font-normal">
                    Select dates
                  </p>
                </div>
                <div className="flex gap-2 px-4 py-3 h-[46px] items-center rounded-lg border border-solid border-zinc-400 mb-0 mt-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V5.586C20.9999 5.85119 20.8946 6.10551 20.707 6.293L14.293 12.707C14.1055 12.8945 14.0001 13.1488 14 13.414V19.719C14 19.871 13.9653 20.021 13.8987 20.1576C13.832 20.2942 13.735 20.4138 13.6152 20.5073C13.4954 20.6008 13.3558 20.6658 13.2071 20.6973C13.0584 20.7288 12.9044 20.7259 12.757 20.689L10.757 20.189C10.5408 20.1348 10.3488 20.01 10.2117 19.8342C10.0745 19.6585 10 19.4419 10 19.219V13.414C9.99994 13.1488 9.89455 12.8945 9.707 12.707L3.293 6.293C3.10545 6.10551 3.00006 5.85119 3 5.586V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p className="font-poppins text-[16px] font-normal">Filter</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex gap-5 max-md:flex-col">
              <Card
                title="New Subscriptions"
                count="875"
                percentage="24%"
                comparisonText="Compare to last week"
                svgIcon={GreenUp}
                backgroundColor="bg-[#82FF80] bg-opacity-30"
                textColor="text-[#04B200]"
              />
              <Card
                title="New Orders"
                count="500"
                percentage="17%"
                comparisonText="Compare to last week"
                svgIcon={RedDown}
                backgroundColor="bg-[#FF8080] bg-opacity-30" 
                textColor="text-[#B20000]" 
              />
              <Card
                title="Average Revenue"
                count="GH₵8,673"
                percentage="24%"
                comparisonText="Compare to last week"
                svgIcon={GreenUp}
                backgroundColor="bg-[#82FF80] bg-opacity-30"
                textColor="text-[#04B200]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-5 justify-between text-black mt-6 mb-7">
            <p className="text-[18px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-poppins font-semibold">
              Recent Campaigns
            </p>
            <div className="flex gap-2 p-px my-auto text-xl border-b border-black">
              <p className="font-poppins text-[20px]">View all</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_353_88)">
                  <path
                    d="M5.63606 18.3639L18.364 5.63602M18.364 5.63602V17.6568M18.364 5.63602H6.34317"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_353_88">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-between gap-5 w-full">
            <div className="flex flex-col mb-2 sm:mb-0">
              <CampaignProgress statusText="Draft" countText="1" />
              <CampaignCards
                title="15 steps to automate your campaigns with Rancard"
                status="Not Started"
                lastUpdated="April 10, 2024"
                progress={0}
                campaignId="1"
              />
              <div className="flex flex-col max-w-xs text-base text-black rounded-none mt-4">
                <button className="flex gap-2 px-20 py-5 rounded-lg border border-dashed  border-purple-500 border-opacity-60"
                 onClick={handleOpenModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12ZM12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4Z"
                      fill="black"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H11V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11H13V7Z"
                      fill="black"
                    />
                  </svg>
                  <p className="font-poppins text-[16px]">Add Campaign</p>
                </button>
                <CreateCampaignModal isVisible={isModalVisible} onClose={handleCloseModal} />
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-2 sm:mb-0 h-auto">
              <CampaignProgress statusText="In Progress" countText="1" />
              <CampaignCards
                title="Engage Procurers and Retailers using Agile Methodologies"
                status="In Progress"
                lastUpdated="April 10, 2024"
                progress={35}
                campaignId="1"
              />
              <CampaignCards
                title="Engage Procurers and Retailers using Agile Methodologies"
                status="In Progress"
                lastUpdated="April 10, 2024"
                progress={35}
                campaignId="1"
              />
            </div>

            <div className="flex flex-col mb-2 sm:mb-0">
              <CampaignProgress statusText="Complete" countText="1" />
              <CampaignCards
                title="Introduce Anagro to hospitals in Tamale"
                status="Completed"
                lastUpdated="April 10, 2024"
                progress={100}
                campaignId="1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
