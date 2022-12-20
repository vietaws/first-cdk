// install aws-sdk
// npm i aws-sdk

// import {S3} from 'aws-sdk'
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3'

// const s3Client2 = new S3()
const s3Client3 = new S3Client({ region: "ap-southeast-1" })

const handler = async (event : any, context : any) =>{
    // const buckets = await s3Client2.listBuckets().promise()
    const buckets = await s3Client3.send(new ListBucketsCommand('*'))
    console.log("I got an event")
    return {
        statusCode: 200,
        body: JSON.stringify('Here is the buckets: ' + JSON.stringify(buckets.Buckets))
    }
}
export  {handler}