import gql from 'graphql-tag'

export default gql`
  {
    airports {
        airportName
        country {
            countryName
        }
        airportCode
    }
  }
`