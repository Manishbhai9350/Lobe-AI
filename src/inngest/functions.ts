import { createAgent, gemini } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Gather-Text" },
  { event: "gather/text" },
  async ({ event, step }) => {
    
    
    const Gatherer =  createAgent({
      name:'gatherer',
      system:"You are an expert and industry level developer",
      model: gemini({model:'gemini-1.5-flash'})
    })

    console.log(event.data.text)
    console.log(process.env.OPENAI_API_KEY)

    const {output} = await Gatherer.run(`
        Do the following: ${event.data.text}
      `)

    console.log(output)

    return { output };
  },
);