<script lang="ts" setup>
/**
 * Import the empty block parent class from Contentstack Live Preview utils
 * This class is used to style empty block containers in the live preview mode
 */
import VB_EmptyBlockParentClass from "@contentstack/live-preview-utils";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
/**
 * Fetch the page data and refresh function using the useGetPage composable
 * This gets the content for the root ('/') page from Contentstack
 * 'page' contains all the content data, and 'refresh' is used to update the content
 */
const route = useRoute();
const { data: page, refresh } = await useGetContentPage(route.path);

// Set up live preview functionality when the component is mounted
onMounted(() => {
  // Get preview utilities from Nuxt app context
  const { $preview, $ContentstackLivePreview } = useNuxtApp();
  // Type assertion for ContentstackLivePreview
  const livePreview =
    $ContentstackLivePreview as unknown as typeof ContentstackLivePreview;
  // If preview mode is active, set up live content updates
  // This will automatically refresh the page when content changes in Contentstack
  $preview && livePreview.onEntryChange(refresh);
});

const getComponentName = (block: any) => {
  return Object.keys(block)[0];
};

const getComponentProps = (block: any) => {
  //   const componentName = getComponentName(block);
  //   return block[componentName];

  return {
    options: Object.values(block)[0],
  };
};
</script>

<template>
  <h1>About Page</h1>

  <div class="components">
    <template v-for="block in page?.blocks">
      <component
        :is="getComponentName(block)"
        v-bind="getComponentProps(block)"
      ></component>
    </template>
  </div>
</template>

<style scoped>
.components {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
</style>
