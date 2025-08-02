import { connectDB } from "@/config/db";
import Product from "@/models/FeaturedProductSchema";


function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find().sort({ createdAt: -1 });
    return jsonResponse(products);
  } catch (error) {
    console.error("GET /api/products error:", error);
    return jsonResponse({ message: "Server error" }, 500);
  }
}


export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();
  const product = await Product.create(body);
  return jsonResponse(product);
}
