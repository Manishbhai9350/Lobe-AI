import { caller, getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import Client from "./_components/client";


export default async function Home() {

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.hello.queryOptions({name:'MEOW'}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading....</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
}
