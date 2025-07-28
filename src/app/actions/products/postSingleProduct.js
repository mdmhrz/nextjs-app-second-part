'use server'

import dbConnect, { collectionName } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (postedData) => {
    console.log('from acitons', postedData);
    try {
        const result = await dbConnect(collectionName.USER_INFO).insertOne(postedData);
        revalidatePath('/products');
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString()
        };
    }
    catch (error) {
        console.error('Error posting data:', error);
        throw new Error('Failed to post data');
    }
}