# qiankun-cli

A CLI tool for quickly scaffolding qiankun-based micro frontend projects.

## Features

*   **Main & Micro App Generation**: Generate both the main application and micro applications with a single command.
*   **Template-based**: Use predefined templates for main apps (e.g., Vue-based qiankun main app) and micro apps (e.g., Vue-based qiankun sub app).
*   **Interactive Setup**: Guided prompts to configure your project name, description, and author.
*   **Quick Start**: Get your qiankun micro frontend project up and running in seconds.

## Usage

### Prerequisites

*   Node.js (version specified if needed)
*   npm or yarn

### Installation

```bash
npm install -g qiankun-cli
# or
yarn global add qiankun-cli
```

### Create a new project

```bash
qiankun-cli init
```
This will prompt you to enter details for your main project and micro project.

### Run your projects

After initialization, navigate to your main project directory and install dependencies:
```bash
cd <your-main-project-name>
npm install # or yarn install
```

Then, navigate to your micro project directory and install dependencies:
```bash
cd ../<your-micro-project-name>
npm install # or yarn install
```

You can then start developing your qiankun micro frontend application!

## Templates

Currently supported templates:

*   **Main App**: `vue-main` (A Vue-based qiankun main application)
*   **Micro App**: `vue-micro` (A Vue-based qiankun micro application)

More templates will be added in the future.

## Contributing

Contributions are welcome! Please read the contributing guidelines (if you have any).

## License

ISC