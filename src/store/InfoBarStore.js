import { makeAutoObservable } from 'mobx'

export default class InfoBarStore {
    _start = false
    turn = 'false'
    _scores = []
    _rounds = 0
    _money = 0 // ставка игрока
    _winMoney = 0 // выйгрыш текущего раунда - одна прокрутка
    _winArr = [] // массив номеров после прокрутки
    _winAllMoney = 0 // общ выйгрыш за раунды - сделал ставку и крутишь
    _autoRounds = false

    constructor() {
        // this.start = false
        // this.turn = 'false'
        // this.scores = []
        makeAutoObservable(this)
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
        // console.log(this._winArr);
    }
    setDelWinArr() {
        this._winArr = []
    }
    setAutoRounds(bool) {
        this._autoRounds = bool
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
}
