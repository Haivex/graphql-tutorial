const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
} = require('graphql');

//schema how to looks
// obj type how returned object looks => HelloWorld Object with field message
//message has type string and resolve (return) given string

// in localhost page write: query {message}
//resolve can have arguments: parent and args

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {type: GraphQLString, resolve: () => 'Hello World'}
        })
    })
})

const app = express();

app.use('/graphql', graphqlHTTP({schema: schema, graphiql: true}));
app.listen(5000, () => 
  console.log('Server Running')
);
