<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Legacy App</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/cards" class="nav-link">Cards</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/settings" class="nav-link">Settings</router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">

            <input
              class="form-control wide mx-3"
              list="datalistOptions"
              placeholder="Type to search..."
            />
            <datalist id="datalistOptions">
              <option value="Burmese cat"></option>
              <option value="Persian cat"></option>
              <option value="Scottish Fold"></option>
              <option value="Maine Coon"></option>
            </datalist>

            <button class="btn btn-outline-success">
              <router-link to="/cards"><b-icon-search></b-icon-search></router-link>
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
        name: null
    }
  }
};
</script>
<style scoped>
.wide {
    width: 400px;
}
</style>
