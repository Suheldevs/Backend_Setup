// class ApiResponse {
//     constructor(statusCode, data, message="Success"){
//         this.statusCode = statusCode
//         this.data = data
//         this.message = message
//         this.success = statusCode < 400
//         if (meta) this.meta = meta;
//     }
// }


const ApiResponse = (statusCode, data = null, message = "Success", meta = null) => {
    return {
        statusCode,
        success: statusCode < 400,
        message,
        data,
        ...(meta && { meta }),
        timestamp: new Date().toISOString(),
    };
};

export {ApiResponse}