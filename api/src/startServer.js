import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';


async function startServer({ typeDefs, resolvers }) {
    await mongoose.connect("mongodb://127.0.0.1:27017/graphql",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const server = new ApolloServer({ typeDefs, resolvers })

    startStandaloneServer(server,
        {
            listen: { port: 4000 }
        }
    ).then(({url})=>{
        console.log(`🚀  Server ready at: ${url}`);
    });
}


export default startServer;