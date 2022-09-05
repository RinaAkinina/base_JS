function playOneSeasons() {
    const questionForUser = Number(prompt('Введите номер месяца, и вы узнаете к какому времени года он относится'));
    if (questionForUser >= 1 && questionForUser <= 2 || questionForUser === 12) {
        return (alert(`Это зима!`));
    }
    if (questionForUser >= 3 && questionForUser <= 5) {
        return (alert(`Это весна!`));
    }
    if (questionForUser >= 6 && questionForUser <= 8) {
        return (alert(`Это лето!`));
    }
    if (questionForUser >= 9 && questionForUser <= 11) {
        return (alert(`Это осень!`));
    } else {
        return (alert(`В году 12 месяцев, дружок! Выбери любой от 1 до 12`));
    }
}
function playTwoRememberWord() {
    const arrFruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    arrFruit.sort(() => Math.random() - 0.5);
    alert(`Запомни порядок слов: ${arrFruit} `);
    const firstQuestion = prompt('Чему равнялся первый элемент массива? ').toLowerCase().trim();
    const secQuestion = prompt('Чему равнялся последний элемент массива? ').toLowerCase().trim();
    if (firstQuestion === arrFruit[0].toLowerCase().trim() && secQuestion === arrFruit[arrFruit.length - 1].toLowerCase().trim()) {
        return (alert(`Поздравляем! Вы выиграли!`));
    }
    if (firstQuestion === arrFruit[0].toLowerCase().trim() || secQuestion === arrFruit[arrFruit.length - 1].toLowerCase().trim()) {
        return (alert(`Вы были близки к победе!`));
    } else {
        return (alert(`К сожалению, Вы проиграли, попробуйте еще раз.`));
    }
}
function playThreePuzzle() {
    const answer = 'человек';
    let attemptsLeft = 3,
        help = 2,
        i = 1;
    while (i <= attemptsLeft) {
        const userAnswer = prompt('Отгадайте загадку: Утром — на четырех ногах,в полдень — на двух,вечером — на трех.').toLowerCase();
        if (userAnswer === answer) {
            alert('Поздравляю, ты угадал!');
            break;
        } else if (i < attemptsLeft && i < help) {
            alert(`Не угадал! Подсказка: это не что-то, а кто-то! У вас осталось ${attemptsLeft - i} попытки`)
        } else if (i < attemptsLeft && i === help) {
            alert(`Не угадал! Подсказка: изучением этих существ занимается наука - антропология. У вас осталось ${attemptsLeft - i} попытка`)
        } else {
            alert('У вас закончились попытки, вы проиграли!');
        }
        i += 1;
    }
}
