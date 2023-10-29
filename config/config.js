



/*const config = {
env: process.env.NODE_ENV || 'development', 
port: process.env.PORT || 3000,
jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
mongoUri: process.env.MONGODB_URI ||
process.env.MONGO_HOST ||
'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
'/mernproject' 
}
export default config*/

//mongodb+srv://SarbjitK:<password>@cluster0.yqqmxqg.mongodb.net/?retryWrites=true&w=majority

//"mongodb+srv://Blessing:qzzJjISAcwfPklIo@cluster0.txlxgvp.mongodb.net/Skeleton?retryWrites=true&w=majority"

const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 8080,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://SarbjitK:080591Sarb@cluster0.yqqmxqg.mongodb.net/DressStore?retryWrites=true&w=majority"||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
    (process.env.MONGO_PORT || '27017') +
    '/mernproject' 
    }
    export default config
    
