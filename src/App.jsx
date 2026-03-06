import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imgRectangle8 = "https://www.figma.com/api/mcp/asset/760eed5e-5ae8-41c3-a225-4a627068696f";
const imgVector = "https://www.figma.com/api/mcp/asset/20467850-3a9b-43c4-8cec-b509a6094dee";
const imgFrame47 = "https://www.figma.com/api/mcp/asset/6c979294-5a66-4342-8588-8c17e2684ba2";
const imgFrame48 = "https://www.figma.com/api/mcp/asset/b40d23a6-ccf8-40fd-bf79-c2292a49e573";
const imgFrame49 = "https://www.figma.com/api/mcp/asset/a135c669-913e-45b7-b54c-009ff9dd1bc3";
const imgFrame50 = "https://www.figma.com/api/mcp/asset/c02d5e33-324e-4b0d-b51e-bf022fc46528";
const imgVector1 = "https://www.figma.com/api/mcp/asset/bf683210-bd26-43b4-b07f-20c60f9277a5";
const imgVector2 = "https://www.figma.com/api/mcp/asset/b2bbbf77-2406-4810-9828-02dabfb668a4";
const imgVector3 = "https://www.figma.com/api/mcp/asset/60b219c8-e49b-4bd3-96e7-d3c29fab844d";
const imgElements = "https://www.figma.com/api/mcp/asset/03eab964-1679-477f-96e8-2be98a65e4a9";

const imgUnion = "https://www.figma.com/api/mcp/asset/3770e110-72cb-42f3-b41b-76860ce6b64a";
const imgHeartHandFill = "https://www.figma.com/api/mcp/asset/62a9c907-77e7-4d20-b89e-9a67e75c61f7";
const imgUnion1 = "https://www.figma.com/api/mcp/asset/e83e4534-e419-4d2c-8ae0-8c471f5833c8";
const imgLightFill = "https://www.figma.com/api/mcp/asset/c79b751f-9156-4269-85a3-81526002e27b";
const imgUnion2 = "https://www.figma.com/api/mcp/asset/4ef148bf-c440-479c-90f7-25f468736b61";
const imgAlarm2Fill = "https://www.figma.com/api/mcp/asset/c9b2e812-cc61-45f1-9dc5-3647c1bc869a";
const imgUnion3 = "https://www.figma.com/api/mcp/asset/dc7dd75f-084e-4b7e-ac5f-adfc95046b75";
const imgCodeFill = "https://www.figma.com/api/mcp/asset/cb5f336b-a968-4dd9-8ee1-9bfe8bf88e86";

const imgElementsCategory1 = "https://www.figma.com/api/mcp/asset/dbc22807-d655-46da-9105-c5a80ddd7300";
const imgElementsCategory2 = "https://www.figma.com/api/mcp/asset/305af11c-ab64-4842-b8d9-25f0684828c4";
const imgElementsCategory3 = "https://www.figma.com/api/mcp/asset/b5925218-c881-482b-9366-a1907a179e06";
const imgElementsCategory4 = "https://www.figma.com/api/mcp/asset/6b3084de-8ae8-4109-8887-953cf769f7af";
const imgElementsCategory5 = "https://www.figma.com/api/mcp/asset/143bccce-dd5a-4974-9e37-f9676dd57fc0";
const imgElementsCategory6 = "https://www.figma.com/api/mcp/asset/6746d360-92b0-4ce7-8036-0a3f866945c9";
const imgElementsCategory7 = "https://www.figma.com/api/mcp/asset/8247a971-f710-4d8b-9dd1-b66fe6b2ccc0";
const imgElementsCategory8 = "https://www.figma.com/api/mcp/asset/6f7ecb80-281b-4bba-bce9-385e01e887b0";
const imgElementsCategory9 = "https://www.figma.com/api/mcp/asset/f7544878-e113-4588-b46e-4cc214978fd4";

