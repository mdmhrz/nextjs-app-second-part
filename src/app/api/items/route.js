import dbConnect from "@/lib/dbConnect";

export const dynamic = 'force-static'

export async function GET() {
    const data = await dbConnect('users').find({}).toArray();

    return Response.json(data)
}

export async function POST(req) {
    const postedData = await req.json();
    const data = await dbConnect('users').insertOne(postedData);


    return Response.json({ postedData })
}