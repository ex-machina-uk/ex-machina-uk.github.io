<template>
<div style="position: absolute; top: 0px; width: 100%;">
    <div class="nav-back"/>
    <div class="section">
            <div class="section-title-wrapper has-text-centered pt-80 ">
          <div class="clean-bg-symbol">
            <i class="fa fa-gg"></i>
          </div>
          <div>
            <h2 class="clean-section-title">Our Portfolio</h2>
            <h2 class="subtitle is-3"> Pharma, Banking and Insurance</h2>
             <h2
                class="subtitle is-4"
              >Over th years we have worked with a range of clients, from banking and fin-tech to Pharmaceuticals. 
              We adapt to each of clients technology needs, through a broad skillset and a can-do attitude. </h2>
          </div>
        </div>
        </div>
<portfolio/>
</div>
</template>
<style>
.nav-back {
    height: 70px;
    background: rgba(0,0,0,0.6)

}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import portfolio from "@/components/portfolio.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    portfolio
  },

};
</script>


<style>