

function marksheet() {
    const name = prompt("Enter your name ");
    const fathername = prompt("Enter your father's name ");
    const age = prompt("Enter your age ");
    const total = parseInt(prompt("Enter your total marks "));
    const obt = parseInt(prompt("Enter your obtained marks "));
    const percentage = (obt / total) * 100;

    let grade = '';
    let remark = '';

    if (percentage >= 90) {
        grade = 'A+';
        remark = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remark = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remark = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remark = 'Fair';
    } else if (percentage >= 50) {
        grade = 'D';
        remark = 'Needs Improvement';
    } else {
        grade = 'F';
        remark = 'Fail';
    }

    const createElement = document.createElement('div');
    createElement.innerHTML = `
        <h3>MARK SHEET</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Father Name:</strong> ${fathername}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Total Marks:</strong> ${total}</p>
        <p><strong>Obt Marks:</strong> ${obt}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Remark:</strong> ${remark}</p>
    `;
    document.body.appendChild(createElement);
    


    createElement.style.border = "2px solid black";
        createElement.style.padding = "20px";
        createElement.style.margin = "20px auto";
        createElement.style.width = "50%";
        createElement.style.backgroundColor = "#f9f9f9";
        createElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
        createElement.style.fontFamily = "Arial, sans-serif";
        createElement.style.textAlign = "center";
    
}

window.onload = marksheet;










