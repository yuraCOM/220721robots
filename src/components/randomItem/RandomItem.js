import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../index';
import { getArrRandom, getRandomNum } from './random';
import './randomItem.css'

const RandomItem = observer((props) => {
    const { user } = useContext(Context)

    const [currentN, setCurrentN] = useState(getRandomNum(1, 33))
    const [startAnim, setStartAnim] = useState(user.getStart())
    const [currentAnim, setCurrentAnim] = useState('numInblockStart ')

    function rotationSlot(speed) {
        let arrNs = getArrRandom(33, 10)
        setTimeout(() => {
            setStartAnim(true)
            for (let index = 0; index < arrNs.length; index++) {
                const element = arrNs[index];
                setTimeout(() => {
                    if (index + 1 === arrNs.length) {
                        // console.log(index + 1, arrNs.length);
                        setStartAnim(false)
                        user.setScores(element)
                        setCurrentN(element)
                    } else {
                        setStartAnim(true)
                        setCurrentN(element)
                    }
                }, speed * index)
            }
        }, props.timer);
        // console.log(arrNs, arrNs[arrNs.length - 1]);
        return arrNs[arrNs.length - 1];
    }

    useEffect(() => {
        rotationSlot(400)
        user.scores = []
    }, [])

    useEffect(() => {

        if (user.getStart()) {
            setCurrentAnim("numInblock numInblock-anim5")
            rotationSlot(200)
            user.scores = []
        }

    }, [user.getStart()])



    return (
        <div className='num-block'  >
            <img id={'win' + currentN} className={startAnim ? currentAnim : 'numInblockStart'}
                src={'images/' + currentN + '.png'} alt="currentN" />
            {/* <p className={startAnim ? "numInblock numInblock-anim" : "numInblock"}>{currentN}</p> */}
            {/* <p className={startAnim ? "numInblock numInblock-anim" : "numInblock"}>{currentN}</p> */}
        </div>
    )
})

export default RandomItem





// -----------------------------

// setInterval(() => {
        //     let speed = 0
        //     props.speed === 1 ? speed = 1000 : speed = 1000
        //     props.speed === 2 ? speed = 600 : speed = 1000
        //     props.speed === 3 ? speed = 300 : speed = 1000
        //     setTimeout(() => {
        //         let arrNs = getArrRandom(33, 10)
        //         for (let index = 0; index < arrNs.length; index++) {
        //             const element = arrNs[index];
        //             setTimeout(() => {
        //                 if (index + 1 === arrNs.length) {
        //                     console.log(element);
        //                     setStartAnim(false)
        //                 } else {
        //                     setStartAnim(true)
        //                     setCurrentN(element)
        //                 }
        //             }, speed * index)
        //         }
        //     }, props.timer)
        // }, 6000);


        // let speed = 500
        // setTimeout(() => {
        //     setStartAnim(true)
        //     let arrNs = getArrRandom(33, 10)
        //     for (let index = 0; index < arrNs.length; index++) {
        //         const element = arrNs[index];
        //         setTimeout(() => {
        //             if (index + 1 === arrNs.length) {

        //                 setStartAnim(false)

        //             } else {
        //                 setStartAnim(true)
        //                 setCurrentN(element)
        //             }
        //         }, speed * index)
        //     }
        // }, props.timer);


// let speed = 200
            // setTimeout(() => {
            //     setStartAnim(true)
            //     let arrNs = getArrRandom(33, 10)
            //     for (let index = 0; index < arrNs.length; index++) {
            //         const element = arrNs[index];
            //         setTimeout(() => {
            //             if (index + 1 === arrNs.length) {
            //                 // InfoBarStore.setScores(element)
            //                 // console.log(InfoBarStore.scores);
            //                 setStartAnim(false)

            //             } else {
            //                 setStartAnim(true)
            //                 setCurrentN(element)
            //             }
            //         }, speed * index)
            //     }
            // }, props.timer);