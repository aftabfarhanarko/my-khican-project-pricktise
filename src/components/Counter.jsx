import { CookingPot, Presentation, ScrollText } from "lucide-react";
import React from "react";

const Counter = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="border-4 border-dotted border-amber-400 rounded-2xl p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Presentation className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Currently Cooking
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Ready for Serve
            <h2 className="text-6xl font-bold">{0}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
