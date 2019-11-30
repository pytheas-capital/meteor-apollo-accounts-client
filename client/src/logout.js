import {getLoginToken, resetStore} from './store'
import gql from 'graphql-tag'

async function(apollo) {
  const token = await getLoginToken()

  if (!token) return

  await apollo.mutate({ // wait for apollo mutate
    mutation: gql`
      mutation logout($token: String!) {
        logout(token: $token) {
          success
        }
      }
    `,
    variables: {
      token
    }
  })
  await resetStore() // move this line afret apollo.mutate
}
