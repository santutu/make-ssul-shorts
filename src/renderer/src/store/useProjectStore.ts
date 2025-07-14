import { defineStore } from "pinia";
import { ref } from "vue";
import { acceptHMRUpdate } from "pinia";
import { Project } from "@renderer/models/Project";

export const useProjectStore = defineStore("project", () => {
  const project = ref<Project>(new Project());

  return { project };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
}
