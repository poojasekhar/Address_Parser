#### 1. What assumptions about the format of the addresses in the input file did you make?

- The addresses are separated by at least two newlines.
- Each address has an address1 and city-state-zip line.
- If an address has more than these two lines, the additional line is considered as the address2 field.
- The address2 field does not contain a comma.
- The city-state-zip line always contains one comma separating the city and the rest.

#### 2. What aspects of your solution make it a robust choice?

- The solution checks for the existence of an address2 field dynamically based on the content of each address block.
- White spaces and empty lines are handled gracefully by trimming and filtering.
- The solution utilizes regular expressions to split addresses based on multiple newlines, accommodating addresses that may have extra spaces.

#### 3. What are some potential drawbacks that might exist in your chosen solution?

- The parser makes some hard assumptions about the content structure. If the input deviates (like having commas in address2), the parser will fail or produce incorrect results.
- Address blocks with more than three lines (excluding empty lines) will not be parsed correctly.

#### 4. How might your approach differ if the input file was too large to fit into memory?

- I would read the file in chunks or lines using streams.
- After reading each line, I'd append it to a buffer until detecting an address separator (multiple newlines). Once an address block is complete, it would be processed and cleared from the buffer.
- This approach allows the parser to handle large files without consuming excessive memory, processing each address as soon as it's completely read.
