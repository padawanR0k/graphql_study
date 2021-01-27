require('dotenv').config();

const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const UserAPI = require('./datasources/user')
const RestroomAPI = require('./datasources/restroom')

const resolvers = require('./resolvers')
const mysqlx = require('@mysql/xdevapi');
const express = require('express');
const cors = require('cors');

const app = express();

app.use('*', cors());


const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		// launchAPI: new LaunchAPI(),
		restroomAPI: new RestroomAPI(),
		// userAPI: new UserAPI({ store }),
	})
});
server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 7777 })
