<template>
  <section class="w-full">
    <header class="flex items-center justify-between">
      <h1 class="whitespace-nowrap overflow-ellipsis mr-2 flex-grow">
        {{ title }}
      </h1>
      <slot name="action" />
    </header>
    <main class="mt-16">
      <slot />
    </main>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>
