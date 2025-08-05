import { openai, createAgent } from "@inngest/agent-kit";
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "Gather-Text" },
  { event: "gather/text" },
  async ({ event, step }) => {
    
    
    const Gatherer =  createAgent({
      name:'gatherer',
      system:"You are an expert summarizer. and you summarize into two words.",
      model: openai({model:"gpt-4o"})
    })

    console.log(event.data.text)
    console.log(process.env.OPENAI_API_KEY)

    const {output} = await Gatherer.run(`
        Summarize the following text: ${event.data.text}
      `)

    console.log(output)

    return { output };
  },
);