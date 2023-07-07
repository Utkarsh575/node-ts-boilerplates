import config from "../../config";
import { ObjectId } from 'mongodb';
import database from '../../loaders/database';
import {User} from "./auth-model"
import { RESOURCE_NOT_FOUND ,DUPLICATE_USER} from "../../shared/errors";

export async function getUser(user:User){
    const dbData = await (await database())
    .collection("users")
    .findOne({username:user.username})
    if(dbData===null) throw RESOURCE_NOT_FOUND
    return dbData;
}

export async function getUserByEmail (user:User){
    const dbData = await(await database())
    .collection("users")
    .findOne({email:user.email})
    if(dbData===null) throw RESOURCE_NOT_FOUND
    return dbData;
}

export async function addUser(user:User) {
    const dbData = await(await database())
    .collection("users")
    .insertOne({username:user.username,email:user.email,password:user.password})
    return user.email;
}