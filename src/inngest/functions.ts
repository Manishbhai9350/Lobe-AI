import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("Gathering Data", "20s");
    await step.sleep("Filtering Data", "10s");
    await step.sleep("Pushing Data", "5s");
    return { message: `Hello ${event.data.email}!` };
  },
);