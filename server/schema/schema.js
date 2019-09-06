const graphql = require('graphql');
const axios = require('axios');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList
} = require('graphql');

const AirportType = new GraphQLObjectType({
  name: 'airport',
  fields: () => ({
    airportName: { type: GraphQLString },
    country: { type: CountryType },
    location: { type: LocationType },
    city: { type: CityType },
    airportCode: { type: GraphQLString }
  })
});

const CountryType = new GraphQLObjectType({
    name: 'country',
    fields: {
        countryName: {type: GraphQLString},
        countryCode: {type: GraphQLString},
    }
})

const LocationType = new GraphQLObjectType({
    name: 'location',
    fields: {
        longitude: {type: GraphQLString},
        latitude: {type: GraphQLString},
    }
})

const CityType = new GraphQLObjectType({
    name: 'city',
    fields: {
        timeZoneName: {type: GraphQLString},
    }
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    airports: {
      type: new GraphQLList(AirportType),
      resolve(parent, args) {
        return axios
          .get('https://api.qantas.com/flight/refData/airport')
          .then(res => res.data);
      }
    },
    airport: {
      type: AirportType,
      args: {
        airportCode: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          // .get('https://api.qantas.com/flight/refData/airport')
          // .then(res => res.data);
          .get('https://api.qantas.com/flight/refData/airport')
          .then(
            res => {
              return res.data.filter(
              airport => {
                return airport.airportCode === args.airportCode
              }
            )[0]
          }
          )
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});