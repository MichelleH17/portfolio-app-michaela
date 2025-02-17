<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog :open="isOpen" @close="isOpen = false">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-md transition-all">
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                <button type="button" @click="close" class="hover:bg-custom_green px-2 py-1 rounded-md">X</button>
              </div>
              <DialogTitle as="h3" class="text-xl font-semibold mb-4">{{ project.title }}</DialogTitle>
              <DialogDescription class="text-gray-700">{{ project.description }}</DialogDescription>
              <div class="mt-6">
                <NuxtLink :to="project.link" target="_blank" rel="noopener noreferrer" class="rounded-md bg-custom_green px-4 py-2 text-sm font-medium text-custom_black hover:bg-custom_darker_green">Go to GitHub repo</NuxtLink>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>  
    </Dialog>
  </TransitionRoot>  
</template>

<script lang="ts" setup>
  import projectData from '~/data/projects.json'
  import {
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

  const id = useRoute().params.id
  const project = computed(() => projectData.find((project) => project.id === +id)!)

  const emit = defineEmits<{
    (event: "close"): void;
  }>();

  const close = () => {
  isOpen.value = false;
  setTimeout(() => {
    emit("close");
  }, 300);
};

  const isOpen = ref(true)

  onMounted(() => {
    isOpen.value = true;
  });
</script>