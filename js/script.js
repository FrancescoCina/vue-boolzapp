console.log("Vue Ok", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        currentContact: 0,
        searchContact: "",
        messageText: "",
        autoAnswer: {
            date: '10/01/2020 15:30:55',
            message: "Ok",
            status: 'received',
        },
        user: {
            name: 'Francesco',
            avatar: '_io',
        },
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received',
                    },
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                    },
                ],
            },
        ],
    },
    methods: {
        changePositionMessage(status) {
            if (status === "sent") {
                return "justify-content-end";
            } else if (status === "received") {
                return "justify-content-start";
            } else return "";
        },
        changeConversation(index) {
            this.currentContact = index;
        },
        /*  showLastSeen() {
             let contactFocused = this.contacts[this.currentContact].this.messages;
             const lastSeenOfContactFocused = contactFocused[messages.length - 1].date;
             return lastSeenOfContactFocused;
         }, */

        sendMessage() {
            if (!this.messageText) return;
            this.addMessageInArray(this.messageText, "sent");
            setTimeout(() => {
                this.addMessageInArray("Ok", "received");
            }, 1000)
        },
        addMessageInArray(text, status) {
            const message = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                message: text,
                status,
            };
            this.contacts[this.currentContact].messages.push(message);
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



/*

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



*/




/*

 const messageUser = {
                date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
                message: this.messageText,
                status: "sent",
            };
            this.contacts[this.currentContact].messages.push(messageUser);




*/