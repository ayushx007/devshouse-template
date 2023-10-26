"use client";
import { Accordion } from "@mantine/core";
import FAQData from "./FAQData";
const FAQ = () => {
  const colorClasses = {
    red: "text-red-500",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
    green: "text-green-500",
  };
  const items = FAQData.map((props) => (
    <Accordion.Item className="border-[#393b41]" key={props.key} value={props.question}>
      <Accordion.Control className={colorClasses[props.color as keyof typeof colorClasses]} >{props.question}</Accordion.Control>
      <Accordion.Panel className="bg-[#FAF9BE]">
        <p>{props.answer}</p>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="flex justify-center items-center bg-bg-black py-20">
      <div className="bg-bg-black w-[80%] h-auto">
        <h1 className="text-5xl font-Inter-500 text-white text-center  mb-10">FAQs</h1>
        <Accordion className="bg-[#18191b] ">
          {items}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
