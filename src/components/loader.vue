<template>
    <div class="disney-loader-container">
        <div class="disney-loader"></div>
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
$loader-size: 80px;
$loader-thickness: 4px;
$disney-blue: #0076a8; // Une couleur proche du bleu de Disney+
$animation-duration: 1.5s;


    .disney-loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0d131f; // Fond sombre de l'application
    }

    .disney-loader {
    width: $loader-size;
    height: $loader-size;
    border-radius: 50%;
    position: relative;
    // Border par défaut (gris clair)
    border: $loader-thickness solid rgba(255, 255, 255, 0.2);
    border-top-color: transparent; // Pour masquer le haut par défaut
    
    // Utiliser un pseudo-élément pour la ligne animée
    &::after {
        content: '';
        position: absolute;
        top: -$loader-thickness;
        left: -$loader-thickness;
        right: -$loader-thickness;
        bottom: -$loader-thickness;
        border: $loader-thickness solid transparent;
        border-radius: 50%;
        
        // La partie animée qui se dessine (le bleu de Disney+)
        border-top-color: $disney-blue;
        border-right-color: $disney-blue;
        
        animation: 
        draw $animation-duration linear infinite,
        spin $animation-duration linear infinite;
    }
    }

    // Animation pour faire tourner le loader
    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

    // Animation pour donner l'effet de "dessin" de la ligne (optionnel)
    // Ici on combine le spin avec le dessin pour un effet simple
    @keyframes draw {
    0% { border-top-color: transparent; border-right-color: transparent; }
    25% { border-top-color: $disney-blue; }
    50% { border-right-color: $disney-blue; }
    75% { border-bottom-color: transparent; }
    100% { border-bottom-color: transparent; }
    }
</style>