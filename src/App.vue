<template>
  <router-view />
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  background-color: #f2f2f2;
}

#app {
  font-family: "Raleway", sans-serif;
  color: black;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

summary::-webkit-details-marker {
  display: none;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

@keyframes sweep {
  0% {
    opacity: 0;
    margin-left: -10px;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
  }
}

details[open] summary ~ * {
  animation: sweep 0.5s ease-in-out;
}

details[open] {
  transition: all 10s ease;
}

.accordion__container {
  width: 80%;
}

.accordion__box {
  background-color: #fff;
  box-shadow: 0px 0px 7px -1px rgba(142, 136, 136, 0.99);
  border-radius: 10px;
  transition: all 10s ease;
  margin: 20px;
  summary {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 60px;
    outline: none;
    .summary__title {
      width: 70%;
      display: flex;
      justify-content: flex-start;
      font-size: 20px;
      h3 {
        padding-left: 10%;
      }
    }
    .summary__buttons {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      button {
        height: 100%;
        width: 50%;
        border: none;
        outline: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15px;
        img {
          height: 30%;
          margin-right: 10px;
        }
      }
    }
  }
  .details_list {
    list-style: none;
    text-align: start;
    padding: 15px;
    li {
      padding: 8px;
    }
    ul {
      list-style: none;
      text-align: start;
      padding: 0;
      padding-top: 15px;
    }
  }
}
</style>
