import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "substantive_project/server/api/trpc";

type Interaction = {
    date: string;
    name: string;
    sector_id: string;
};

type Data = {
    interactions: Interaction[];
};


export const substantiveRouter = createTRPCRouter({
    getData: publicProcedure
       .query(async ({ input }) => {
         
            console.log("getting response!")
            const response = (await fetch('https://substantive.pythonanywhere.com/'));
            if (!response.ok) {
              throw new Error(`Request failed with status: ${response.status}`);
            }
            console.log("response got")
        
            const data = await response.json() as Data
            return data
    
        })

});
