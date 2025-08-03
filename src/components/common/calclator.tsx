"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
const DonutChart = dynamic(() => import("../common/donautChart"), {
  ssr: false,
});

import RangeInput from "./slideInput";
import Link from "next/link";

const Calclator = () => {
  const [ExpectedReturn, setExpectedReturn] = useState(20);
  const [investAmount, setInvestAmount] = useState<number>(2500);
  const [timePeriod, setTimePeriod] = useState(20);
  return (
    <div className="container flex p-2 w-full xl:max-w-[899px] xl:max-h-[550px] lg:max-w-[899px] lg:max-h-[550px] bg-white xl:flex-row lg:flex-row flex-col">
      {/* inputs */}
      <div className="p-3 xl:w-[50%] w-[100%]">
        {/* input */}
        <h4 className="text-black font-semibold">Calclator</h4>
        <div className="flex flex-col items-end gap-2">
          <div className="mt-16 w-[100%]">
            <div className="text-black">Total Investment</div>
            <div>
              <input
                value={investAmount}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  setInvestAmount(Number(value));
                }}
                className="border border-black2-300 text-black px-3 focus:outline-none rounded-sm h-9 w-full"
                placeholder="Enter total investment"
                title="Total Investment"
              />
            </div>
          </div>
          {/* slider */}
          <div className="my-10 w-[100%]">
            <RangeInput
              value={ExpectedReturn}
              max={100}
              min={0}
              labelIcon={"%"}
              onChange={(_event: Event, value: number | number[]) => {
                setExpectedReturn(typeof value === "number" ? value : Number(value[0]));
              }}
              label="Expected Return (%) "
            />
          </div>
          <div className="my-10 w-[100%]">
            <RangeInput
              value={timePeriod}
              max={50}
              labelIcon={"Yr"}
              min={1}
              onChange={(_event: Event, value: number | number[]) => {
                setTimePeriod(typeof value === "number" ? value : Number(value[0]));
              }}
              label="Time Period (Years) "
            />
          </div>
        </div>
      </div>
      <div className="xl:w-[50%] w-[100%] pt-4 bg-[#fff8f8] rounded-md border">
        <DonutChart />
        <div className="mb-2 border-b mx-3 flex justify-between">
          <div className="text-black py-2 px-1">Invested Amount :</div>
          <div className="text-black py-2 px-4 mr-4">₹ {investAmount}</div>
        </div>
        <div className=" mb-2 border-b mx-3 flex justify-between">
          <div className="text-black py-2 px-1">Estimate Returns :</div>
          <div className="text-black py-2 px-4 mr-4">₹ 45634</div>
        </div>
        <div className=" border-b mb-4 mx-3 flex justify-between">
          <div className="text-black py-2 px-1">Total Value</div>
          <div className="text-black py-2 px-4 mr-4">
            ₹ {Number(investAmount) + Number(45634)}
          </div>
        </div>
        <div className="text-center">
          <Link
            href={"https://ekyc.aionioncapital.com/aionion/individual1"}
            target="_blank"
          >
            <button className="py-2 px-3 bg-[#5568fe] text-[#ffff] mb-4 rounded-md">
              Get started today
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Calclator;
