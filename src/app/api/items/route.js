import dbConnect, { collectionName } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const dynamic = 'force-static'

export async function GET() {
    const data = await dbConnect(collectionName.USER_INFO).find({}).toArray();

    return Response.json(data)
}

export async function POST(req) {
    const postedData = await req.json();
    const data = await dbConnect(collectionName.USER_INFO).insertOne(postedData);
    revalidatePath('/products');
    return Response.json({ data })
}