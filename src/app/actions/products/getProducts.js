'use server'

import dbConnect from "@/lib/dbConnect"

export const getProducts = async () => {
    const data = await dbConnect('users').find({}).toArray();
    return data;
}