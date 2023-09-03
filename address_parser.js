const fs = require('fs');

const parseAddressFile = path => {
  const content = fs.readFileSync(path, 'utf-8');

  // Split the content by at least two newline characters or spaces to get separate addresses
  const blocks = content.split(/\n\s*\n/).filter(block => block && block.trim());

  return blocks.map(block => {
    const lines = block.split('\n').map(line => line.trim()).filter(line => line);

    // Determine if an address2 field exists
    const hasAddress2 = lines.length > 2 && !lines[1].includes(',');

    // Extract components
    const cityStateZipLine = hasAddress2 ? lines[2] : lines[1];
    const [city, rest] = cityStateZipLine.split(',');
    const [state, zip] = rest.trim().split(' ');

    return {
      address1: lines[0],
      address2: hasAddress2 ? lines[1] : null,
      city: city.trim(),
      state: state.trim(),
      zip: zip.trim(),
    };
  });
};

module.exports = parseAddressFile;
