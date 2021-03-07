<template>
    <div id="app">
        <div class="clock">
            <div class="clock-face">
                <img src="./assets/clock.gif" />
                <div class="hourHand hour-hand"></div>
                <div class="minHand min-hand"></div>
                <div class="secHand second-hand"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        methods: {
            setDate: function () {
                const secondHand = document.querySelector('.second-hand');
                const minuteHand = document.querySelector('.min-hand');
                const hourHand = document.querySelector('.hour-hand');

                const now = new Date();
                const seconds = now.getSeconds();
                const secondDegrees = (seconds / 60) * 360 + 90;
                secondHand.style.transform = `rotate(${secondDegrees}deg)`;
                console.log('blah');
                const minutes = now.getMinutes();
                const minuteDegrees = (minutes / 60) * 360 + 90;
                minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

                const hours = now.getHours();
                const hourDegrees =
                    (hours / 12) * 360 + (minutes / 60) * 30 + 90;
                hourHand.style.transform = `rotate(${hourDegrees}deg)`;
                console.log(seconds);
            },
        },
        created() {
            setInterval(this.setDate, 1000);
        },
    };
</script>

<style>
    img {
        width: 100%;
    }
    html {
        font-family: 'helvetica neue';
        text-align: center;
        font-size: 10px;
    }

    body {
        margin: 0;
        font-size: 2rem;
        display: flex;
        flex: 1;
        min-height: 100vh;
    }

    .clock {
        width: 30rem;
        height: 30rem;
        border: 20px solid white;
        border-radius: 50%;
        margin: 50px auto;
        position: relative;
        margin-left: auto;
        margin-right: auto;
    }

    .clock-face {
        position: relative;
        width: 100%;
        height: 100%;
        transform: translateY(
            -3px
        ); /* account for the height of the clock hands */
    }

    .hand {
        width: 50%;
        height: 6px;
        background: black;
        position: absolute;
        top: 50%;
        transform-origin: 100%;
        transform: rotate(60deg);
        transition: all 0.05s;
        transition-timing-function: cubic-bezier(0.99, 0.96, 0.01, 0.01);
    }
    .secHand {
        border-radius: 15px;
        left: 10%;
        width: 120px;
        height: 6px;
        background: red;
        position: absolute;
        top: 49%;
        transform-origin: 100%;
        transform: rotate(60deg);
        transition-timing-function: cubic-bezier(0.99, 0.96, 0.01, 0.01);
    }
    .minHand {
        border-radius: 15px;
        left: 20%;
        width: 90px;
        height: 6px;
        background: black;
        position: absolute;
        top: 49%;
        transform-origin: 100%;
        transform: rotate(60deg);
        transition: all 0.05s;
        transition-timing-function: cubic-bezier(0.99, 0.96, 0.01, 0.01);
    }
    .hourHand {
        border-radius: 15px;
        left: 25%;
        width: 75px;
        height: 6px;
        background: black;
        position: absolute;
        top: 49%;
        transform-origin: 100%;
        transform: rotate(60deg);
        transition: all 0.05s;
        transition-timing-function: cubic-bezier(0.99, 0.96, 0.01, 0.01);
    }
</style>
