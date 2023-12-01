import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
import User from "@models/user";

export const GET = async (request) => {
  try {
    await connectToDB();

    const query = request.nextUrl.searchParams.get("query");

    const regex = new RegExp(query, "i");

    const prompts = await Prompt.aggregate([
      {
        $lookup: {
          from: User.collection.name,
          localField: "creator",
          foreignField: "_id",
          as: "creator",
        },
      },
      {
        $match: {
          $or: [
            { "creator.username": regex },
            { prompt: regex },
            { tag: regex },
          ],
        },
      },
      {
        $unwind: "$creator",
      },
    ]);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to search", { status: 500 });
  }
};
