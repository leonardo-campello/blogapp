if(process.env.NODE_ENV == 'production') {
    module.exports = { mongoURI: "mongodb+srv://leonardocampello:blogapp@blogapp-prod.s03hu.mongodb.net/blogapp-prod"}
} else {
    module.exports = { mongoURI: "mongodb://localhost/blogapp"}
}