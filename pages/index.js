import { withAuthenticator} from '@aws-amplify/ui-react'
import React from 'react'

function Home({signOut, user}) {
  return (
  <>
    <h1>Hello {user.username}</h1>
    <Button onClick={signOut}>sign Out </Button>
  </>
  )
}

export default withAuthenticator(Home)