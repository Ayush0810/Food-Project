import { Chart } from "chart.js";
import React from "react";
import { TbBulb } from "react-icons/tb";
function InformationCard(){
    return (
        <div className="mx-auto bg-[oklch(20.8%_0.042_265.755)] shadow-md rounded-2xl 
        w-md h-52 text-3xl  items-start space-y-4  p-4"> 
 <div className="flex items-center space-x-2 w-full ml-2"> 
        <TbBulb className="text-white" />
        <h3 className="text-white text-2xl">Top Daily Recommendation</h3>
    </div>
   <div className="ml-3 ">
    

    <p className="text-xl text-white text-left "> 
        Increase your 
        <span className=" ml-2 text-green-500">
             vegetable intake
        </span>
    </p>
    <p className="mt-1 text-[14px] text-white text-justify mr-2¸">
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, vel quae optio provident quod impedit nostrum veritatis nobis similique accusamus fugit animi ipsam odio voluptatibus accusantium repellendus consequuntur nemo.
    </p>

   </div>
</div>
    )
}

export default InformationCard;