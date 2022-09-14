<template>
  <div class="container">
    <b-row>
      <b-col class="mt-5">
        <b-button @click="toggleDarkMode()">
          <b-icon icon="moon-fill"></b-icon> Toggle dark mode</b-button
        >
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "SettingsPage",
  methods: {
    toggleDarkMode() {
        let element = document.getElementById("app");
        element.classList.toggle("dark-mode");
        
        sessionStorage.setItem('dark-mode-enabled', element.classList[0])
    },
  },
};
</script>
