<template>
  <baser
    header="Dev Profile"
    title="James Dyson"
    subtitle="What I do and how I can help you"
    user_img="/assets/img/unsplash/devs/james.jpeg"
    user_name="James Dyson"
    user_title="Team Lead"
  >
    <template v-slot:body>
      <div class="left-post-content">
        <br>
        <p> <b> Me - </b>I'm James and  I am a part of the London office. My day to day focuses on back-end engineering, writing unit tests and coordinating the team's sprints. 
          I think I was drawn to engineering work from quite a young age, as I had designed intranets for my school and a few local companies. 
          I'm drawn to the technical challenges of writing concurrent systems and designing well thought out architectural patterns. In addition, I'm interested
          in the serverless pattern for our deployments.  
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