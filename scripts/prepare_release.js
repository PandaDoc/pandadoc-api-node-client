const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'README.md');

// Remove Documentation for API Endpoints section from README.md
try {
  const fullDescription = fs.readFileSync(filePath, 'utf8');

  const fromIndex = fullDescription.indexOf(
    '### Documentation for API Endpoints',
  );
  const toIndex = fullDescription.indexOf('## License');

  if (fromIndex === -1 || toIndex === -1) {
    console.log('README.md: markers not found, no changes made');
    process.exit(0);
  }

  const description =
    fullDescription.slice(0, fromIndex) + fullDescription.slice(toIndex);
  fs.writeFileSync(filePath, description, 'utf8');
  console.log('README.md was updated');
} catch (err) {
  console.error(err);
  process.exit(1);
}