const imgGroup = "https://www.figma.com/api/mcp/asset/d968e4a2-085d-47a7-9f59-947295c0c82c";
const imgGroup1 = "https://www.figma.com/api/mcp/asset/02dcb064-80e6-4b82-b94c-a03de28f145b";
const imgGroup2 = "https://www.figma.com/api/mcp/asset/ccfe6255-7bb7-442c-a25a-ef3ee36c87ee";
const imgGroup3 = "https://www.figma.com/api/mcp/asset/a167255e-c165-44ea-a7d5-e0f632ea00f2";
const imgGroup4 = "https://www.figma.com/api/mcp/asset/985db028-e801-43ab-a2bc-bdb16e22ef0c";
const imgGroup5 = "https://www.figma.com/api/mcp/asset/1d328259-b9bc-44a8-8fea-703a3f852c30";
const imgGroup6 = "https://www.figma.com/api/mcp/asset/d53a2e06-a0ec-4eba-a2a0-68bf85ad552e";
const imgGroup7 = "https://www.figma.com/api/mcp/asset/156ce650-3858-4ab0-a154-b62115240165";
const imgGroup8 = "https://www.figma.com/api/mcp/asset/c5e24fee-da8b-44a6-8afb-93de8488ff65";
const imgGroup9 = "https://www.figma.com/api/mcp/asset/ec63198c-8ff7-40ff-aa5b-cdc6c6b0a638";
const imgGroup10 = "https://www.figma.com/api/mcp/asset/49470ffa-2d8c-4795-a288-66713da016e4";
const imgGroup11 = "https://www.figma.com/api/mcp/asset/5f04c27f-9f8e-4997-a13a-47b14d8f2dd2";
const imgGroup12 = "https://www.figma.com/api/mcp/asset/4dde520f-226e-430a-bb03-fb9c75d9cb6f";
const imgGroup13 = "https://www.figma.com/api/mcp/asset/6c6e19ae-c51f-4f89-8bc5-5e92761c568e";
const imgGroup14 = "https://www.figma.com/api/mcp/asset/a46a3298-9eab-4883-bcf7-706c61de058d";
const imgGroup15 = "https://www.figma.com/api/mcp/asset/92ac15ca-29b4-438a-a225-fe7d75468d2d";
const imgGroup16 = "https://www.figma.com/api/mcp/asset/3ab0cfd8-bb5c-464c-982a-c332d00b510f";
const imgGroup17 = "https://www.figma.com/api/mcp/asset/1b35e28e-38d7-4121-bad2-fe7d123940eb";
const imgGroup18 = "https://www.figma.com/api/mcp/asset/ea1ab875-ed56-47e5-bd1d-794dbaa31aee";
const imgGroup19 = "https://www.figma.com/api/mcp/asset/52853e9f-f25b-4566-8e72-e1b4658a37d7";
const imgGroup20 = "https://www.figma.com/api/mcp/asset/d91cd4df-46ec-47ed-b0ee-fc3133a3b3ef";
const imgGroup21 = "https://www.figma.com/api/mcp/asset/8ebec9aa-c6d5-4aba-9ecb-28d5c8097f39";
const imgGroup22 = "https://www.figma.com/api/mcp/asset/85766f1d-f933-43a6-8292-b7f1b8b4da7f";
const imgGroup23 = "https://www.figma.com/api/mcp/asset/6d04fc3b-79e8-4453-8d8b-b602a6344e19";
const imgGroup24 = "https://www.figma.com/api/mcp/asset/b46e0e6a-861c-4126-8caa-b027d39d6a3f";
const imgGroup25 = "https://www.figma.com/api/mcp/asset/41cb4db0-22e4-43aa-906c-05613bc65dd2";
const imgGroup26 = "https://www.figma.com/api/mcp/asset/18ac9e42-df38-403d-b4c7-b1ede2d0317c";
const imgGroup27 = "https://www.figma.com/api/mcp/asset/02e5c17a-0ced-4bae-a36f-2794fbd441c4";
const imgGroup28 = "https://www.figma.com/api/mcp/asset/e65068c4-f6c8-4f34-8e11-b7ed5958f43a";
const imgGroup29 = "https://www.figma.com/api/mcp/asset/02ba0b79-f0c8-490d-9349-ef7dc94cbb9b";
const imgGroup30 = "https://www.figma.com/api/mcp/asset/b9b05e07-48a6-49c6-9a50-178f2aa2886b";
const imgGroup31 = "https://www.figma.com/api/mcp/asset/9e85ed41-3d9b-4b40-9049-574ffbed3127";
const imgGroup32 = "https://www.figma.com/api/mcp/asset/628dd53c-91be-4ed9-aa44-d8bc93e3b5ca";
const imgGroup33 = "https://www.figma.com/api/mcp/asset/e46089a5-7cc3-423c-8d37-0b2f59312062";
const imgGroup34 = "https://www.figma.com/api/mcp/asset/b4af63b2-c260-40d1-86a6-1e6e3bb31a92";
const imgGroup35 = "https://www.figma.com/api/mcp/asset/33945574-d3d0-4a9e-ac73-8a3a66214b62";
const imgGroup36 = "https://www.figma.com/api/mcp/asset/1ff61909-dd72-4211-b88c-1b1cbfe99d0b";
const imgGroup37 = "https://www.figma.com/api/mcp/asset/98bed8f9-197d-4bdd-8bca-1147b0f08e19";
const imgGroup38 = "https://www.figma.com/api/mcp/asset/eb6699e6-f8fc-4213-9ebb-1cc45b6c8ee0";
const imgGroup39 = "https://www.figma.com/api/mcp/asset/08f063ba-93f9-4d14-8c4f-2a0421ccc272";
const imgGroup40 = "https://www.figma.com/api/mcp/asset/43d5b043-d45d-4fad-83a1-ae711a0a9eb4";
const imgGroup41 = "https://www.figma.com/api/mcp/asset/1ecd0992-4b3a-44c0-ab0b-f2a9d266ce72";
const imgGroup42 = "https://www.figma.com/api/mcp/asset/d1a192c4-15a2-4383-af3d-e05df6dd1c80";
const imgGroup43 = "https://www.figma.com/api/mcp/asset/90363706-aff7-4344-b884-45df42384775";
const imgGroup44 = "https://www.figma.com/api/mcp/asset/a4357c7d-719b-46e8-a638-723e68b7fa49";
const imgGroup45 = "https://www.figma.com/api/mcp/asset/413ef260-0a0b-4019-a9ea-6f8c95b6eb1f";
const imgGroup46 = "https://www.figma.com/api/mcp/asset/625df625-8407-46ea-a8ba-939103a76507";
const imgGroup47 = "https://www.figma.com/api/mcp/asset/9df9ce22-aa59-4307-9f78-6c32d0a44d0b";
const imgGroup48 = "https://www.figma.com/api/mcp/asset/1b132a8b-fa3c-41ab-870c-c2fd3b831b09";
const imgGroup49 = "https://www.figma.com/api/mcp/asset/adcea86d-61ae-4e0a-90ec-8889f9e11fd7";
const imgGroup50 = "https://www.figma.com/api/mcp/asset/0fc53051-f1e4-43f8-8275-f9e39cedae0a";
const imgGroup51 = "https://www.figma.com/api/mcp/asset/2d9979e3-b66a-4f39-b631-e05fba610130";
const imgGroup52 = "https://www.figma.com/api/mcp/asset/84d50d55-5f0b-4759-9bcb-c27fd181e9fd";
const imgGroup53 = "https://www.figma.com/api/mcp/asset/a9477b73-bcb7-44c9-b3b8-434eacfc3318";
const imgGroup54 = "https://www.figma.com/api/mcp/asset/6622801d-2ad7-41b3-a7a7-be471bd07dab";
const imgGroup55 = "https://www.figma.com/api/mcp/asset/9601c7bd-1fb7-43f2-9bf2-14af55e975d6";
const imgGroup56 = "https://www.figma.com/api/mcp/asset/a9dd2f3b-cc44-4c77-bfaa-fbc82aa905dd";
const imgGroup57 = "https://www.figma.com/api/mcp/asset/b782d7d1-e1e1-4580-9313-3b229dae5584";
const imgGroup58 = "https://www.figma.com/api/mcp/asset/381ea370-b360-4920-be0f-e2753c28f439";
const imgGroup59 = "https://www.figma.com/api/mcp/asset/65bdefe9-36cb-4c64-97b2-e643690189a0";
const imgGroup60 = "https://www.figma.com/api/mcp/asset/36311a76-ba1a-4141-b90b-55d9d094c3c2";
const imgGroup61 = "https://www.figma.com/api/mcp/asset/95b0a420-21bf-4635-b374-1c27528acde7";
const imgGroup62 = "https://www.figma.com/api/mcp/asset/91306117-79d5-414f-82dc-749d5e1f4ea0";
const imgGroup63 = "https://www.figma.com/api/mcp/asset/487f3669-deac-4b24-8ba1-f61b28ecf0a1";
const imgGroup64 = "https://www.figma.com/api/mcp/asset/415d8cea-8fd1-4882-a912-402a36c20e04";
const imgGroup65 = "https://www.figma.com/api/mcp/asset/86b9abf1-2b71-4e8f-9e85-13e73f151972";
const imgGroup66 = "https://www.figma.com/api/mcp/asset/1ea9fa1e-f0a7-4d13-895a-656cabdf5c17";
const imgGroup67 = "https://www.figma.com/api/mcp/asset/fdff7503-e623-4f1e-ad39-ac3d9d803e32";
const imgGroup68 = "https://www.figma.com/api/mcp/asset/182837e6-73cb-4375-a412-e3906c9bd873";
const imgGroup69 = "https://www.figma.com/api/mcp/asset/5accceca-f5c6-45fa-b9b8-fa63a26c16b5";
const imgGroup70 = "https://www.figma.com/api/mcp/asset/efedcf94-962b-48ed-bda7-4cc5b1d7a6da";
const imgGroup71 = "https://www.figma.com/api/mcp/asset/d5adff1e-8132-499d-867f-c4ca61dc7670";
const imgGroup72 = "https://www.figma.com/api/mcp/asset/6d76ce6f-7d6f-4338-a3ed-00bbef37ac07";
const imgGroup73 = "https://www.figma.com/api/mcp/asset/510c7b0a-8bf2-43bc-a501-7f0d45ef6c0a";
const imgGroup74 = "https://www.figma.com/api/mcp/asset/fa792b13-5844-4e7c-aa87-9850c348eb34";
const imgGroup75 = "https://www.figma.com/api/mcp/asset/b23ded5a-b374-4c8d-b4ec-541d241cc9a5";
const imgGroup76 = "https://www.figma.com/api/mcp/asset/ddd251cd-ea2f-4297-bab4-630cab5f739c";
const imgGroup77 = "https://www.figma.com/api/mcp/asset/ab59e9af-14f0-4dc1-bf49-9c446c66faa3";
const imgGroup78 = "https://www.figma.com/api/mcp/asset/b056626f-14b8-4923-877a-c2d9406b5c9e";
const imgGroup79 = "https://www.figma.com/api/mcp/asset/b6544193-47f3-48bc-84c9-46f93ae37521";
const imgGroup80 = "https://www.figma.com/api/mcp/asset/516556e7-5177-4384-b55a-80fc16564166";
const imgGroup81 = "https://www.figma.com/api/mcp/asset/cf7f4336-2d74-43f8-89be-6982617432f0";
const imgGroup82 = "https://www.figma.com/api/mcp/asset/f18084ac-eb9e-4eff-a714-9638968248cf";
const imgGroup83 = "https://www.figma.com/api/mcp/asset/b7c1c56c-d3af-481d-a416-d9676f8ad2a0";
const imgGroup84 = "https://www.figma.com/api/mcp/asset/2bf6a3a9-3305-4b78-8ca2-f7e5c7b9c0ba";
const imgGroup85 = "https://www.figma.com/api/mcp/asset/b934f9b7-d813-4e86-b035-f538553887c9";
const imgGroup86 = "https://www.figma.com/api/mcp/asset/5887f8eb-7665-42b6-80e8-d0111dd596f5";
const imgGroup87 = "https://www.figma.com/api/mcp/asset/7e53705a-7abd-408d-ad65-f4f4a14e168c";
const imgGroup88 = "https://www.figma.com/api/mcp/asset/77d1b8b2-b9c3-4f11-8604-46c2a61ff873";
const imgGroup89 = "https://www.figma.com/api/mcp/asset/6d223741-f2ba-462f-958f-ff296c5d9292";
const imgGroup90 = "https://www.figma.com/api/mcp/asset/582d9d0b-9a43-4ec9-8f93-4abe16d2507a";
const imgGroup91 = "https://www.figma.com/api/mcp/asset/b0583673-e07e-4bf3-b3c4-c30a308435f1";
const imgGroup92 = "https://www.figma.com/api/mcp/asset/1d86f94a-8f58-4817-b9b6-84288837dbfa";
const imgGroup93 = "https://www.figma.com/api/mcp/asset/d85b3fec-7b31-4981-a151-bac552885477";
const imgGroup94 = "https://www.figma.com/api/mcp/asset/023db2ed-a99a-41da-bf2c-5e347698066c";
const imgGroup95 = "https://www.figma.com/api/mcp/asset/bd3e0d29-057a-4e9e-916b-57fd9db636ad";
const imgGroup96 = "https://www.figma.com/api/mcp/asset/4319e456-7dc4-4edc-be68-b83531a916ae";
const imgGroup97 = "https://www.figma.com/api/mcp/asset/3cf9af9f-c08f-4319-b629-b73ad9954c10";
const imgGroup98 = "https://www.figma.com/api/mcp/asset/fe204226-287e-4c9f-bf73-3c198c1fc8c8";
const imgGroup99 = "https://www.figma.com/api/mcp/asset/7cc0a71e-3c0d-48b9-961d-854297eb6738";
const imgGroup100 = "https://www.figma.com/api/mcp/asset/44cbb303-c0f3-4890-b3b9-4a8efd6e53e7";
const imgGroup101 = "https://www.figma.com/api/mcp/asset/3f3847ed-628d-47c4-99a9-19a032e4df99";
const imgGroup102 = "https://www.figma.com/api/mcp/asset/53aed337-358f-4871-a804-f5bcae3c9ccf";
const imgGroup103 = "https://www.figma.com/api/mcp/asset/b7493701-d07b-405a-9036-d329a6fe3b70";
const imgGroup104 = "https://www.figma.com/api/mcp/asset/280d1b1e-a69d-48e2-b72f-18ff85ee9d2c";


