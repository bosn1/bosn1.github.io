document.addEventListener('DOMContentLoaded', function() {
    // Находим кнопку по ID
    const button = document.getElementById('credoBtn');
    
    // Проверяем, что кнопка найдена
    if (button) {
        button.addEventListener('click', function() {
            alert('«Если что-то работает — значит, ты просто не нашёл способ это сломать»');
        });
    } else {
        console.log('Кнопка с id="credoBtn" не найдена');
    }
});