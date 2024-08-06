function add(numbers) {
    if (!numbers) {
      return 0;
    }
  
    let delimiter = /,|\n/;
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  
    if (customDelimiterMatch) {
      delimiter = new RegExp(customDelimiterMatch[1]);
      numbers = numbers.split('\n').slice(1).join('\n');
    }
  
    let numberArray = numbers.split(delimiter);
    let sum = 0;
    let negativeNumbers = [];
  
    numberArray.forEach(number => {
      let parsedNumber = parseInt(number, 10);
  
      if (isNaN(parsedNumber)) {
        return;
      }
  
      if (parsedNumber < 0) {
        negativeNumbers.push(parsedNumber);
      }
  
      sum += parsedNumber;
    });
  
    if (negativeNumbers.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
    }
  
    return sum;
  }
  
  console.log(add(""));
  console.log(add("1"));
  console.log(add("1,5"));
  console.log(add("1\n2,3"));
  console.log(add("//;\n1;2"));
  
  try {
    console.log(add("1,-2,3")); 
  } catch (e) {
    console.error(e.message);
  }
  
  try {
    console.log(add("-1,-2,3")); 
  } catch (e) {
    console.error(e.message);
  }
  try {
    console.log(add("//;\n1;-2;3")); 
  } catch (e) {
    console.error(e.message);
  }
  