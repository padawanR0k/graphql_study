const { gql } = require('apollo-server');


const typeDefs = gql`
	type Query {
		restrooms: [Restroom]
		searchRestrooms(
			lat: Float!,
			lng: Float!
		): [SearchedRoom]
	}

	type Restroom {
		ID: Int!
		TYPE: String
		TITLE: String
		ADDR_ROAD: String
		ADDR: String
		SHARD: String
		MAN_TOILET: Int
		MAN_URINAL: Int
		MAN_TOILET_D: Int
		MAN_URINAL_D: Int
		MAN_TOILET_C: Int
		MAN_URINAL_C: Int
		WAMAN_TOILET_C: Int
		WAMAN_TOILET_C_0: Int
		WAMAN_TOILET_C_1: Int
		MANEGEMENT: String
		TEL: String
		TIME: String
		YEAR: String
		LATITUDE: Float
		LONGITUDE: Float
		TIMESTAMP_U: String
		CHARGE_CODE: String
		CARGE_TITLE: String
		LOCATION: Int
	}

	type SearchedRoom {
		ID: Int
		TITLE: String
		DIST: Int
		LAT: Float
		LNG: Float
	}

`;
// ! - null이 될수없는 값
// [] - 배열


module.exports = typeDefs;