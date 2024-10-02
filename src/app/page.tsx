export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex flex-col gap-4 max-w-2xl text-center sm:text-left mt-[100px]">
        <h1 className="text-3xl font-bold">Welcome to Our Next.js Project</h1>
        <h2 className="text-xl">
          maintained by Quang Pham{' '}
          <a href="mailto:quangpn.developer@gmail.com">
            quangpn.developer@gmail.com
          </a>
        </h2>
        <p className="text-lg">
          This project is set up with a powerful tech stack including Next.js,
          React Query, Shadcn, and more. Here's how to get started:
        </p>
        <h2 className="text-2xl font-semibold mt-4">Running Locally</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Install dependencies:{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              yarn install
            </code>
          </li>
          <li>
            Start development server:{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              yarn dev
            </code>
          </li>
          <li>
            Visit{' '}
            <a
              href="http://localhost:3000"
              className="text-blue-500 hover:underline">
              http://localhost:3000
            </a>
          </li>
        </ol>
        <h2 className="text-2xl font-semibold mt-4">Storybook</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Start Storybook:{' '}
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
              yarn storybook
            </code>
          </li>
          <li>
            Visit{' '}
            <a
              href="http://localhost:6006"
              className="text-blue-500 hover:underline">
              http://localhost:6006
            </a>
          </li>
        </ol>
        <h2 className="text-2xl font-semibold mt-4">Docker</h2>
        <p>For development:</p>
        <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded">
          docker-compose up development
        </code>
        <p className="mt-2">For production:</p>
        <code className="block bg-gray-100 dark:bg-gray-800 p-2 rounded">
          docker-compose up production
        </code>
        <p className="mt-2">
          Then visit{' '}
          <a
            href="http://localhost:3000"
            className="text-blue-500 hover:underline">
            http://localhost:3000
          </a>
        </p>
      </div>
    </main>
  )
}
