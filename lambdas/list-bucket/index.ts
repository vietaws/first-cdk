// install aws-sdk
// npm i aws-sdk

import {S3} from 'aws-sdk'

// const s3Client = S3.s3Client()

exports.handler = async(event : any, context : any) =>{
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from AWS ')
    }
}