function TextCycle({ className, property1 = "Meetups" }) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative"}>
      <p className="bg-clip-text bg-gradient-to-r font-semibold from-orange-600 leading-[64px] not-italic relative shrink-0 text-[60px] text-transparent text-center to-orange-300 tracking-[-0.9px] whitespace-nowrap">
        meet-ups
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start px-[156px] relative size-full">
      <div className="content-stretch flex flex-col items-center pb-[120px] pt-[100px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[640px]">
          <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-col items-center relative shrink-0">
              <p className="font-semibold leading-[64px] not-italic relative shrink-0 text-[60px] text-zinc-800 text-center tracking-[-0.9px] whitespace-nowrap">
                Find your next
              </p>
              <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
                <TextCycle className="content-stretch flex items-center justify-center relative shrink-0" />
                <p className="font-semibold leading-[64px] not-italic relative shrink-0 text-[60px] text-zinc-800 text-center tracking-[-0.9px] whitespace-nowrap">
                  to attend
                </p>
              </div>
            </div>
            <p className="font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[24px] text-zinc-500 text-center w-[min-content]">
              Discover, save, track and attend.
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-orange-600 content-stretch flex h-[42px] items-center justify-center px-[28px] py-[14px] relative rounded-full shrink-0">
              <p className="font-semibold leading-none not-italic relative shrink-0 text-[14px] text-white text-center whitespace-nowrap">
                Browse events
              </p>
            </div>
            <div className="bg-zinc-100 border border-zinc-100 border-solid content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-full shrink-0">
              <p className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-zinc-800 text-center whitespace-nowrap">
                List your event
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Ongoing({ className, property1 = "Start" }) {
  return (
    <div className={className || "content-stretch flex gap-[4px] h-[12px] items-center relative"}>
      <p className="font-semibold leading-[22px] not-italic relative shrink-0 text-[10px] text-orange-600 tracking-[0.06px] whitespace-nowrap">
        ONGOING
      </p>
      <div className="absolute h-[19.303px] left-[-19px] mix-blend-overlay top-[-3.65px] w-[18.718px]">
        <div className="absolute inset-[-20.72%_-21.37%]">
          <img alt="" className="block max-w-none size-full" src={imgRectangle8} />
        </div>
      </div>
    </div>
  );
}

