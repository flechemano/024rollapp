const fs = require('fs');

// Check if the required testing dependencies are installed
const checkDependencies = () => {
  const requiredDependencies = ['@testing-library/react', '@testing-library/jest-dom', 'react', 'react-dom'];

  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
  const dependencies = Object.keys(packageJson.dependencies || {});

  const missingDependencies = requiredDependencies.filter(dep => !dependencies.includes(dep));

  if (missingDependencies.length > 0) {
    console.log('Missing testing dependencies:', missingDependencies.join(', '));
    console.log('Please install them using npm or yarn.');
    return false;
  }

  return true;
};

// Check if the test file contains correct imports
const checkTestFile = () => {
  const testFilePath = 'src/App.test.js'; // Adjust this path as needed
  const requiredImports = ['React', 'render', 'screen'];

  const fileContent = fs.readFileSync(testFilePath, 'utf-8');

  const missingImports = requiredImports.filter(dep => !fileContent.includes(dep));

  if (missingImports.length > 0) {
    console.log('Missing imports in the test file:', missingImports.join(', '));
    console.log('Please edit the test file to include the missing imports.');
    return false;
  }

  return true;
};

// Run the checks
const allDependenciesInstalled = checkDependencies();
const correctImportsInTestFile = checkTestFile();

if (allDependenciesInstalled && correctImportsInTestFile) {
  console.log('Test setup looks good!');
}
