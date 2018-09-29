module.exports = {
  query {
    allEvent {
      edges {
        node {
          id
          name
          dateAndTime
          venue
          ticketsLink
          city
          thumbnail {
            id
            url
          }
        }
      }
    }
  }
}