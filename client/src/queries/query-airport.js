import gql from 'graphql-tag'

export default gql`
  {
    airports {
      airportCode
      airportName
      location {
        latitude
        longitude
      }
      city {
        timeZoneName
      }
    }
  }
`