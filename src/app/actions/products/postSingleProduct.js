'use server'

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (postedData) => {
    console.log('from acitons', postedData);
    try {
        const result = await dbConnect('users').insertOne(postedData);
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