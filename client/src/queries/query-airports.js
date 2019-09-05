import gql from 'graphql-tag'

export default gql`
  {
    airports {
        airportName
        country {
            countryName
        }
        city {
            timeZoneName
        }
        location {
            longitude
            latitude
        }
        airportCode
    }
  }
`