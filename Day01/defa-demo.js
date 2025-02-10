// Default parameter: ChatGPT
function greet(name = "Chung Trịnh") {
    console.log(`Xin chào, ${name}!`);
}

greet(); // ✅ "Xin chào, Chung Trịnh!"
greet("K23CNT1-ReactJS"); // ✅ "Xin chào, K23CNT1-ReactJS!"
