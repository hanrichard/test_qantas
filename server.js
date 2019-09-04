const express = require('express')
const schema = require('./server/schema/schema')
const cors = require('cors')


const expressGraphQL = require('express-graphql')

const app = express();

app.use('/graphql', cors(), expressGraphQL({
    schema, 
    graphiql: true
}))

app.listen(4000, ()=> {
    console.log('listening')
});