function removeExtraSpaces() {
          
    var userInput = prompt("Enter a text with extra spaces:");
    
    if (userInput !== null) {
        
        var cleanedInput = userInput.replace(/\s+/g, ' ');

     
    document.write("Text with extra spaces removed: " + cleanedInput);
    }
}


window.onload = removeExtraSpaces;