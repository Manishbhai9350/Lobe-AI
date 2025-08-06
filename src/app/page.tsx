"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {


  const trpc = useTRPC()
  const invok = useMutation(trpc.invoke.mutationOptions())

  const [Text, setText] = useState('')

  function Gather(){

    if(!Text) return;

    invok.mutate({text:Text})
    

    toast.success("Background job invoked")
    setText('')
  }

  return (
    <div className="p-2 gap-4">
      <Input value={Text} onChange={e => setText(e.target.value)} placeholder="Enter Text" />
      <Button onClick={Gather}>
        Gather Text
      </Button>
    </div>
  );
}
