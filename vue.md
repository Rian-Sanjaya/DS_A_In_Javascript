<!DOCTYPE html>
<html>
<head>
  <title>Hello Vue</title>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.min.js"></script>
  <script src="https://unpkg.com/vue-router@3.1.3/dist/vue-router.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vuex/3.6.2/vuex.min.js"></script>
  <link rel="stylesheet" href="mycss.css">
<body>
  <div id="greeting">
    <!-- Modify this part of the HTML -->
    <h2>
      Hello {{ name }}!
    </h2>
    <div class='section1' :class="{show: oneShow}">Section One</div>
    <div class="section2" :class="{show: twoShow}">Section Two</div>
    <div class="section3" :class="{show: threeShow}">
      Section Three
    </div>
    <div>
      Count: {{ store.getters.getCount }}
    </div>
    <div>
      <button @click="store.dispatch('increment')">
        Add
      </button>
      <button @click="router.push('/foo')">
        Foo
      </button>
      <button @click="router.push('/bar')">
        Bar
      </button>
      <router-link to="/user/rian">Go to User</router-link>
    </div>
    <router-view></router-view>
  </div>
  <script>
  	// define routes
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }
    const User = {
      template: '<div>User {{ $route.params.id }}</div>'
    }
  	const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/user/:id', component: User }
    ]
    const router = new VueRouter({
      routes
    })
    // define store
    const store = new Vuex.Store({
      state: {
        count: 0
      },
      getters: {
        getCount: state => {
          return state.count
        }
      },
      mutations: {
        increment (state) {
          state.count++
        }
      },
      actions: {
        increment (context) {
          context.commit('increment')
        }
      }
    })
    var vm = new Vue({
    	router,
      store,
      el: '#greeting',
      data: {
        name: "Vue",
        oneShow: false,
        twoShow: false,
        threeShow: false,
      },
      mounted() {
      	this.name = "Lonewolf"
        setTimeout(() => {
        	this.oneShow = true;
          this.twoShow = true;
          this.threeShow = true;
        }, 1000)
      }
    });
  </script>
</body>
</html>

// css file
.section1, .section2, .section3 {
  display: inline-block;
  width: 100px;
  height: 100px;
  margin-right: 10px;
  animation: roll 3s infinite ease 4s;
  opacity: 0;
}

.section1 {
  background-color: blue;
  transition: opacity 0.5s ease;
}
.section2 {
  background-color: red;
  transition: opacity 0.5s ease 1s;
}
.section3 {
  background-color: green;
  transition: opacity 0.5s ease 2s;
}
.section1.show, .section2.show, .section3.show {
  opacity: 1;
}
    
@keyframes roll {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}