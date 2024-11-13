// const config = {
//     env: process.env.NODE_ENV || 'development',
//     port: process.env.PORT || 3000,
//     jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
//     mongoUri: 'mongodb+srv://dhruvesh:dhruv%402150@cluster0.gdtzqq8.mongodb.net/marketplace'
// }

// module.exports = config;

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: process.env.MONGODB_URI ||
        process.env.MONGO_HOST ||
        'mongodb+srv://dhruvesh:dhruv%402150@cluster0.gdtzqq8.mongodb.net/farmersmarket'
}

module.exports = config;