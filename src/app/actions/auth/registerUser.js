'use server'
import dbConnect, { collectionName } from '@/lib/dbConnect';
import React from 'react';

const registerUser = async (payload) => {
    //need to check if username already taken or not
    try {
        const result = await dbConnect(collectionName.USER_CREDENTIALS).insertOne(payload)
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId.toString()
        };
    } catch (error) {
        console.log(error);
        return null
    }



};

export default registerUser;