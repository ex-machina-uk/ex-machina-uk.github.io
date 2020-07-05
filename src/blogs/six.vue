<template>
  <baser
    header="Dev Profile"
    title="Sunhil"
    subtitle="What I do and how I can help you"
    user_img="/assets/img/unsplash/devs/james.jpeg"
    user_name="Sunhil"
    user_title="Junior Dev"
  >
    <template v-slot:body>
      <div class="left-post-content">
        <br>
        <p> <b> Me - </b>I'm  David, the American guy.   
        </p>
        <br>
          <p> <b> Work - </b>  We have a daily stand-up, where I discuss the work some of our juniors have been getting along with. It's quite rewarding to 
          help other programmers get through their day-to-day and to see them mature through guidance and input. 
        </p>
        <br>
        <p>
          <b>Education -  </b> I graduated with a 2:1 degree from Imperial in London. I then went on to do a PhD in systems design and analysis. 
        </p>
          
        
        <br class="clear" />
      </div>
    </template>
  </baser>
</template>

<style>
.nav-back {
  height: 70px;
  background: rgba(0, 0, 0, 0.6);
}
</style>
<script>
import baser from "./baser.vue";
export default {
  components: { baser }
};
</script>