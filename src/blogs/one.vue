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
        <p>
          <b>Job Objective</b> To obtain a HTML Developer position that fully utilizes my experience and abilities.
        </p>
        <p>
          <b>Work Experience:</b>
        </p>
        <p>HTML Developer, July 2006 – Present</p>
        <p>Parrot, Inc., Los Angeles, CA</p>
        <ul class="bullet">
          <li>Maintained and ensured to enhance the company’s multi-branded websites.</li>
          <li>Coordinated with back end developers and business for website requirements.</li>
          <li>Partnered with internal and external suppliers to create and maintain content.</li>
          <li>Assisted engineering team to define requirements from creative team on their HTML pages needs.</li>
          <li>Ensured that personal technical skills are kept up to date for effective development.</li>
          <li>Adhered to industry standards and defined guidelines and principles.</li>
        </ul>
        <p>HTML Developer, May 2002 – June 2006</p>
        <p>Dove Corporation, Los Angeles, CA</p>
        <ul class="bullet">
          <li>Translated necessary requirements into HTML code.</li>
          <li>Administered operational role in maintaining technical content.</li>
          <li>Worked as member of project team to collect and develop content.</li>
          <li>Created visual media for online campaigns.</li>
          <li>Ensured high quality deliverables by following defined processes.</li>
          <li>Managed to simultaneously work on multiple projects without deviation.</li>
        </ul>
        <p>
          <b>Summary of Qualifications:</b>
        </p>
        <ul class="bullet">
          <li>Remarkable experience using JavaScript, HTML, Ajax, CSS, and XML</li>
          <li>Familiarity with server side development (PHP, Java/JSP, Ruby)</li>
          <li>Proficient with JavaScript/ AJAX and front end frameworks (e.g. jQuery, Prototype, YUI, Dojo)</li>
          <li>Skilled in cross-browser/cross-platform issues and web standards</li>
          <li>Excellent social platform integrating skills (Facebook, Twitter, MySpace)</li>
          <li>Proven ability to code HTML</li>
          <li>Attention to detail and ability to work with teams</li>
          <li>Sound communication and intrapersonal skills</li>
        </ul>
        <p>
          <b>Education</b>
        </p>
        <p>Bachelor’s Degree in Computer Science, LaGrange College, Georgia, GA</p>
        <hr />
        
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