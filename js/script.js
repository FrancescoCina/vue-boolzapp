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
            // let msgInfo = [];
            contacts.forEach(singleContact => {
                for (property in singleContact) {
                    if (singleContact[property] === true) {
                        if (this.messageUser.message !== "") {
                            singleContact.messages.push(this.messageUser);
                            setTimeout(() => {
                                singleContact.messages.push(this.autoAnswer);
                            }, 1000)
                        }
                    }
                }
            })
        },
        searchAndShowInContactList(element) {
            if (this.searchContact.trim() === "") {
                return true;
            }
            const simpleSearch = this.searchContact.trim().toLowerCase();
            element = element.toLowerCase();
            return element.includes(simpleSearch);
        }
    },
})
