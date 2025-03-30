import Link from 'next/link'

const SignUpPage = () => {
  return (
    <main className="auth-page flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <p className="max-w-md text-sm text-blue-100">
        Authentication is currently running in local fallback mode for development.
      </p>
      <Link href="/" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white">
        Go to home
      </Link>
    </main>
  )
}

export default SignUpPage