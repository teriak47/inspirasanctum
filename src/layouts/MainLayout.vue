<template>
    <div class="flex flex-col min-h-screen bg-charcoal-black text-white">
        <!-- Header -->
        <Header />

        <!-- Main Content -->
        <main class="flex-grow p-4">
            <slot />
        </main>

        <!-- Footer -->
        <Footer />
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
    name: 'MainLayout',
    components: {
        Header,
        Footer,
    },
};
</script>
