<template>
    <div>
        <h3 class="text-xl font-bold text-metallic-gold mb-4">
            Contenu de la catégorie : {{ category.name }}
        </h3>
        <ul class="space-y-2">
            <li v-for="item in category.items" :key="item.id"
                class="bg-silver p-4 rounded shadow hover:bg-deep-blue hover:text-white transition">
                <span class="font-bold">{{ item.title }}</span>
                <p>{{ item.description }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CategoryContent',
    props: {
        category: {
            type: Object,
            required: true,
        },
    },
};
</script>
