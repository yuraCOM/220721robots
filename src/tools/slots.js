
export default function checkPrize(arr, user) {
    for (let key in arr) {
        if (Number(key) === 13 && arr[key] === 1) {
            let win = 1
            user.setMoney(user.getMoney() + win)
            user.setWinMoney(user.getWinMoney() + win) //выйгрыш раунда - одна прокрутка 

            user.setWinAllMoney(user.getWinAllMoney() + win)

            user.setWinArr({
                'time': getTime(), 'winImg': key, 'winAmount': arr[key], 'winMoney': win
            })
            winRotate(key)
        }

        if (arr[key] === 2) {
            let win

            if (Number(key) === 17) {
                win = 5
                console.log('Сиськи');
            }
            else {
                win = 2
            }

            user.setMoney(user.getMoney() + win)
            user.setWinMoney(user.getWinMoney() + win) //выйгрыш раунда - одна прокрутка 

            user.setWinAllMoney(user.getWinAllMoney() + win)

            user.setWinArr({
                'time': getTime(), 'winImg': key, 'winAmount': arr[key], 'winMoney': win
            })
            winRotate(key)

        }
        if (arr[key] === 3) {
            let win = 9
            user.setMoney(user.getMoney() + win)
            user.setWinMoney(user.getWinMoney() + win)
            user.setWinAllMoney(user.getWinAllMoney() + win) // общий выйгрыш за все раунды

            user.setWinArr({
                'time': getTime(), 'winImg': key, 'winAmount': arr[key], 'winMoney': win
            })
            winRotate(key)
        }

        if (arr[key] === 4) {
            let win = 5000
            user.setMoney(user.getMoney() + win)
            user.setWinMoney(user.getWinMoney() + win)
            user.setWinAllMoney(user.getWinAllMoney() + win) // общий выйгрыш за все раунды

            user.setWinArr({
                'time': getTime(), 'winImg': key, 'winAmount': arr[key], 'winMoney': win
            })
            winRotate(key)
        }

        if (arr[key] === 5) {
            let win = 10000
            user.setMoney(user.getMoney() + win)
            user.setWinMoney(user.getWinMoney() + win)
            user.setWinAllMoney(user.getWinAllMoney() + win) // общий выйгрыш за все раунды
            user.setWinArr({
                'time': getTime(), 'winImg': key, 'winAmount': arr[key], 'winMoney': win
            })
            winRotate(key)
        }
    }
}

let winRotate = (key) => {
    let winImg = document.querySelectorAll('#win' + key)
    winImg.forEach(element => {
        element.classList.add('rotated')
        setTimeout(() => {
            element.classList.remove('rotated')
        }, 5000);
    });
}

function getTime() {
    let dateNow = new Date();
    let optionsN = {
        year: 'numeric', month: 'short', day: 'numeric', second: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false
    };
    dateNow = dateNow.toLocaleString('ru-US', optionsN)
    return dateNow
}