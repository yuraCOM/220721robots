import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..';
import randcolor from '../../tools/colorText';
import checkPrize from '../../tools/slots';
import RandomItem from '../randomItem/RandomItem';
import './infoBar.css'

const InfoBar = observer(() => {
    const { user } = useContext(Context)
    const [value, setValue] = useState(0);
    const [myColor, setMyColor] = useState('white')

    useEffect(() => {
        if (user.getScores().length === 5) {
            let x = user.getScores()

            // x = [1, 1, 1, 1, 5]
            const countItems = x.reduce((acc, item) => {
                acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
                return acc;
            }, {});

            // обрабатываем ключи объекта
            // const result = Object.keys(countItems).filter((item) => countItems[item] > 1);

            checkPrize(countItems, user)
            user.setStart(false)
        }
    }, [user.getScores().length])


    function manyBid(event) {
        event.preventDefault();
        // console.log(value);
        let rounds = Number(user.getRounds()) + Number((value))
        user.setRounds(rounds)
        let money = Number(user.getMoney()) + Number(value)
        user.setMoney(money)
        setValue(0)
    }


    const startStopHandler = () => {
        user.setClearScores()

        setMyColor("#" + randcolor())
        if (user.getMoney() === 0) {
            alert('Нет денег')
        } else {
            let money = Number(user.getMoney()) - 1
            user.setMoney(money)
            user.setClearScores()
            if (user.getStart()) {
                user.setStart(false)
                user.setClearScores()
            } else {
                if (!user.getStart()) {
                    user.setStart(true)
                    let rounds = user.getRounds()
                    user.setRounds(rounds - 1)
                    user.setWinMoney(0)
                    // user.setDelWinArr()
                }
            }
        }
    }


    const autoPlay = () => {
        setMyColor("#" + randcolor())
        if (user.getMoney() === 0) {
            alert('Нет денег')
        } else {
            user.setAutoRounds(true)
            let auto
            auto = setInterval(() => {
                if (!user.getAutoRounds()) {
                    clearInterval(auto)
                    console.log(user.getAutoRounds());

                }
                if (user.getMoney() === 0) {
                    clearInterval(auto)
                    console.log('нет денег');
                    user.setAutoRounds(false)
                }
                else {
                    startStopHandler()
                }
            }, 5000)
        }
    }

    const stopAuto = () => user.setAutoRounds(false)

    return (
        <div className='info-bar'>

            <h2 style={{ color: myColor }}>Кручу-верчу, обмануть хочу!</h2>
            <div className='divApp'>
                <RandomItem timer={1000} speed={2} ></RandomItem>
                <RandomItem timer={900} speed={2}></RandomItem>
                <RandomItem timer={1250} speed={2}></RandomItem>
                <RandomItem timer={860} speed={2}></RandomItem>
                <RandomItem timer={1100} speed={2}></RandomItem>
            </div>
            <div className='myFlex btn'>
                {user.getAutoRounds() ?
                    <div className=''>
                        <button disabled={false}
                            onClick={() => stopAuto()}>
                            {"STOP AUTO"}
                        </button>
                    </div>
                    :
                    <div className=''>
                        <button disabled={user.getStart()}
                            onClick={() => startStopHandler()}>
                            {user.getStart() ? 'WAIT' : "START"}
                        </button>
                        <button disabled={user.getStart()}
                            onClick={() => autoPlay()}>
                            {user.getStart() ? 'WAIT' : "AUTO"}
                        </button>
                    </div>
                }
            </div>


            {/* <div className='myFlex'>
                <p>Старт: {user.getStart() ? 'True' : "False"}</p>
                <p>WinArr: {user.getScores().join()}</p>
            </div> */}

            <form className='myFlex myFlexInline' onSubmit={manyBid} >
                <p>Ваша ставка $</p>
                <input type={'number'} value={value}
                    onFocus={(event) => (event.target.value = "")}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}></input>
                <button type="submit">Ставка</button>
            </form>


            <div className='myFlex'>
                <p>Money $: {user.getMoney()}</p>
                {/* <p>Раунды: {user.getRounds()}</p> */}
                <p>Выйгрыш текущ.раунд $: {user.getWinMoney()}</p>
                <p>Выйгрыш за игру $: {user.getWinAllMoney()}</p>

            </div>
            <div>
                {user.getWinArr().map(item => {
                    return (
                        <div key={randcolor()} className='myFlexCenter'>
                            <p>{item["time"]}</p>
                            <img className={'minImg'} src={'images/' + item['winImg'] + '.png'} alt="currentN" /> * {item['winAmount']} = {item['winMoney']}$
                        </div>
                    )
                })}
            </div>
        </div >

    )
})

export default InfoBar