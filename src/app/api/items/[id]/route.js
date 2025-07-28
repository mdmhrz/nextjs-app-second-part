import dbConnect, { collectionName } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
    const p = await params;
    const singleData = await dbConnect(collectionName.USER_INFO).findOne({ _id: new ObjectId(p.id) });
    return Response.json(singleData)
}


export async function PATCH(req, { params }) {
    const p = await params
    const postedData = await req.json();
    const filter = { _id: new ObjectId(p.id) };
    const updatedResponse = await dbConnect(collectionName.USER_INFO).updateOne(filter,
        {
            $set: postedData
        },
        {
            upsert: true
        });
    return Response.json(updatedResponse)
}

export async function DELETE(req, { params }) {
    const p = await params
    const singleData = await dbConnect(collectionName.USER_INFO).deleteOne({ _id: new ObjectId(p.id) });
    return Response.json(singleData)
}