function Status({ className, state = "Ongoing" }) {
  const normalizedState = state === "Ended" ? "Ended" : state === "Upcoming" ? "Upcoming" : "Ongoing";
  const isOngoing = normalizedState === "Ongoing";
  return (
    <div className={className || `content-stretch flex relative ${isOngoing ? "items-start" : "h-[12px] items-center"}`} id={isOngoing ? "node-3566_8486" : "node-3566_8487"}>
      {normalizedState === "Upcoming" && (
        <p className="font-semibold leading-[22px] not-italic relative shrink-0 text-[10px] text-blue-600 tracking-[0.06px] whitespace-nowrap">
          UPCOMING
        </p>
      )}
      {normalizedState === "Ended" && (
        <p className="font-semibold leading-[22px] not-italic relative shrink-0 text-[10px] text-zinc-500 tracking-[0.06px] whitespace-nowrap">
          ENDED
        </p>
      )}
      {isOngoing && <Ongoing className="content-stretch flex gap-[4px] h-[12px] items-center overflow-clip relative shrink-0" />}
    </div>
  );
}

function SaveBtn({ className, property1 = "Default" }) {
  return (
    <button className={className || "backdrop-blur-[6px] bg-[rgba(24,24,27,0.25)] content-stretch flex items-center justify-center p-[8px] relative rounded-full"}>
      <div className="overflow-clip relative shrink-0 size-[20px]">
        <div className="absolute inset-[12.5%_20.83%]">
          <div className="absolute inset-[-3.81%_-4.9%]">
            <img alt="" className="block max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
    </button>
  );
}

