console.log("Vue Ok", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: data,
    methods: {
        changePositionMessage(status) {
            if (status === "sent") {
                return "justify-content-end";
            } else if (status === "received") {
                return "justify-content-start";
            } else return "";
        },
        changeConversation(contact, index, contacts) {
            contacts.forEach(singleContact => {

                for (property in singleContact) {
                    if (singleContact[property] === true) {
                        singleContact[property] = false
                    }
                }
            });
            contact.visible = true;
        },
        sendMessage(contacts) {
            contacts.forEach(singleContact => {
                for (property in singleContact) {
                    if (singleContact[property] === true) {
                        singleContact.messages.push(this.messageUser);
                        setTimeout(() => {
                            singleContact.messages.push(this.autoAnswer);
                        }, 1000)
                    }
                }
            })
        }
    },
})
