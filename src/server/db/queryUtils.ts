import pool from "./connection";
import type { ResultSetHeader } from "mysql2";

    //To make querys to send to your database, in this case the blog database
export async function SelectQuery<T>(queryString: string, params?: any): Promise<Partial<T>[]> {
    const [results] = await pool.query(queryString, params);
    return results as T[];
}

// export const Query = <T = any>(query: string, values?: any) => {
//     return new Promise((resovle, reject) => {
//         pool.query(query, values, (err, results) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resovle(results)
//             }
//         })
//     })
// }


export async function ModifyQuery<T>(queryString: string, params?: any): Promise<ResultSetHeader> {
    const [results] = await pool.query(queryString, params);
    return results as ResultSetHeader;
}