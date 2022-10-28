import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import { getServerAuthSession } from "../../server/common/get-server-auth-session";

export default async function addPostToCollection(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerAuthSession({ req, res });

  if (!session) {
    res.statusCode = 401;
    res.json({ Error: "User not logged in." });
    return;
  }

  const prisma = new PrismaClient();
  const { postId, collectionId } = req.query;

  if (!postId) {
    res.statusCode = 400;
    res.json("Give me a post for the collection");
    return;
  }

  const postToAdd = await prisma.post.findFirst({
    where: {
      id: String(postId),
    },
  });

  if (!postToAdd) {
    res.statusCode = 400;
    res.json("Invalid PostID");
    return;
  }
  // get existing posts

  const resStatus = await prisma.collection.update({
    where: {
      id: collectionId?.toString(),
    },
    data: {
      posts: {
        disconnect: { id: postToAdd.id },
      },
    },
  });

  res.json({ success: true });
}