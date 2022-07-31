
export default function checkPrize(arr, user) {

    //............test
    // arr = {
    //     '2': 4,
    // }

    for (let key in arr) {

        // 13 -подкова
        if (Number(key) === 13 && arr[key] === 1) {
            let win = 1
            let msg = `Подкова на счастье!!! +${win}$`
            setWin(win, msg, user, arr, key, winRotate)
        }

        // 10 - череп и кости
        if (Number(key) === 10 && arr[key] === 1) {
            let win = -1
            let msg = `Череп и кости :( минус ${win}$`
            setWin(win, msg, user, arr, key, winRotate)
        }

        // просто два одинаковых
        if (arr[key] === 2) {
            let win
            let msg

            if (Number(key) === 17) {
                // titty
                win = 5
                msg = `Одна пара titty хорошо, а две пары titty лучше :))) +${win}$`
            }

            else if (Number(key) === 9) {
                //9 -сердце
                win = 4
                msg = `От сердца с любовью! :))) +${win}$`
            }
            else {
                win = 2
                msg = `Просто два одинаковых!!! +${win}$`
            }

            setWin(win, msg, user, arr, key, winRotate)

        }

        if (arr[key] === 3) {
            let win = 9
            let msg = `ТРИ одинаковых!!! +${win}$`
            setWin(win, msg, user, arr, key, winRotate)
        }

        if (arr[key] === 4) {
            let win = 50000
            let msg = `МИНИ ДЖЕК-ПОТ !!! +${win}$`
            setWin(win, msg, user, arr, key, winRotate)
        }

        if (arr[key] === 5) {
            let win = 100000
            let msg = `ВЫ СОРВАЛИ ДЖЕК-ПОТ:))) +${win}$`
            setWin(win, msg, user, arr, key, winRotate)
        }
    }
    if (user.getWinMoney() === 0) {
        user.setClearWinMessage()
        user.setWinMessage('Крути!')
        user.setWinMessage('Повезет в следующий раз!')
    }

}

let winRotate = (key) => {
    let winImg = document.querySelectorAll('#win' + key)
    // console.log(winImg);
    winImg.forEach(element => {
        element.classList.add('rotated')
        setTimeout(() => {
            element.classList.remove('rotated')
        }, 4000);
    });
}

function getTime() {
    let dateNow = new Date();
    // let optionsN = {
    //     year: 'numeric', month: 'short', day: 'numeric', second: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
    // };
    let optionsN = {
        second: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
    };
    dateNow = dateNow.toLocaleString('ru-US', optionsN)
    return dateNow
}

function setWin(win, msg, user, arr, key, winRotate) {
    user.setMoney(user.getMoney() + win)
    user.setWinMoney(user.getWinMoney() + win)
    user.setWinAllMoney(user.getWinAllMoney() + win) // общий выйгрыш за все раунды
    user.setWinArr({
        'round': user.getRounds(), 'time': getTime(), 'winImg': key, 'winAmount': arr[key], 'winMoney': win
    })
    user.setWinMessage(msg)

    winRotate(key)
}