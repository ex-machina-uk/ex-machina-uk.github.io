<template>
  <baser
    header="Dev Profile"
    title="Damilaare Isaac"
    subtitle="What I do and how I can help you"
    user_img="/assets/img/unsplash/smiles/smile-2-s.jpg"
    user_name="Damilaare Isaac"
    user_title="senior software developer"
  >
    <template v-slot:body>
      <div class="left-post-content">
        <br>
        <p> <b> Me - </b>Hi, I'm Isaac. My mission is to do the best front end development work I can.
          I have been working with Ex-Machina for 3 years and it's been the best work opportunity I could have  had. 
          I get to work on a wide variety of projects, from React Native to Flutter and Vue, so I definitely feel like
          I am constantly evolving and employing the latest technologies. 
        </p>
        <br>
          <p> <b> Work - </b>  The work we do is highly rigorous - we employ continuous integration for all our projects, which means that before we check in 
            code it has to satisfy all the tests. This can slow the pace of development slightly, but means we can refactor without fear
            and are unlikely to break what we have developed. 
        </p>
        <br>
        <p>
          <b>Education -  </b>
         I graduated in the top 5% of my class in Lagos. Here in Nigeria, the opportunities are somewhat limited, so I am very grateful
         that I have the chance to work with a team that is international. It's definitely improved my exposure. 

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