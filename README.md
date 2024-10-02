# NextJS - Docker Project

## TECH STACKS:

### Libraries:

- [Next.js - v14.0.4](https://nextjs.org/): A React framework for building full-stack web applications with server-side rendering and static site generation.
- [React - v18.2.0](https://react.dev/learn): A JavaScript library for building user interfaces.
- [React Query - v5.17.9](https://tanstack.com/query/latest/docs/framework/react/overview): A library for managing server state in React applications.
- [Shadcn/ui - v0.5.0](https://ui.shadcn.com/): A collection of re-usable components built using Radix UI and Tailwind CSS.
- [React Hook Form - v7.49.2](https://react-hook-form.com/): A library for managing form state in React applications.
- [Tailwind CSS - v3.3.0](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom user interfaces.
- [Framer Motion - v10.16.16](https://www.framer.com/motion/): A production-ready motion library for React.
- [Lucide React - v0.302.0](https://lucide.dev/): A set of beautifully crafted open-source icons for React applications.

### Testing

- [Vitest - v2.0.5](https://vitest.dev/): A Vite-native unit test framework with a focus on speed and simplicity.
- [@testing-library/react - v14.1.2](https://testing-library.com/): Simple and complete testing utilities that encourage good testing practices for React components.

### Debug Tools

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi): Chrome DevTools extension for inspecting React component hierarchies.
- [Tanstack Query Devtools](https://tanstack.com/query/latest/docs/plugins/devtools): A tool for debugging React Query queries and mutations.

## Getting Started

### Prerequisites:

Ensure you have Node.js (v20.x or later) and Yarn installed on your system.

### Running the Project

To run the project locally, follow these steps:

1. Install dependencies:

   ```
   yarn install
   ```

2. Start the development server:

   ```
   yarn dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

For production builds:

1. Build the project:

   ```
   yarn build
   ```

2. Start the production server:
   ```
   yarn start
   ```

### Running Storybook

To run Storybook for this project, follow these steps:

1. Make sure you have installed all dependencies:

   ```
   yarn install
   ```

2. Start Storybook:

   ```
   yarn storybook
   ```

3. Open your browser and navigate to `http://localhost:6006` to view the Storybook interface.

This will launch Storybook on port 6006 by default. You can explore and interact with your components in isolation within the Storybook environment.

### Running with Docker

To run the project using Docker, follow these steps:

1. Make sure you have Docker and Docker Compose installed on your system.

2. For development:

   ```
   docker-compose up development
   ```

3. For production:

   ```
   docker-compose up production
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

Note: The Docker setup uses the `Dockerfile.prod` for both development and production environments, targeting different stages as specified in the `docker-compose.yml` file.
