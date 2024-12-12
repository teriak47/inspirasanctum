/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                blueDeep: 'oklch(32.33% 0.1025 253.89)', // Bleu profond
                redScarlet: 'oklch(49.68% 0.1797 26.81)', // Rouge écarlate
                goldMetallic: 'oklch(85.88% 0.1697 87.89)', // Or métallique
                silver: 'oklch(80.78% 0 0)', // Argent
                charcoal: 'oklch(12.93% 0 0)', // Noir charbon
            },
        },
    },
    plugins: [],
};
