<template>
        <div class="loader-wrapper">
            <img src="@/assets/loader.png" alt="Description de l'image">
            <div class="disney-loader">
                
                <div class="circle"></div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Loader',
    props: {

    }
}
</script>

<style scoped lang="scss">
$loader-hue: 220;
$loader-size: 250px;
$loader-border: 10px;
$loader-speed: 1s; 
$blur: 10px;


$y: calc(($loader-size * -0.5) + ($loader-border * 0.5));


    .loader-wrapper{
        position: fixed;
        z-index: 5;
        inset: 0;
        display: grid;
        place-items: center;
        background-color: #0e11c0;
    }

    img {
        width: 200px;
        z-index: 10;
    }

    .disney-loader {
        width: $loader-size;
        aspect-ratio: 1;
        background: rgb(243, 243, 243);
        border-radius: 50%;
        position: absolute;
            transform: rotate(0deg);
            transform-origin: center center;
        animation: spin $loader-speed linear infinite;
    .circle {
        position: absolute;
        z-index: 4;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            width: 230px;
            height: 230px;
            border-radius: 50%;
            background-color: #0e11c0;
        }
    
    &::before {
            content: '';
            position: absolute;
            inset: calc($loader-border * 0.5);
            border-radius: 50%;
            background: white;
            filter: blur($blur);
            z-index: -1;
            }

    &::after {
            content: '';
            width: $loader-size;
            aspect-ratio: 1;
            position: absolute;
                top: 50%;
                left: 50%;
                translate: -50% -50%;
            background: conic-gradient(
                white,
                hsl($loader-hue, 100%, 40%),
                hsl($loader-hue, 100%, 40%),
                transparent 100%
                );
            border-radius: 50%;
            mask: radial-gradient(
                transparent calc(($loader-size * -0.5)
                            -    $loader-border) - 1px,
                white calc(($loader-size * 0.2)
                            -    $loader-border)
                );                
            }
    }

    // Animation pour faire tourner le loader
    @keyframes spin {
        to {
                transform: rotate(360deg);
        }

    }

</style>