<template>
  <MainLayout>
    <div class="flex gap-4 p-4">
      <!-- Liste des catégories -->
      <CategoriesList :categories="categories" @select="selectCategory" />

      <!-- Contenu de la catégorie sélectionnée -->
      <section class="flex-grow bg-silver p-4 rounded">
        <template v-if="selectedCategory">
          <CategoryContent :category="selectedCategory" />
        </template>
        <template v-else>
          <h3 class="text-deep-blue font-bold text-xl">
            Sélectionnez une catégorie
          </h3>
        </template>
      </section>
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';
import CategoriesList from './components/CategoriesList.vue';
import CategoryContent from './components/CategoryContent.vue';

export default {
  name: 'App',
  components: {
    MainLayout,
    CategoriesList,
    CategoryContent,
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: 'Liens favoris',
          items: [
            { id: 1, title: 'Google', description: 'Moteur de recherche.', url: 'https://google.com' },
            { id: 2, title: 'GitHub', description: 'Gestionnaire de versions.', url: 'https://github.com' },
          ],
        },
        {
          id: 2,
          name: 'Images inspirantes',
          items: [
            { id: 1, title: 'Paysage', description: 'Image d’un paysage.', url: '/images/paysage.jpg' },
            { id: 2, title: 'Concept art', description: 'Art conceptuel.', url: '/images/concept.jpg' },
          ],
        },
        {
          id: 3,
          name: 'Vidéos et audios',
          items: [
            { id: 1, title: 'YouTube', description: 'Vidéo inspirante.', url: 'https://youtube.com' },
            { id: 2, title: 'Spotify', description: 'Playlist musicale.', url: 'https://spotify.com' },
          ],
        },
      ],
      selectedCategoryId: null,
    };
  },
  computed: {
    selectedCategory() {
      return this.categories.find((cat) => cat.id === this.selectedCategoryId);
    },
  },
  methods: {
    selectCategory(categoryId) {
      this.selectedCategoryId = categoryId;
    },
  },
};
</script>
