"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

export default function Home() {


  const trpc = useTRPC()
  const invok = useMutation(trpc.invoke.mutationOptions())

  function Invoke(){

    const email = prompt('Enter Your Email')?.toString();

    if(!email) return;

    invok.mutate({email})
    
  }

  return (
    <Button onClick={Invoke}>
      Invoke Hallo Job
    </Button>
  );
}
