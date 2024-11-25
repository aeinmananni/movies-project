import {MoviesType } from "@/pages/models/models";
import mySqlData from "@/pages/start/db";
import { NextApiRequest,NextApiResponse } from "next";


export default async function handler(req:NextApiRequest,res:NextApiResponse){
    const result = await mySqlData<MoviesType[]>(`EXECUTE movies.getAllMovies`);
    res.status(200).json(result.recordset);
}