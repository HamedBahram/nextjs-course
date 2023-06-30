import EmailSignInForm from '@/app/components/EmailSignInForm'
import GoogleSignInButton from '@/app/components/GoogleSignInButton'

const authErrorMessages = {
  Signin: 'Try signing in with a different account.',
  OAuthSignin: 'Try signing in with a different account.',
  OAuthCallback: 'Try signing in with a different account.',
  OAuthCreateAccount: 'Try signing in with a different account.',
  EmailCreateAccount: 'Try signing in with a different account.',
  Callback: 'Try signing in with a different account.',
  OAuthAccountNotLinked:
    'To confirm your identity, sign in with the same account you used originally.',
  EmailSignin: 'Check your email inbox.',
  CredentialsSignin:
    'Sign in failed. Check the details you provided are correct.',
  SessionRequired: 'Please sign in to access this page.',
  default: 'Unable to sign in.'
}

const getAuthErrorMessage = error => {
  if (!error) return
  return authErrorMessages[error]
    ? authErrorMessages[error]
    : authErrorMessages.default
}

const SignInPage = ({ searchParams }) => {
  const { callbackUrl = '/', error } = searchParams
  const authError = getAuthErrorMessage(error)

  return (
    <section className='py-24'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight'>
            Sign in to your account
          </h1>
        </div>
        <div className='-mx-4 mt-10 flex-auto bg-white p-16 text-sm text-black shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-lg'>
          {authError && (
            <div className='mb-10 rounded-md bg-rose-500 px-3 py-2 text-white'>
              <p>{authError}</p>
            </div>
          )}

          <EmailSignInForm callbackUrl={callbackUrl} />
          <div className='mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <GoogleSignInButton callbackUrl={callbackUrl} />
        </div>
      </div>
    </section>
  )
}

export default SignInPage
