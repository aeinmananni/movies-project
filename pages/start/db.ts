import sql, { IResult } from 'mssql';
import 'dotenv-safe/config';

const config = {
     user:process.env.DB_USERNAME || "",
     password:process.env.DB_PASSWORD || "",
     database:process.env.DB_DATABASE || "",
     server:process.env.DB_SERVER || "",
     options:{
        trustServerCertificate:true
     }
}


const mySqlData = async <T,> (query:string): Promise<IResult<T>>  =>{
     try{
        const pool = await sql.connect(config);
        const result =await pool.request().query(query);
        await pool.close();

        return result;

     }catch(error){
        throw error
     }
}

export default mySqlData