# Cryptonarrative - CryptoScrapper Frontend

Cryptonarrative is a Next.js frontend application that interfaces with the CryptoScrapper .NET API to display cryptocurrency narratives. It provides a clean interface to browse and explore different crypto narratives fetched from the API.

## Features

- Fetches and displays cryptocurrency narratives from CryptoScrapper .NET API
- Shows narrative details and related information
- Category-based filtering of narratives
- Responsive design for all devices
- Fast, server-rendered performance with Next.js

## Technology Stack

- **Framework**: Next.js 15.2.3
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Class Utilities**: clsx, class-variance-authority, tailwind-merge
- **Linting**: ESLint
- **API**: [CryptoScrapper .NET](https://github.com/QyperXit/cryptoscrapper)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/cryptonarrative.git
   cd cryptonarrative
   ```

2. Install dependencies using pnpm:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Home Page**: Displays a list of cryptocurrency narratives from CryptoScrapper API
- **Category Selector**: Filter narratives by category
- **Narrative Cards**: View narrative details and related information
- **Search**: (Future feature) Search for specific narratives

## Development

- Run the development server:

  ```bash
  pnpm dev
  ```

- Build for production:

  ```bash
  pnpm build
  ```

- Start the production server:

  ```bash
  pnpm start
  ```

- Lint the code:
  ```bash
  pnpm lint
  ```
