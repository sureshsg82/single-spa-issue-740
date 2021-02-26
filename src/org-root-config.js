import {
  mountRootParcel,
  registerApplication,
  start,
  UNMOUNTING,
} from "single-spa";

registerApplication({
  name: "@org/navbar",
  app: {
    async mount() {
      document.querySelector("main").textContent = "app is mounted";
    },
    async unmount() {
      document.querySelector("main").textContent = "";
    },
  },
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
