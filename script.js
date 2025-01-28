// Вспомогательные функции
function createNP(id, name, job, gold) {
    const npElement = document.createElement('div');
    npElement.className = 'np-item';
    npElement.innerHTML = `
        <strong>ID:</strong> ${id}<br>
        <strong>Имя:</strong> ${name}<br>
        <strong>Занятие:</strong> ${job}<br>
        <strong>Золотая сумма:</strong> ${gold}$<br>
        <button onclick="deleteNP(${id})">Удалить</button>
    `;
    document.getElementById('np-list').appendChild(npElement);
}

function deleteNP(id) {
    const npList = document.getElementById('np-list');
    const element = document.querySelector(`.np-item:not(.deleted)`);
    if (element && element.id === id) {
        element.classList.add('deleted');
        setTimeout(() => element.remove(), 1000);
    }
}

// Пример добавления НПС
createNP(1, 'Миха', 'Рыбный торговец', 500);
createNP(2, 'Петя', 'Золотойsmith', 1000);
createNP(3, 'Валентин', 'Master Trade', 2000);

// will be replaced with dynamic content in future