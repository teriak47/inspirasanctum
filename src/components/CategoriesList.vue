<template>
    <div>
        <h3 class="text-xl font-bold text-metallic-gold mb-4">Catégories</h3>
        <ul class="space-y-2">
            <li v-for="category in categories" :key="category.id"
                class="bg-silver p-4 rounded cursor-pointer hover:bg-deep-blue hover:text-white transition"
                @click="selectCategory(category.id)">
                {{ category.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CategoriesList',
    props: {
        categories: {
            type: Array,
            required: true,
        },
    },
    methods: {
        selectCategory(id) {
            this.$emit('category-selected', id);
        },
    },
};
</script>
