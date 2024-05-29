function startTest() {
    const name = document.getElementById('studentName').value;
    if (name) {
        localStorage.setItem('studentName', name);
        document.getElementById('startForm').classList.add('hidden');
        document.getElementById('careerTestForm').classList.remove('hidden');
    } else {
        alert('Please enter your name');
    }
}

function calculateResults() {
    const form = document.getElementById('careerTestForm');
    const formData = new FormData(form);

    let scores = { A: 0, B: 0, C: 0 };
    for (let [name, value] of formData) {
        scores[value]++;
    }

    const totalQuestions = 10;
    const resultProgramming = Math.round((scores.A / totalQuestions) * 100);
    const resultDesign = Math.round((scores.B / totalQuestions) * 100);
    const resultScience = Math.round((scores.C / totalQuestions) * 100);

    localStorage.setItem('resultProgramming', resultProgramming);
    localStorage.setItem('resultDesign', resultDesign);
    localStorage.setItem('resultScience', resultScience);

    window.location.href = 'results.html';
}

function resetTest() {
    localStorage.clear();
    const radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    radioButtons.forEach(radio => radio.checked = false);
    window.location.href = 'index.html';
}