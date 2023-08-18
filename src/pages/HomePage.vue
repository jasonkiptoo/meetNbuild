<template>
  <q-page class="flex-center">
   <div class="ball-container bg-red flex justify-end" style="width: 600px;">
    <div class="rolling-ball">
      <q-avatar class="my-avatar" style="background-color: #ffa500; color: #000" size="200px">
        <h2 class="text-bold">M&B</h2>
      </q-avatar>
    </div>
  </div>

    <q-card class="q-ml-md" style="width: 500px;">
      <p class="text-h4 text-weight-bolder q-mx-xl awesome-heading">
        <span
          class="dancing-word"
          v-for="(word, index) in words"
          :key="index"
          :style="{ animationDelay: `${index * .2}s` }"
          >{{ word }}</span
        >
      </p>
      <p class="text-h7 text-weight-lighter q-mx-xl awesome-subheading">
        Your Dev Journey Starts Here! MeetNBuild <br/> where innovation meets
        collaboration,<br/> and developers build their dreams, one line at a time.
      </p>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      words: ["Code,", "Connect,", "Create"],
    };
  },
});
</script>
<style scoped>
.awesome-heading {
  font-family: "Lobster", cursive; /* Custom font */
  color: #ffa500; /* Orange color */
  letter-spacing: 1px; /* Adjust letter spacing */
  margin-bottom: 20px; /* Add spacing below */
  text-align: start;
}

.awesome-subheading {
  font-size: 18px; /* Font size */
  color: #333; /* Text color */
  line-height: 1.6; /* Line height */
  margin-bottom: 40px; /* Add more spacing below */
}

.dancing-word {
  display: inline-block;
  animation: danceAnimation 1.5s infinite;
  transform-origin: center bottom;
}

@keyframes danceAnimation {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
.ball-container {
  position: relative;
  overflow: hidden;

}

.rolling-ball {
  transform: rotate(90deg);
  width: 200px;
  height: 200px;
  background-color: transparent;
  position: relative;
  bottom: 0;
  left: 0;
  animation: rollAnimation 10s infinite alternate;
  transform-origin: left top;
}

@keyframes rollAnimation {
  0%, 100% {
    transform: translateX(10);
  }
  100% {
    transform: translateX(calc(100% - 600px)) ;
  }
}

.my-avatar {
  margin: 0;
  text-align: center;
}
</style>
