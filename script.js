alert("Добро пожаловать в игру Спасение! Стань героем и спаси жителей деревни от Захватчиков!");

training = confirm("Я могу показать тебе что и где находиться. Если тебе нужно обучение то нажми 'Oк'. Если ты справишься сам, то просто нажми 'Отмена'.");

while (training) {
    alert("Меня зовут Леона, сегодня я буду твоим проводником в мире Магов.");
    alert("Для начала воспользуйся кнопкой 'Создать Героя'.");
    alert("Для просмотра Характеристик Героя до или после битвы используй кнопку 'Характеристики Героя'.");
    alert("Для начала битвы используй кнопки Сражения с противниками (их 3).");
    alert("Для начала битвы со случайным противником используй кнопку 'Случайный противник'.");
    alert("Для покупок в магазине используй кнопку 'Магазин'.");
    alert("Если тебе интересна наша история, то нажми на название игры.");
    alert("Я поведала тебе все тайны. Побеждай противников, получай деньги, повышай свой уровень. Страна Магов Клевера будет гордиться тобой!");
    break;
}

var hero = {
    nameHero: "",
    power: 10,
    mana: 100,
    money: 10
}

var enemys = [
    { enemy: "Vermilia", power: 25, mana: 100, money: 30 },
    { enemy: "Angry Berserk", power: 150, mana: 100, money: 50 },
    { enemy: "Blue Witch", power: 10, mana: 100, money: 20 },
]

function history() {
    alert("Когда в людях проснулась способность управлять магией стихий, люди стали вести жестокие войны друг с другом... С течением времени, после войн и битв, было основано Королевство Магии в котором в мире стали сосуществовать 4 страны: Страна Магов Клевера, Страна Магов Черви, Страна Магов Пик и Страна Магов Буб.");
    alert("На окраине страны Магов Клевера находилась непреметная деревня Хейдж, маленькая, но плодородная. Соседняя страна Магов Черви решила расширить свои владения и захватить деревню, отправив туда своих лучших воинов.");
    alert("Стань Героем Страны Магов Клевера и отвоюй деревню у захватчиков!");
}

function createHero() {
    let Name = prompt("Введи свое имя дабы люди Страны Магов Клевера могли славить твое имя!");
    alert(`Добро пожаловать в Герои, ${Name}!!!`);
    hero.nameHero = Name;
}

function charactHero() {
    alert(`${hero.nameHero}, твоя сила равна ${hero.power}, твоя мана равна ${hero.mana}, а твой кошелек полон на ${hero.money} монет.`);
}

function shop() {
    let Market = prompt(`Добро пожаловать в магазин! Сейчас у вас есть ${hero.money} монет. Выберите необходимый вам продукт: \r\n 1 - 'Magic Arrows', price: 20, power: 15; \r\n 2 - 'Magic Armor', price: 50, power: 50; \r\n 3 - 'Frog', price: 10, power: 10 `);
    switch (Market) {
        case "1":
            if (hero.money < 0 || hero.money < 20) {
                alert("Вы недостаточно богаты! Сразитесь с противником и возвращайтесь!");
            }
            else {
                hero.money -= 10;
                hero.power += 15;
                alert(`Вы приобрели "Magic Arrows", ваш кошелек полон на ${hero.money}, ваша сила ${hero.power}`);
            };
            break;
        case "2":
            if (hero.money < 0 || hero.money < 50) {
                alert("Вы недостаточно богаты! Сразитесь с противником и возвращайтесь!");
            }
            else {
                hero.money -= 50;
                hero.power += 50;
                alert(`Вы приобрели 'Magic Armor', ваш кошелек полон на ${hero.money}, ваша сила ${hero.power}`);
            };
            break;
        case "3":
            if (hero.money < 0 || hero.money < 10) {
                alert("Вы недостаточно богаты! Сразитесь с противником и возвращайтесь!");
            }
            else {
                hero.money -= 10;
                hero.power += 10;
                alert(`Вы приобрели 'Frog', ваш кошелек полон на ${hero.money}, ваша сила ${hero.power}`);
            };
            break;
        default:
            alert("Ваш выбор для нас загадка!");
            break;
    }
}

function duelWithEnemy(id_enemy_fight) {
    for (let i = 0; i < enemys.length; i++) {
        power = enemys[id_enemy_fight].power;
        mana = enemys[id_enemy_fight].mana;
        money = enemys[id_enemy_fight].money;
        numberOfStrokesEnemy = hero.mana / power;
        numberOfStrokesHero = mana / hero.power;
        if (numberOfStrokesEnemy < numberOfStrokesHero) {
            alert("Вы проиграли! Но не отчаивайтесь, посетите магазин и возвращайтесь!");
            break;
        }
        else {
            hero.money += enemys[id_enemy_fight].money;
            alert(`Вы сразили врага! \r\nТеперь ваш кошелек полон на ${hero.money} монет!`);
            break;
        }
    }
}

function randomDuelWithEnemy() {
    count = enemys.length;
    if(hero.power > 70) {
        let randomValue = Math.floor(Math.random() * count);
        duelWithEnemy(randomValue);
    }
    else {
        alert("Повысьте уровень силы чтобы иметь возможность сразится!");
    }
}