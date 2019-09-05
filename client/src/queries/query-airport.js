import gql from 'graphql-tag'

export default gql`
  query airport ($id: String!) {
    airport(airportCode:$id) {
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