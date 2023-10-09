import prisma from "@/lib/prisma";
import Image from "next/image";

async function fetchAPost(postId: string) {
  const post = await prisma.post.findFirst({
    where: {
      id: parseInt(postId)
    },
    include: {author: true}
  })

  return post
}

export default async function PostPage({ params }: any) {
  const post = await fetchAPost(params.postId);
  if(!post) return null

  const date = new Date(post.updatedAt);

  return (
    <div className="flex-1">
      <div className="w-[900px] mx-auto p-8">
        <div className="space-y-8">
          <div>
            <h1 className="font-extrabold text-4xl capitalize">{post.title}</h1>
            <p className="text-gray-400">{`${date.toDateString()} `}</p>
            <div className="flex items-center gap-2">
              <div className="aspect-square h-[50px] w-[50px] rounded-full border border-gray-500">
                <Image
                  src={post.author.avatar}
                  alt={`${post.id}`}
                  width={165}
                  height={165}
                  style={{ height: "100%", width: "100%" }}
                  className="rounded-full"
                />
              </div>
              <span className="font-medium">{post.author.name}</span>
            </div>
          </div>

          <Image
            src={post.url}
            alt={`${post.id}`}
            width={165}
            height={10}
            style={{ height: "500px", width: "100%" }}
            className="rounded-lg"
          />

          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            culpa. At, facere commodi modi natus inventore eius deserunt,
            molestias alias laudantium perferendis adipisci labore a quam nihil
            quos, quasi error.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            pariatur quidem et expedita asperiores, magnam maiores in iste
            voluptas laborum porro labore possimus velit voluptatem dolores
            tenetur nostrum qui! Quia culpa modi harum earum quam quibusdam
            velit, recusandae inventore accusamus voluptate nulla vero, placeat
            magni corrupti? Expedita cumque tenetur recusandae architecto
            sapiente dolores perferendis ullam numquam suscipit voluptates
            reiciendis cum, quis rem optio quaerat ea atque quos sequi sunt
            maxime?
          </p>
        </div>
      </div>
    </div>
  );
}
