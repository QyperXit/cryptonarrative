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
- **API**: CryptoScrapper .NET

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

## Deployment

Deploy using [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.
