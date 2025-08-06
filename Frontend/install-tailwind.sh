#!/bin/bash

# Install TailwindCSS and its dependencies
npm install -D tailwindcss@^3.3.2 postcss@^8.4.24 autoprefixer@^10.4.14

# Initialize TailwindCSS (this will create the config files)
npx tailwindcss init -p

echo "TailwindCSS has been installed and configured!"
echo "You can now run 'npm run dev' to start the development server." 