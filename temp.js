import json2html from "https://your-username.github.io/your-repo/json2html.js";

const data = [
    { Name: "Alice", Age: 25 },
    { Name: "Bob", Age: 30 },
    { Name: "Charlie", Age: 35, Gender: "M" }
];

const tableHTML = json2html(data);
document.body.innerHTML = tableHTML;
