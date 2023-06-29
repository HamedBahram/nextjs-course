import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const UserAvatarButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
  )
}

export default UserAvatarButton
