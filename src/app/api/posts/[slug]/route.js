import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//GET SINGLE POST
export async function GET(req, { params }) {
  const {slug} = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      includes: { user: true },
    });
    
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
}
