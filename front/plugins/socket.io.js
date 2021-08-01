import Vue from "vue";
import VueSocketIO from "vue-3-socket.io";
import SocketIO from "socket.io-client/dist/socket.io";

export default function({ store }) {
  Vue.use(
    new VueSocketIO({
      debug: false,
      connection: SocketIO("http://localhost:443/", {
        transports: ["websocket"],
      }),
      vuex: {
        store,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_",
      },
    })
  );
}
