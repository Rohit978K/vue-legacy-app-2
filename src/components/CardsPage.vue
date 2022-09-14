<template>
  <div class="container">
    <b-container class="bv-example-row mb-3">
      <b-row
        cols="2"
        v-if="
          catDisplay.persian ||
          catDisplay.burmese ||
          catDisplay.scottish ||
          catDisplay.maine
        "
      >
        <b-col>
          <md-card v-if="catDisplay.burmese">
            <md-card-area>
              <md-card-media md-ratio="16:9">
                <img
                  src="https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-08/brown+Burmese+kitten+lying+on+a+cream+couch-min.jpg"
                  alt="Burmese Cat"
                  width="300px"
                  height="168px"
                  align="top"
                />
              </md-card-media>

              <md-card-header>
                <b-row>
                  <b-col md="8"
                    ><div class="md-title" align="left">Burmese Cat</div></b-col
                  >
                  <b-col md="3" align="right">
                    <div>
                      <md-button
                        @click="removeCatCard('burmese')"
                        class="float-right"
                        ><b-icon
                          icon="trash-fill"
                          scale="1.5"
                          variant="danger"
                        ></b-icon
                      ></md-button></div
                  ></b-col>
                </b-row>
                <div class="md-subhead">
                  <b>Alternative Names:</b> American Burmese, British Burmese
                </div>
              </md-card-header>

              <md-card-content class="text-left">
                <div><b>Origin:</b> Thailand</div>
                <div>
                  <b>Description:</b> Appears in 2 forms - American and British.
                  The British ones are slender and have a long body while the
                  American ones are broader and shorter with a flat muzzle.
                </div>
                <div><b>Average Lifespan:</b> 10-17 Years</div>
              </md-card-content>
            </md-card-area>
          </md-card></b-col
        >
        <b-col
          ><md-card v-if="catDisplay.persian">
            <md-card-area>
              <md-card-media md-ratio="16:9">
                <img
                  src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/persian-cat.jpg"
                  alt="Persian Cat"
                />
              </md-card-media>

              <md-card-header>
                <b-row>
                  <b-col md="8"
                    ><div class="md-title" align="left">Persian Cat</div></b-col
                  >
                  <b-col md="3" align="right">
                    <div>
                      <md-button
                        @click="removeCatCard('persian')"
                        class="float-right"
                        ><b-icon
                          icon="trash-fill"
                          scale="1.5"
                          variant="danger"
                        ></b-icon
                      ></md-button></div
                  ></b-col>
                </b-row>
                <div class="md-subhead">
                  <b>Alternative Names:</b> Longhair or Persian Longhair
                </div>
              </md-card-header>

              <md-card-content class="text-left">
                <div><b>Origin:</b> Iran Breed</div>
                <div>
                  <b>Description:</b> Long haired breed of cat that has a short
                  round face with a wide head. It has a thick coat , large eyes
                  and a shortened muzzle.
                </div>
                <div><b>Average Lifespan:</b> 12-17 Years</div>
              </md-card-content>
            </md-card-area>
          </md-card></b-col
        >
        <b-col
          ><md-card v-if="catDisplay.scottish">
            <md-card-area>
              <md-card-media md-ratio="16:9">
                <img
                  src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/Scottish-Fold.jpg"
                  alt="Scottish Fold"
                />
              </md-card-media>

              <md-card-header>
                <b-row>
                  <b-col md="8">
                    <div class="md-title" align="left">
                      Scottish Fold
                    </div></b-col
                  >
                  <b-col md="3" align="right"
                    ><md-button @click="removeCatCard('scottish')"
                      ><b-icon
                        icon="trash-fill"
                        scale="1.5"
                        variant="danger"
                      ></b-icon></md-button
                  ></b-col>
                </b-row>
                <div class="md-subhead">
                  <b>Alternative Names:</b> Scot Fold, Lops, Folds
                </div>
              </md-card-header>

              <md-card-content class="text-left">
                <div><b>Origin:</b> Scotland</div>
                <div>
                  <b>Description:</b> It is a medium sized cat weighing 4-6 kg.
                  The coat can be long-haired or short-haired and ears can be
                  normal or folded.
                </div>
                <div><b>Average Lifespan:</b> 11- 15 Years</div>
              </md-card-content>
            </md-card-area>
          </md-card></b-col
        >
        <b-col
          ><md-card v-if="catDisplay.maine">
            <md-card-area>
              <md-card-media md-ratio="16:9">
                <img
                  src="https://www.petsworld.in/blog/wp-content/uploads/2014/07/Maine-Coon.jpg"
                  alt="Maine Coon"
                />
              </md-card-media>

              <md-card-header>
                <b-row>
                  <b-col md="8">
                    <div class="md-title" align="left">Maine Coon</div></b-col
                  >
                  <b-col md="3" align="right"
                    ><md-button @click="removeCatCard('maine')"
                      ><b-icon
                        icon="trash-fill"
                        scale="1.5"
                        variant="danger"
                      ></b-icon></md-button
                  ></b-col>
                </b-row>
                <div class="md-subhead">
                  <b>Alternative Names:</b> American Burmese, British Burmese
                </div>
              </md-card-header>

              <md-card-content class="text-left">
                <div><b>Origin:</b> USA</div>
                <div>
                  <b>Description:</b> These are the largest breeds of domestic
                  cats with soft and silky coat. They are easy to train and are
                  a loyal breed.
                </div>
                <div><b>Average Lifespan:</b> 12-15 Years</div>
              </md-card-content>
            </md-card-area>
          </md-card></b-col
        >
      </b-row>
      <b-row v-else>
        <b-col><h1>No cards to show!</h1></b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "CardsPage",
  data() {
    return {
      catDisplay: {
        persian: true,
        burmese: true,
        scottish: true,
        maine: true,
      },
    };
  },
  watch: {
    catDisplay: {
      handler() {
        this.showEmptyMessage();
      },
      deep: true,
    },
  },
  methods: {
    removeCatCard(name) {
      switch (name) {
        case "persian":
          this.catDisplay.persian = false;
          break;
        case "burmese":
          this.catDisplay.burmese = false;
          break;
        case "scottish":
          this.catDisplay.scottish = false;
          break;
        case "maine":
          this.catDisplay.maine = false;
          break;
      }
    },
    showEmptyMessage() {
      if (
        this.catDisplay.persian ||
        this.catDisplay.burmese ||
        this.catDisplay.scottish ||
        this.catDisplay.maine
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline;
  vertical-align: top;
}
</style>
