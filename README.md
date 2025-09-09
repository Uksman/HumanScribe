# HumanScribe - AI Content Humanizer

HumanScribe is a modern web application that transforms AI-generated text into natural, engaging content that feels authentically human. It offers multiple tones and styles to match your desired communication style.

## Features

- Transform AI-generated text into natural human-like content
- 6 different tone options:
  - Casual: Friendly and relaxed
  - Professional: Business-appropriate
  - Creative: Imaginative and engaging
  - Enthusiastic: Energetic and exciting
  - Conversational: Natural dialogue style
  - Humorous: Light and funny
- Real-time text transformation
- Copy-to-clipboard functionality
- Example transformations for quick reference
- Modern, responsive UI built with shadcn/ui

## Technologies Used

This project is built with modern web technologies:

- React 18
- TypeScript
- Vite
- shadcn/ui
- Tailwind CSS
- Radix UI Components
- React Router DOM
- React Hook Form
- Zod for validation

## Getting Started

### Prerequisites

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

1. Clone the repository
```sh
git clone <repository-url>
```

2. Navigate to the project directory
```sh
cd HumanScribe
```

3. Install dependencies
```sh
npm install
```

4. Start the development server
```sh
npm run dev
```

The application will be available at `http://localhost:5173` by default.

## Building for Production

To create a production build:

```sh
npm run build
```

To preview the production build locally:

```sh
npm run preview
```

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run build:dev` - Create development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
  ├── components/     # React components
  │   ├── ui/        # UI components from shadcn/ui
  │   └── ...        # Other components
  ├── hooks/         # Custom React hooks
  ├── lib/           # Utility functions
  ├── pages/         # Page components
  └── ...           # Other source files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.