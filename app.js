// Регистрация Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/MySim2/sw.js')
        .then(() => console.log('Service Worker зарегистрирован!'))
        .catch(err => console.log('Ошибка:', err));
}

// Дополнительная логика приложения
console.log('Приложение запущено!');