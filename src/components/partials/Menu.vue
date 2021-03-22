<template>
  <div class="w-screen h-screen fixed bg-white top-0">
    <search-bar v-model="searchText" @input="updateResults" />
    <div class="container mx-auto flex flex-col my-6 items-center">
      <transition-group name="list" appear>
        <p
          v-for="(item, index) of searchResults"
          :key="index"
          class="m-1 text-lg text-white rounded-full py-2 px-3"
          @click="$emit('select')"
          :style="{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }"
        >
          <router-link :to="item.path">
            {{ item.solverName }}
          </router-link>
        </p>
      </transition-group>
    </div>
  </div>
</template>

<script lang="tsx">
import { defineComponent, ref, reactive } from "vue";
import { fetchSolverMeta } from "@/components/pages/solvers";
import { debounce } from "lodash";
import { cloneDeep } from "lodash";
import SearchBar from "@/components/partials/SearchBar.vue";
export default defineComponent({
  emits: {
    select: null,
  },
  name: "Menu",
  components: { SearchBar },
  setup() {
    const searchText = ref("");
    const solverMeta = fetchSolverMeta();
    const searchResults = reactive(cloneDeep(solverMeta));

    const updateResults = debounce(() => {
      searchResults.splice(0);
      for (const item of solverMeta) {
        if (
          item.solverName.toLowerCase().includes(searchText.value.toLowerCase())
        ) {
          searchResults.push(item);
        }
      }
    }, 250);

    return {
      searchResults,
      searchText,
      updateResults,
    };
  },
});
</script>

<style lang="scss" scoped>
.list-enter-active {
  transition: opacity 0.125s ease-out;
}
.list-enter-from {
  opacity: 0;
}
.list-enter-to {
  opacity: 100%;
}
.list-leave-active {
  transition: opacity 0.125s ease-out;
}
.list-leave-from {
  opacity: 100%;
}
.list-leave-to {
  opacity: 0;
}
.list-move {
  transition: transform 0.25s ease-in-out;
}
</style>
