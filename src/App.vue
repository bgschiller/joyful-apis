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
        <ul class="unbulleted center-list left-align white-card">
          <li class="who-am-i">Brian Schiller</li>
          <li>@bgschiller</li>
          <li>brianschiller.com</li>
          <li>devetry.com</li>
        </ul>
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
        <div class="vertical-center smaller-06" v-html="directDomManip" />
      </slide>
      <slide>
        <div class="vertical-center" v-html="vueReactive" />
      </slide>
      <slide class="vertical-center">
        <div class="blockquote white-card">
          Something inevitably has to put shit in the DOM.
          <div class="attribution">-David Cushman</div>
        </div>
      </slide>
      <slide class="title-only">
        <h2>Suffer for your API</h2>
      </slide>
      <slide>
        <div class="vertical-center" v-html="jwtDotnet" />
        <div class="credit">
          <a href="https://github.com/jwt-dotnet/jwt#parsing-decoding-and-verifying-token">
            https://github.com/jwt-dotnet/jwt#parsing-decoding-and-verifying-token
          </a>
        </div>
      </slide>
      <slide class="vertical-center">
        <img src="/joyful-apis/images/no1curr.gif" />
      </slide>
      <slide>
        <div class="vertical-center" v-html="jwtDotnetIdealized" />
      </slide>
      <slide>
        <div class="vertical-center" v-html="jwtDotnetStatic" />
      </slide>
      <slide class="title-only">
        <h2>Make common things easy</h2>
      </slide>
      <slide>
        <div class="vertical-center" v-html="pulpAnd" />
        <div class="credit">
          <a href="https://github.com/bgschiller/citrus">
            https://github.com/bgschiller/citrus
          </a>
        </div>
      </slide>
      <slide>
        <div class="vertical-center" v-html="citrusAnd" />
      </slide>
      <slide class="title-only">
        <h2>But what about that S3 API?</h2>
      </slide>
      <slide :steps="2">
        <div class="by-halves">
          <div class="vertical-center" v-html="s3IdealizedInner" />
          <div v-visible="step >= 2" class="vertical-center smaller-08" v-html="s3AbortOnError" />
        </div>
      </slide>
      <slide :steps="4">
        <h2>In Amazon's defense...</h2>
        <ul class="center-list larger white-card">
          <li v-visible="step>=2">fault-tolerant</li>
          <li v-visible="step>=3">parallelizable</li>
          <li v-visible="step>=4">direct map to HTTP</li>
        </ul>
      </slide>
      <slide class="title-only">
        <h2>On the other hand...</h2>
      </slide>
      <slide>
        <div class="img-contain" style="background-image: url(/joyful-apis/images/i_dont_care.jpg)" />
      </slide>
      <slide :steps="10">
        <h2 v-if="step >= 9" class="floating-header">
          Joyful API Design
        </h2>
        <div class="by-halves">
          <ul class="left-align unbulleted white-card">
            <li v-visible="step >= 2" :class="{ stricken: step >= 6 }">Organized according to how it works</li>
            <li v-visible="step >= 3"  :class="{ stricken: step >= 7 }">Left all the complexity</li>
            <li v-visible="step >= 4"  :class="{ stricken: step >= 8 }">Roll-your-own error handling</li>
          </ul>
          <div
            class="vertical-center smaller-08"
            v-html="s3AbortOnError"
            v-if="step <= 4"
          />
          <ul v-if="step>=5" class="left-align unbulleted white-card">
            <li v-visible="step >= 6">Orient around use, not internals</li>
            <li v-visible="step >= 7">Move complexity downward</li>
            <li v-visible="step >= 8">Suffer for your API</li>
          </ul>
        </div>
        <h2 v-if="step >= 10" class="floating-header bottom-header">
          Empathy
        </h2>
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
import directDomManip from './code-snippets/12-direct-DOM-manip.html';
import vueReactive from './code-snippets/13-vue-reactive.html';
import jwtDotnet from './code-snippets/14-jwt-dotnet.html';
import jwtDotnetIdealized from './code-snippets/15-jwt-dotnet-idealized.html';
import jwtDotnetStatic from './code-snippets/16-jwt-static.html';
import pulpAnd from './code-snippets/17-pulp-and.html';
import citrusAnd from './code-snippets/18-citrus-and.html';


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
      directDomManip,
      vueReactive,
      jwtDotnet,
      jwtDotnetIdealized,
      jwtDotnetStatic,
      pulpAnd,
      citrusAnd,
    };
  },
  methods: {
    updateSlides: function () {
      this.currentSlideIndex = +this.$route.params.slide
      const step = +this.$route.params.step;
      this.$nextTick(() => {
        this.step = step;
      })
    },
    updateURL: function () {
      this.$router.push(`/${this.currentSlideIndex}/${this.step}`)
    }
  },
  mounted() {
    this.updateSlides();
  },
  watch: {
    step: 'updateURL',
    currentSlideIndex: 'updateURL',
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
  background-image: url(/joyful-apis/images/linen_texture_four_times.jpg);
}
.eg-slide {
  background-color: none;
}

.white-card {
  padding: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 8px 8px 10px rgb(80, 80, 80);

}

ul.white-card:not(.unbulleted) {
  padding-left: 60px;
}


.blockquote {
  justify-self: center;
  .attribution {
    width: 100%;
    text-align: right;
  }
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
  justify-content: space-around;
  > * {
    width: 45vw;
    margin: 0 auto;
    align-self: center;
  }

  ul.left-align.unbulleted {
    margin-left: 63px;
  }
  ul {
    width: 37vw;
  }
}

.who-am-i {
  font-weight: bold;
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
