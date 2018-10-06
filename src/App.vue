<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide>
        <span class="small" v-if="isParent">
          (~10 months ago, amazon s3 upload from express)
        </span>
      </slide>
      <slide>
        <div class="vertical-center" v-html="s3Idealized" />
      </slide>
      <slide>
        <div class="vertical-center" v-html="s3Callback" />
      </slide>
      <slide>
        <div class="vertical-center smaller-03" v-html="s3Multipart" />
      </slide>
      <slide>
        <div class="vertical-center smaller-04" v-html="s3SavePartNum" />
      </slide>
      <slide>
        <div class="vertical-center smaller-05" v-html="s3OrderedParts" />
      </slide>
      <slide>
        <div class="vertical-center smaller-06" v-html="s3EndStream" />
      </slide>
      <slide>
        <div class="vertical-center smaller-07" v-html="s3FiveMb" />
      </slide>
      <slide>
        <h2>Joyful APIs</h2>
        <ul class="unbulleted center-list left-align">
          <li>Brian Schiller</li>
          <li>@bgschiller</li>
          <li>brianschiller.com</li>
          <li>devetry.com</li>
        </ul>
      </slide>
      <slide :steps="2">
        <div class="by-halves">
          <div class="vertical-center" v-html="s3IdealizedInner" />
          <div v-visible="step >= 2" class="vertical-center smaller-07" v-html="s3FiveMb" />
        </div>
      </slide>
      <slide :steps="4">
        <h2>In Amazon's defense...</h2>
        <ul class="center-list larger">
          <li v-visible="step>=2">fault-tolerant</li>
          <li v-visible="step>=3">parallelizable</li>
          <li v-visible="step>=4">direct map to HTTP</li>
        </ul>
      </slide>
    </div>
  </div>
</template>

<script>
import eagle from 'eagle.js';
import s3Idealized from './code-snippets/01-s3-idealized.html';
import s3Callback from './code-snippets/02-s3-callback.html';
import s3Multipart from './code-snippets/03-s3-multipart.html';
import s3SavePartNum from './code-snippets/04-s3-save-part-number.html';
import s3OrderedParts from './code-snippets/05-s3-ordered-parts.html';
import s3EndStream from './code-snippets/06-s3-end-stream-not-end-upload.html';
import s3FiveMb from './code-snippets/07-s3-five-mb-chunks.html';
import s3IdealizedInner from './code-snippets/08-s3-idealized-inner.html';

export default {
  name: 'app',
  mixins: [eagle.slideshow],
  data() {
    return {
      s3Idealized,
      s3Callback,
      s3Multipart,
      s3SavePartNum,
      s3OrderedParts,
      s3EndStream,
      s3FiveMb,
      s3IdealizedInner,
    };
  },
};
</script>

<style lang="scss">
@import './code-snippets/highlight-styles.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.smaller-03 {
  font-size: 0.8rem;
}
.smaller-04 {
  font-size: 0.8rem;
}
.smaller-05 {
  font-size: 0.7rem;
}
.smaller-06 {
  font-size: 0.6rem;
}
.smaller-07 {
  font-size: 0.38rem;
}

.by-halves {
  display: flex;
  > div {
    width: 45vw;
    margin: 0 auto;
  }
}

.highlight pre {
  background-color: #f0f3f3;
  text-align: left;
  width: fit-content;
  margin: 0 auto;
  padding: 20px;
}

body {
  margin: 0;
}
.vertical-center {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 100vh;
}
p {
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
}
.unbulleted {
  list-style: none;
  max-width: 90vw;
  li {
    margin-bottom: 1rem;
  }
}
.center-list {
  width: fit-content;
  margin-left: auto;
  margin-right:auto;
  text-align: left;
}
.img-contain {
  background-repeat: no-repeat;
  background-position: center;
  background-size:contain;
  width: 100vw;
  height: 100vh;
  max-width: 100vw !important;
}

.larger {
  font-size: 3rem;
}
.left-align {
  text-align: left;
}
.title-only {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.white-back {
  background-color: white;
}

</style>
