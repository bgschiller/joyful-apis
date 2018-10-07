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
        <div class="vertical-center smaller-08" v-html="s3AbortOnError" />
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
          <div v-visible="step >= 2" class="vertical-center smaller-08" v-html="s3AbortOnError" />
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
      <slide class="title-only">
        <h2>On the other hand...</h2>
      </slide>
      <slide>
        <div class="img-contain" style="background-image: url(/images/i_dont_care.jpg)" />
      </slide>
      <slide :steps="10">
        <h2 v-if="step >= 9" class="floating-header">
          Joyful API Design
        </h2>
        <div class="by-halves">
          <ul class="left-align unbulleted">
            <li v-visible="step >= 2" :class="{ stricken: step >= 6 }">Organized according to how it works</li>
            <li v-visible="step >= 3"  :class="{ stricken: step >= 7 }">Left all the complexity</li>
            <li v-visible="step >= 4"  :class="{ stricken: step >= 8 }">Roll-your-own error handling</li>
          </ul>
          <div
            class="vertical-center smaller-08"
            v-html="s3AbortOnError"
            v-if="step <= 4"
          />
          <ul v-if="step>=5" class="left-align unbulleted">
            <li v-visible="step >= 6">Orient around use, not internals</li>
            <li v-visible="step >= 7">Move complexity downward</li>
            <li v-visible="step >= 8">Suffer for your API</li>
          </ul>
        </div>
        <h2 v-if="step >= 10" class="floating-header bottom-header">
          Empathy
        </h2>
      </slide>
      <slide class="title-only">
        <h2>Orient around use, not internals</h2>
      </slide>
      <slide>
        <div class="vertical-center" v-html="pyUrllib2" />
      </slide>
      <slide>
        <div class="vertical-center" v-html="pyRequests" />
        <div class="credit">
          <a href="https://gist.github.com/kennethreitz/973705">
            https://gist.github.com/kennethreitz/973705
          </a>
        </div>
      </slide>
      <slide class="title-only">
        <h2>Move complexity downard</h2>
      </slide>
      <slide>
        imperative DOM manipulation vs Virtual DOM. (maybe Sarah Drasner jQuery vs Vue)
        (maybe https://bl.ocks.org/mbostock/3808234)
      </slide>
      <slide>
        <div class="blockquote">
          Something inevitably has to put shit in the DOM. -David Cushman
        </div>
      </slide>
      <slide class="title-only">
        <h2>Suffer for your API</h2>
      </slide>
      <slide>
        https://github.com/jwt-dotnet/jwt#parsing-decoding-and-verifying-token
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
import s3AbortOnError from './code-snippets/08-s3-abort-on-error.html';
import s3IdealizedInner from './code-snippets/09-s3-idealized-inner.html';
import pyUrllib2 from './code-snippets/10_urllib2.html';
import pyRequests from './code-snippets/11_requests.html';

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
      s3AbortOnError,
      s3IdealizedInner,
      pyRequests,
      pyUrllib2,
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
.eg-slideshow {
  background-image: url(/images/linen_texture_four_times.jpg);
}
.eg-slide {
  background-color: none;
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
  font-size: 0.5rem;
}
.smaller-08 {
  font-size: 0.38rem;
}
.floating-header {
  position: absolute;
  width: 100%;
  &.bottom-header {
    top: 60%;
  }
}
.credit {
  position: absolute;
  width: fit-content;
  right: 20px;
  bottom: 20px;
}
.by-halves {
  display: flex;
  height: 100vh;
  > * {
    width: 45vw;
    margin: 0 auto;
    align-self: center;
  }
  ul.left-align.unbulleted {
    margin-left: 0;
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

.stricken {
  text-decoration: line-through;
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
