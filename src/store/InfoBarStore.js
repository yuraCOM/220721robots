import { makeAutoObservable, toJS, when, autorun } from 'mobx'

export default class InfoBarStore {
    audioPush = new Audio(process.env.PUBLIC_URL + '/sounds/hand.mp3');
    audioRound = new Audio(process.env.PUBLIC_URL + '/sounds/tick.mp3');
    audioBid = new Audio(process.env.PUBLIC_URL + '/sounds/bid.mp3');
    audioWinZero = new Audio(process.env.PUBLIC_URL + '/sounds/winzero.mp3');
    audioWin00 = new Audio(process.env.PUBLIC_URL + '/sounds/win0.mp3');
    audioWin01 = new Audio(process.env.PUBLIC_URL + '/sounds/win01.mp3');
    audioWin02 = new Audio(process.env.PUBLIC_URL + '/sounds/win02.mp3');


    constructor() {

        this._start = false
        this.turn = 'false'
        this._scores = []
        this._rounds = 0
        this._money = 0 // ставка игрока = 0
        this._winMoney = 0 // выйгрыш текущего раунда - одна прокрутка
        this._winArr = [] // массив ВСЕХ выйгрышных номеров - отражает внизу страницы
        this._winAllMoney = 0 // общ выйгрыш за раунды - сделал ставку и крутишь
        this._autoRounds = false
        this._winMessadge = ['Крути!', 'Повезет в следующий раз!']
        this._sound = true

        makeAutoObservable(this)

        // when(
        //     () => this._scores.length === 5,
        //     () => {
        //         console.log(toJS(this._scores))
        //     }
        // )
    }


    setStart(start) {
        this._start = start
    }

    setScores(num) {
        this._scores.push(num)

    }

    setClearScores() {
        this._scores = []
    }

    setRounds(rounds) {
        this._rounds = rounds
    }

    setMoney(money) {
        this._money = Number(money)
    }


    setWinMoney(money) {
        this._winMoney = Number(money)
    }

    setWinAllMoney(money) {
        this._winAllMoney = Number(money)
    }

    setWinArr(obj) {
        this._winArr.unshift(obj)
    }

    setDelWinArr() {
        this._winArr = []
    }

    setAutoRounds(bool) {
        this._autoRounds = bool
    }

    setWinMessage(text) {
        this._winMessadge.push(text)
    }

    setClearWinMessage() {
        this._winMessadge = []
    }

    setSound(value) {
        this._sound = value
    }


    getStart() {
        return this._start
    }

    getAutoRounds() {
        return this._autoRounds
    }

    getScores() {
        return this._scores
    }

    getRounds() {
        return this._rounds
    }

    getMoney() {
        return this._money
    }

    getWinMoney() {
        return this._winMoney
    }

    getWinAllMoney() {
        return this._winAllMoney
    }

    getWinArr() {
        // console.log(this._winArr);
        return this._winArr
    }

    getWinMessage() {
        // console.log(this._winMessadge);
        return this._winMessadge
    }

    get sound() {
        return this._sound
    }

}
