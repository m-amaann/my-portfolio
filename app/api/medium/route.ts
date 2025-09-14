import { NextResponse } from "next/server";
import { getMediumPosts } from "@/lib/getMediumPosts";

export async function GET() {
  try {
    const posts = await getMediumPosts();
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error("Error fetching Medium posts:", err);
    return NextResponse.json(
      { error: "Failed to fetch Medium posts" },
      { status: 500 }
    );
  }
}
