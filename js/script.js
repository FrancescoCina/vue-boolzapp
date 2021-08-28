console.log("Vue Ok", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data,
    methods: {
        changePositionMessage(status) {
            if (status === "sent") {
                return "justify-content-end";
            } else if (status === "received") {
                return "justify-content-start";
            } else return "";
        }
    },
})