function EventCard({ event, fallbackImage = imgFrame47 }) {
  if (!event) {
    return null;
  }

  const ticketType = (event.ticket_type || "free").toLowerCase();
  const ticketLabel = ticketType === "paid" ? "PAID" : "FREE";
  const ticketColor = ticketType === "paid" ? "bg-orange-100 text-orange-700" : "bg-green-100 text-green-800";
  const description = truncateText(event.description || event.long_description || "No description available", 120);
  const locationLabel = getEventLocation(event);

  return (
    <div className="bg-white border-[0.738px] border-zinc-100 border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-[288px]">
      <div className="h-[288px] overflow-clip relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-zinc-100 inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt={event.title} className="absolute h-[129.9%] left-0 max-w-none top-[-0.17%] w-full object-cover" src={event.image_url || fallbackImage} />
          </div>
        </div>
        <SaveBtn className="absolute backdrop-blur-[6px] bg-[rgba(24,24,27,0.25)] bottom-[-22px] content-stretch cursor-pointer flex items-center justify-center opacity-0 p-[8px] right-[8px] rounded-full" />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="border-zinc-100 border-b border-solid content-stretch flex flex-col gap-[10px] items-start p-[20px] relative shrink-0 w-full">
          <p className="font-semibold leading-none not-italic overflow-hidden relative shrink-0 text-[16px] text-zinc-800 text-ellipsis tracking-[-0.16px] w-full whitespace-nowrap">{event.title}</p>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
            <Status className="content-stretch flex items-start relative shrink-0" state={event.status} />
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[8.33%_12.5%]">
                  <div className="absolute inset-[-5.71%_-6.35%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector1} />
                  </div>
                </div>
              </div>
              <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[12px] text-zinc-500 tracking-[0.072px] whitespace-nowrap">
                {formatEventDate(event.event_date)}
              </p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute inset-[-5.71%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector2} />
                  </div>
                </div>
              </div>
              <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[12px] text-zinc-500 tracking-[0.072px] whitespace-nowrap">
                {formatEventTime(event.start_time, event.end_time)}
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[20px] relative shrink-0 w-full">
          <p className="font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[14px] text-zinc-500 tracking-[0.084px] w-[min-content]">
            {description}
          </p>
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
            <div className="bg-zinc-100 content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-full shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[8.33%_16.67%]">
                  <div className="absolute inset-[-5.71%_-7.14%]">
                    <img alt="" className="block max-w-none size-full" src={imgVector3} />
                  </div>
                </div>
              </div>
              <p className="font-medium leading-[22px] not-italic relative shrink-0 text-[12px] text-zinc-500 tracking-[0.072px] whitespace-nowrap">
                {locationLabel}
              </p>
            </div>
            <div className={`${ticketColor} content-stretch flex gap-[4px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-full shrink-0`}>
              <div className="relative shrink-0 size-[12px]">
                <div className="absolute inset-[8.33%]">
                  <div className="absolute inset-[-5%]">
                    <img alt="" className="block max-w-none size-full" src={imgElements} />
                  </div>
                </div>
              </div>
              <p className="font-medium leading-[22px] not-italic relative shrink-0 text-[12px] tracking-[0.072px] whitespace-nowrap">
                {ticketLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendingEvents({ events = [] }) {
  const featuredEvents = React.useMemo(() => {
    const ranked = [...events].sort((a, b) => a.event_date.localeCompare(b.event_date));
    return ranked.filter((event) => event.status !== "Ended").slice(0, 4);
  }, [events]);

  if (featuredEvents.length === 0) {
    return null;
  }

  const fallbackImages = [imgFrame47, imgFrame48, imgFrame49, imgFrame50];

  return (
    <div className="content-stretch flex items-start justify-center px-[10px] relative size-full">
      <div className="content-stretch flex flex-col gap-[32px] items-start pb-[120px] relative shrink-0 w-[1200px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[60px] not-italic relative shrink-0 text-[24px] text-zinc-800 text-center tracking-[-0.24px] whitespace-nowrap">
            Top trending events
          </p>
        </div>
        <div className="content-stretch flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
          {featuredEvents.map((event, index) => (
            <EventCard event={event} fallbackImage={fallbackImages[index % fallbackImages.length]} key={event.source_id} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TechScene() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Split text into lines/words or just animate the existing spans
    const spans = el.querySelectorAll('span');
    
    // First span is fully visible
    gsap.set(spans[0], { opacity: 1 });
    // Rest of the text is slightly transparent initially
    gsap.set([spans[1], spans[2]], { opacity: 0.2 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // Start animation when the top of the container hits the center of the viewport
        end: "bottom center", // End animation when the bottom of the container hits the center of the viewport
        scrub: 1, // Smooth scrubbing
        toggleActions: "play none none reverse",
      }
    });

    tl.to([spans[1], spans[2]], {
      opacity: 1,
      duration: 1,
      stagger: 0.2, // Animate spans sequentially
      ease: "power1.inOut"
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-zinc-50 content-stretch flex items-start justify-center px-[10px] relative size-full">
      <div className="content-stretch flex flex-col items-center pb-[300px] pt-[250px] relative shrink-0 w-[1200px]">
        <div className="content-stretch flex flex-col gap-[60px] items-center relative shrink-0 w-[841.809px]">
          <div className="content-stretch flex gap-[64px] items-center relative shrink-0">
            <div className="h-[100px] relative shrink-0 w-[103.185px]">
              <div className="absolute h-[100px] left-0 top-0 w-[103.185px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgUnion} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-1/2">
                <img alt="" className="absolute block max-w-none size-full" src={imgHeartHandFill} />
              </div>
            </div>
            <div className="h-[86.453px] relative shrink-0 w-[85.829px]">
              <div className="absolute h-[86.453px] left-0 top-0 w-[85.829px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgUnion1} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[40px] top-1/2">
                <div className="-scale-y-100 flex-none">
                  <div className="overflow-clip relative size-[40px]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgLightFill} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[120px] relative shrink-0 w-[124.805px]">
              <div className="absolute h-[120px] left-0 top-0 w-[124.805px]">
                <img alt="" className="absolute block max-w-none size-full" src={imgUnion2} />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 overflow-clip size-[32px] top-[calc(50%-13px)]">
                <img alt="" className="absolute block max-w-none size-full" src={imgAlarm2Fill} />
              </div>
            </div>
            <div className="h-[83.889px] relative shrink-0 w-[94.646px]">
              <div className="absolute flex h-[83.889px] items-center justify-center left-0 top-0 w-[94.646px]">
                <div className="-scale-y-100 flex-none rotate-180">
                  <div className="h-[83.889px] relative w-[94.646px]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgUnion3} />
                  </div>
                </div>
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute flex items-center justify-center left-1/2 size-[37.784px] top-[calc(50%-5px)]">
                <div className="flex-none rotate-[11.61deg]">
                  <div className="overflow-clip relative size-[32px]">
                    <img alt="" className="absolute block max-w-none size-full" src={imgCodeFill} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
            <p ref={textRef} className="font-medium leading-[0] min-w-full not-italic relative shrink-0 text-[48px] text-zinc-800 text-center tracking-[-0.72px] w-[min-content]">
              <span className="leading-[60px] text-zinc-800 transition-opacity">All of Ghana’s tech scene in one place.</span>
              <span className="leading-[60px] transition-opacity">{` `}</span>
              <span className="leading-[60px] text-zinc-800 transition-opacity">From intimate design meetups to large scale hackathons. Discover where innovators, builders, and founders meet.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryItem({ title, count, img, bg, iconBg }) {
    return (
        <div className={`bg-[var(${bg})] content-stretch flex gap-[10px] items-center p-[20px] relative rounded-[12px] shrink-0 w-[389.333px]`}>
            <div className={`bg-[var(${iconBg})] content-stretch flex items-center p-[8px] relative rounded-full shrink-0`}>
              <div className="relative shrink-0 size-[24px]">
                <div className="absolute flex inset-[8.33%] items-center justify-center">
                  <div className="absolute inset-[-3.75%]">
                    <img alt="" className="block max-w-none size-full" src={img} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <p className="font-semibold leading-none min-w-full not-italic overflow-hidden relative shrink-0 text-[14px] text-zinc-800 text-ellipsis tracking-[-0.14px] w-[min-content] whitespace-nowrap">{title}</p>
              <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[12px] text-zinc-500 tracking-[0.072px] whitespace-nowrap">
                  {count} events
                </p>
              </div>
            </div>
          </div>
    )
}

function Categories() {
  return (
    <div className="content-stretch flex items-start justify-center px-[10px] relative size-full">
      <div className="content-stretch flex flex-col gap-[32px] items-start py-[120px] relative shrink-0 w-[1200px]">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <p className="font-semibold leading-[60px] not-italic relative shrink-0 text-[24px] text-zinc-800 text-center tracking-[-0.24px] whitespace-nowrap">
            Browse by category
          </p>
        </div>
        <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
            <CategoryItem title="Innovation & Emerging Technologies" count="250" img={imgElementsCategory1} bg="--green\/50,#f0fdf4" iconBg="--green\/100,#dcfce7" />
            <CategoryItem title="Business, Startups & Investment" count="250" img={imgElementsCategory2} bg="--blue\/50,#eff6ff" iconBg="--blue\/100,#dbeafe" />
            <CategoryItem title="Software & Development" count="250" img={imgElementsCategory3} bg="--purple\/50,#faf5ff" iconBg="--purple\/100,#f3e8ff" />
            <CategoryItem title="Design, UX/UI & Product" count="250" img={imgElementsCategory4} bg="--rose\/50,#fff1f2" iconBg="--rose\/100,#ffe4e6" />
            <CategoryItem title="Data, Analytics & Infrastructure" count="250" img={imgElementsCategory5} bg="--amber\/50,#fffbeb" iconBg="--amber\/100,#fef3c7" />
            <CategoryItem title="Industry-Specific Tech" count="250" img={imgElementsCategory6} bg="--lime\/50,#f7fee7" iconBg="--lime\/100,#ecfccb" />
            <CategoryItem title="Networking, Career & Community" count="250" img={imgElementsCategory7} bg="--violet\/50,#f5f3ff" iconBg="--violet\/100,#ede9fe" />
            <CategoryItem title="Showcases & Product Launches" count="250" img={imgElementsCategory8} bg="--fuchsia\/50,#fdf4ff" iconBg="--fuchsia\/100,#fae8ff" />
            <CategoryItem title="Research & Academic" count="250" img={imgElementsCategory9} bg="--stone\/50,#fafaf9" iconBg="--stone\/100,#f5f5f4" />
        </div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-white border-zinc-100 border-b border-solid content-stretch flex flex-col gap-[10px] items-start px-[156px] relative size-full">
      <div className="content-stretch flex gap-[106px] items-center py-[12px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-[1_0_0] h-[42px] items-center min-h-px min-w-px relative">
          <p className="font-medium leading-none not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
            Fyndr™
          </p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-center justify-end min-h-px min-w-px relative">
          <div className="content-stretch flex items-center justify-center py-[14px] relative shrink-0">
            <p className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-zinc-500 text-center whitespace-nowrap">
              Categories
            </p>
          </div>
          <div className="content-stretch flex items-center justify-center py-[14px] relative shrink-0">
            <p className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-zinc-500 text-center whitespace-nowrap">
              List your event
            </p>
          </div>
          <div className="bg-zinc-100 border border-zinc-100 border-solid content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-full shrink-0">
            <p className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-zinc-800 text-center whitespace-nowrap">
              Sign in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex flex-col items-center px-[10px] relative size-full">
      <div className="absolute bg-gradient-to-b bottom-0 from-white h-[924px] left-0 right-0 to-orange-600 via-[53.282%] via-orange-300" />
      <div className="content-stretch flex flex-col gap-[56px] items-start py-[120px] relative shrink-0 w-[1200px]">
        <div className="bg-orange-950 h-[600px] overflow-clip relative rounded-[24px] shrink-0 w-full">
          <p className="-translate-x-1/2 absolute bottom-[499.86px] font-semibold leading-none left-[524.69px] not-italic text-[259.257px] text-white text-center tracking-[-2.5926px] translate-y-full whitespace-nowrap">
            Fyndr™
          </p>
        </div>
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <p className="font-normal leading-[1.4] not-italic relative shrink-0 text-[20px] text-orange-200 text-center whitespace-nowrap">
            Fyndr © 2025. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

const imgVectorAllEventsCal = "https://www.figma.com/api/mcp/asset/39a982ac-4275-460e-91e9-f8b3d9997457";
const imgVectorAllEventsSearch = "https://www.figma.com/api/mcp/asset/2493da36-6c76-432e-b323-d9b6d7a28f6b";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "").replace(/\/$/, "");

function buildApiUrl(path) {
  return `${API_BASE_URL}${path}`;
}

function formatEventDate(dateText) {
  if (!dateText) {
    return "Date TBA";
  }

  const parsed = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return dateText;
  }

  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatEventTime(startTime, endTime) {
  if (!startTime && !endTime) {
    return "Time TBA";
  }
  if (startTime && endTime) {
    return `${startTime} - ${endTime}`;
  }
  return startTime || endTime;
}

function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength).trim()}...`;
}

function getEventLocation(event) {
  return event.venue || event.location || event.platform || "Location TBA";
}

function useEventFeed() {
  const [events, setEvents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [lastSyncedAt, setLastSyncedAt] = React.useState(null);

  const fetchEvents = React.useCallback(async () => {
    try {
      const response = await fetch(buildApiUrl("/api/events?status=all&limit=500"));
      if (!response.ok) {
        throw new Error(`API request failed (${response.status})`);
      }

      const payload = await response.json();
      setEvents(Array.isArray(payload.events) ? payload.events : []);
      setLastSyncedAt(payload?.latestSync?.finished_at ?? null);
      setError("");
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Could not load events");
    } finally {
      setIsLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchEvents();
    const intervalId = setInterval(fetchEvents, 120000);
    return () => {
      clearInterval(intervalId);
    };
  }, [fetchEvents]);

  return { events, isLoading, error, lastSyncedAt };
}

function AllEvents({ events = [], isLoading = false, error = "", lastSyncedAt = null }) {
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [visibleCount, setVisibleCount] = React.useState(8);

  const filteredEvents = React.useMemo(() => {
    return events.filter((event) => {
      const statusMatch = statusFilter === "All" || event.status === statusFilter;
      const search = searchTerm.trim().toLowerCase();
      if (!search) {
        return statusMatch;
      }

      const searchable = [event.title, event.description, event.organizer_name, event.location, event.venue]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return statusMatch && searchable.includes(search);
    });
  }, [events, statusFilter, searchTerm]);

  React.useEffect(() => {
    setVisibleCount(8);
  }, [statusFilter, searchTerm]);

  const visibleEvents = filteredEvents.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEvents.length;

  const statusButtons = ["All", "Upcoming", "Ongoing", "Ended"];

  const syncLabel = lastSyncedAt
    ? `Synced ${new Date(lastSyncedAt).toLocaleString()}`
    : "Waiting for first sync";

  return (
    <div className="content-stretch flex flex-col items-center pt-[66px] pb-[120px] relative size-full">
      <div className="bg-white content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1200px]">
        <div className="bg-white content-stretch flex items-center justify-between w-full relative shrink-0">
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
            <p className="font-semibold leading-none not-italic relative shrink-0 text-[24px] text-zinc-800 tracking-[-0.24px]">
              All events
            </p>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[12px]">
                <div className="absolute inset-[8.33%_12.5%]">
                  <div className="absolute inset-[-5.71%_-6.35%]">
                    <img alt="" className="block max-w-none size-full" src={imgVectorAllEventsCal} />
                  </div>
                </div>
              </div>
              <p className="font-normal leading-[22px] not-italic relative shrink-0 text-[12px] text-zinc-500 tracking-[0.072px] whitespace-nowrap">
                {filteredEvents.length} events
              </p>
            </div>
            <p className="font-normal leading-[20px] not-italic text-[12px] text-zinc-400 tracking-[0.072px] whitespace-nowrap">
              {syncLabel}
            </p>
          </div>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            <div className="bg-zinc-50 border border-zinc-100 border-solid content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative rounded-full shrink-0">
              <div className="overflow-clip relative shrink-0 size-[16px]">
                <div className="absolute inset-[12.5%]">
                  <div className="absolute inset-[-6.94%]">
                    <img alt="" className="block max-w-none size-full" src={imgVectorAllEventsSearch} />
                  </div>
                </div>
              </div>
              <input
                className="bg-transparent border-none font-normal leading-none text-[14px] text-zinc-700 outline-none w-[220px]"
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search events"
                value={searchTerm}
              />
            </div>
            <div className="bg-zinc-100 border border-zinc-100 border-solid content-stretch flex gap-0 items-center p-[4px] relative rounded-full shrink-0">
              {statusButtons.map((label) => {
                const isActive = statusFilter === label;
                return (
                  <button
                    className={`${isActive ? "bg-white shadow-sm text-zinc-800" : "text-zinc-400 hover:text-zinc-600"} content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-full shrink-0 cursor-pointer transition-colors`}
                    key={label}
                    onClick={() => setStatusFilter(label)}
                    type="button"
                  >
                    <p className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-center whitespace-nowrap">
                      {label}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
          {isLoading && events.length === 0 ? (
            <p className="font-normal leading-[22px] not-italic text-[14px] text-zinc-500 tracking-[0.084px]">Loading events...</p>
          ) : null}
          {error ? <p className="font-normal leading-[22px] not-italic text-[14px] text-red-500 tracking-[0.084px]">{error}</p> : null}
          {!isLoading && visibleEvents.length === 0 ? (
            <p className="font-normal leading-[22px] not-italic text-[14px] text-zinc-500 tracking-[0.084px]">No events found for this filter.</p>
          ) : null}
          <div className="content-stretch flex flex-wrap gap-[16px] items-start relative shrink-0 w-full">
            {visibleEvents.map((event, index) => (
              <EventCard
                event={event}
                fallbackImage={[imgFrame47, imgFrame48, imgFrame49, imgFrame50][index % 4]}
                key={event.source_id}
              />
            ))}
          </div>
        </div>
        {hasMore ? (
          <div className="content-stretch flex justify-center w-full relative shrink-0 pt-[24px]">
            <button
              className="bg-zinc-100 border border-zinc-100 border-solid content-stretch flex items-center justify-center px-[28px] py-[14px] relative rounded-full cursor-pointer hover:bg-zinc-200 transition-colors"
              onClick={() => setVisibleCount((current) => current + 8)}
              type="button"
            >
              <p className="font-medium leading-none not-italic relative shrink-0 text-[14px] text-zinc-800 text-center whitespace-nowrap">
                Load {Math.max(filteredEvents.length - visibleCount, 0)} more
              </p>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function App() {
  const { events, isLoading, error, lastSyncedAt } = useEventFeed();

  return (
    <div className="bg-white w-full min-h-screen font-['Inter_Display:Regular',sans-serif]">
      <Nav />
      <HeroSection />
      <TrendingEvents events={events} />
      <TechScene />
      <Categories />
      <AllEvents error={error} events={events} isLoading={isLoading} lastSyncedAt={lastSyncedAt} />
      <Footer />
    </div>
  );
}
