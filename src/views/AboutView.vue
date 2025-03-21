<script setup></script>

<template>
  <div class="about-container">
    <h1>About Monkedos</h1>

    <section class="about-section">
      <h2>What is Monkedos?</h2>
      <p>
        Monkedos is a demo todo application built to showcase the integration of Vue.js with GitHub
        Actions for continuous integration and deployment. It demonstrates modern web development
        practices and DevOps principles.
      </p>
      <p>By Mykola Antokhov</p>
    </section>

    <section class="about-section">
      <h2>Technical Stack</h2>
      <ul>
        <li>Vue 3 with Composition API</li>
        <li>Vue Router for navigation</li>
        <li>SCSS for styling</li>
        <li>GitHub Actions for CI/CD</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>Features</h2>
      <ul>
        <li>Create, complete, and delete todos</li>
        <li>Responsive design</li>
        <li>Persistent storage</li>
        <li>Automated testing and deployment</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>GitHub Integration</h2>
      <p>
        This project uses GitHub Actions to automatically test, build, and deploy changes when code
        is pushed to the main branch. The workflow includes:
      </p>
      <ul>
        <li>Automated testing</li>
        <li>Code quality checks</li>
        <li>Build verification</li>
        <li>Automatic deployment</li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 0 1rem;

  h1 {
    color: var(--primary-color);
    margin-bottom: 2rem;
    text-align: center;
  }

  .about-section {
    background-color: var(--bg-secondary);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 2rem;

    h2 {
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-light);
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: disc;
      margin-left: 1.5rem;
      color: var(--text-light);

      li {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
