import gql from 'graphql-tag'

export default gql`
  {
    airports {
      airportCode
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