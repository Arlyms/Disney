<template>
    <div class="check">
        <svg class="checkmark" viewBox="0 0 52 52">
        <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
        <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'Validate'
}
</script>

<style scoped lang="scss">
    .check {
        position: fixed;
        z-index: 5;
        inset: 0;
        display: grid;
        place-items: center;
        background: radial-gradient(circle at 10% 10%, rgba(255,255,255,0.03), transparent 15%),
                    linear-gradient(180deg, var(--disney-blue) 70%, var(--disney-purple) 100%, var(--disney-gold) 120%);
        background-attachment: fixed;
        background-size: cover;
        color: #f2f2f2;
    }

    .checkmark {
    width: 200px;
    height: 200px;
    }

    /* --- Animation preparation --- */
    .checkmark-circle,
    .checkmark-check {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke: #4caf50;
    stroke-width: 2;
    }

    /* --- Circle animation --- */
    .checkmark-circle {
    animation: stroke 0.7s cubic-bezier(0.65, 0, 0.45, 1) forwards;
    }

    /* --- Check animation --- */
    .checkmark-check {
    stroke-linecap: round;
    animation: stroke 0.7s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
    }

    /* --- Keyframes --- */
    @keyframes stroke {
    100% {
        stroke-dashoffset: 0;
    }
}
</style>