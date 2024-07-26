import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export async function GET(req) {
 const {searchParams} = new URL(req.url);
 const page = searchParams.get("page");
 const cat = searchParams.get("cat");

 const POST_PER_PAGE = 2;

 const query = {
  take: POST_PER_PAGE,
  skip: POST_PER_PAGE * (page - 1),
  where: {
    ...(cat && {catSlug: cat}),
  }
 }

  try {
    const [posts,count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where: query.where})
    ])
    return NextResponse.json({posts,count}, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}