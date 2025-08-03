import { prisma } from "@/lib/db";


export default async function Home() {

  const Users = await prisma.user.findMany()
  const Posts = await prisma.post.findMany()
  return (
    <div className="">
      Users
      {JSON.stringify(Users)}

      Posts
      {JSON.stringify(Posts)}
    </div>
  );
}
