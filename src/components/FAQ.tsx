"use client";
import { Accordion } from "@mantine/core";
import FAQData from "./FAQData";
const FAQ = () => {
  const colorClasses = {
    red: "bg-red-200",
    blue: "bg-blue-200",
    yellow: "bg-yellow-200",
    green: "bg-green-200",
  };
  const items = FAQData.map((props, i) => (
    <Accordion.Item className="border-[#393b41] border" key={props.key} value={props.question}>
      <Accordion.Control className={`text-${props.color}-500 hover:bg-inherit`}>{props.question}</Accordion.Control>
      <Accordion.Panel className={`bg-${props.color}-200`}>
        <p>{props.answer}</p>
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <div id="faqs" className="flex justify-center items-center bg-bg-black pt-10">
      <div className="hidden text-yellow-500"></div>
      <div className="hidden text-red-500"></div>
      <div className="hidden text-blue-500"></div>
      <div className="hidden text-green-500"></div>

      <div className="bg-bg-black w-[80%] h-auto">
        <h1 className="text-5xl font-Inter-500 text-white text-center mb-10">FAQs</h1>
        <div className="border border-[#393b41]">
          <Accordion transitionDuration={500} className="bg-[#18191b] font-Inter-300">
            {items}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
