function firstWord(str) {
  // your code here
	str = str.trim();

    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If there's no space or the string is empty, return the entire string
    if (spaceIndex === -1 || str.length === 0) {
        return str;
    }

    // Return the substring from the start to the first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
