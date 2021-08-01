import Vue from "vue";
import VueSocketIO from "vue-3-socket.io";

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: "http://localhost:443/",
      vuex: {
        store,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_",
      },
      options: {
        transports: ["websocket"],
      },
    })
  );
}
