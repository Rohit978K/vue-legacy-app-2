<template>
  <div class="container">
    <b-row class="mt-5">
      <b-col class="text-left">
        <h1>
          Table Page
          <b-icon icon="table" variant="primary" font-scale="1"></b-icon>
        </h1>
        <h2>A table with sticky headers and first sticky column</h2>
        <b-button @click="getTableData()" class="btn btn-success mx-2"
          >Get Data</b-button
        >
        <b-button @click="items = []">Clear Data</b-button>
      </b-col>
      <b-col md="3" class="table-dtl mt-2">
        <md-card>
          <md-card-content>
            <div>Total Rows: {{ totalRecords }}</div>
            <div>Columns: 7</div>
            <div>Sticky Header: Yes</div>
            <div>Sticky Column: Yes</div>
          </md-card-content>
        </md-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12" class="mt-5 table-dtl">
        <b-table
          :dark="checkDarkMode"
          striped
          hover
          outlined
          sticky-header
          no-border-collapse
          show-empty
          :items="items"
          :fields="fields"
          :busy="isBusy"
          class="mt-3"
        >
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"></b-spinner>
              <br />
              <br />
              <i>Data loading from the API</i>
            </div>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      fields: [
        { key: "API", stickyColumn: true },
        "Description",
        "Auth",
        "HTTPS",
        "Cors",
        "Link",
        "Category",
      ],
      items: [],
      isBusy: false,
      totalItems: 0,
    };
  },
  computed: {
    totalRecords() {
      const total = this.items.length;
      return total;
    },
    checkDarkMode() {
      let darkModeEnabled = 'undefined'
      darkModeEnabled = sessionStorage.getItem("dark-mode-enabled");
      if (darkModeEnabled === "dark-mode") {
        return true;
      }
      return false;
    },
  },
  methods: {
    async getTableData() {
      this.isBusy = true;
      const response = await fetch("https://api.publicapis.org/entries");
      const result = response.json();
      result
        .then((data) => {
          this.isBusy = false;
          this.items = data.entries;
          this.totalItems = data.count;
        })
        .catch((error) => {
          this.isBusy = false;
          alert(error.message);
          return [];
        });
    },
  },
  beforeDestroy() {
    sessionStorage.setItem("dark-mode-enabled", '')
  }
};
</script>
