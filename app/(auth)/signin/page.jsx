import EmailSignInForm from '@/app/components/EmailSignInForm'
import GoogleSignInButton from '@/app/components/GoogleSignInButton'

const SignInPage = () => {
  return (
    <section className='flex min-h-full overflow-hidden pt-16 sm:py-28'>
      <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
        <div className='relative mt-12 sm:mt-16'>
          <h1 className='text-center text-2xl font-medium tracking-tight'>
            Sign in to your account
          </h1>
        </div>
        <div className='-mx-4 mt-10 flex-auto bg-white px-4 py-10 text-sm text-black shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-lg sm:p-24'>
          <EmailSignInForm />
          <div className='mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <GoogleSignInButton />
        </div>
      </div>
    </section>
  )
}

export default SignInPage
