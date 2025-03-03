function convertTemperature(value, conversionType) {
    if (conversionType === "CtoF") {
        if (value < 0 || value > 100) {
            return "Invalid input: Temperature must be between 0°C and 100°C.";
        }
        let degF = (value * 9/5) + 32;
        return `${value}°C is ${degF.toFixed(2)}°F`;
    } 
    else if (conversionType === "FtoC") {
        if (value < 32 || value > 212) {
            return "Invalid input: Temperature must be between 32°F and 212°F.";
        }
        let degC = (value - 32) * 5/9;
        return `${value}°F is ${degC.toFixed(2)}°C`;
    } 
    else {
        return "Invalid conversion type. Use 'CtoF' or 'FtoC'.";
    }
}

console.log(convertTemperature(25, "CtoF")); // Output: "25°C is 77.00°F"
console.log(convertTemperature(100, "CtoF")); // Output: "100°C is 212.00°F"
console.log(convertTemperature(50, "FtoC")); // Output: "50°F is 10.00°C"
console.log(convertTemperature(300, "FtoC")); // Output: "Invalid input: Temperature must be between 32°F and 212°F."
