import {v4} from 'uuid'

exports.handler = async(event : any, context : any) =>{
    return {
        statusCode: 200,
        body: JSON.stringify('Hello from TypeScript ' + v4())
    }
}