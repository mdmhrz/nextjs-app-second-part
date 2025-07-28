'use server'

import dbConnect, { collectionName } from "@/lib/dbConnect"

export const getProducts = async () => {
    const data = await dbConnect(collectionName.USER_INFO).find({}).toArray();
    return data;
}