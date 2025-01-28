function createNP(id, name, job, gold) {
    const npElement = document.createElement('div');
    npElement.className = 'np-item';
    npElement.setAttribute('data-id', id); // Добавляем data-атрибут
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
    const element = document.querySelector(`[data-id="${id}"]`);
    if (element) {
        element.classList.add('deleted');
        setTimeout(() => element.remove(), 1000);
    }
}

// Пример данных
createNP(1, 'Миха', 'Рыбный торговец', 500);
createNP(2, 'Петя', 'Кузнец', 1000);
createNP(3, 'Валентин', 'Мастер торговли', 2000);