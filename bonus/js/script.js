const { createApp } = Vue;

createApp({
    data(){
        return{
            newTask:'',
            cercaParola:'',
            // array dei contatti
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/3/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/3/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/3/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/1/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/1/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/1/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/1/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            attivaImmagine : 0  
        }
    },
    methods: {
         // Funzione per cambiare l'immagine attiva in base all'indice passato come parametro
         cambiaImmagine(index){
            this.attivaImmagine = index;
        },
        
        aggiungiTask(){
            if (this.newTask.trim() !== ''){
                this.contacts[this.attivaImmagine].messages.push({
                    date:new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                    message: this.newTask,
                    status: 'sent'
                });


                this.newTask = '';


                setTimeout(() =>{
    
                    this.contacts[this.attivaImmagine].messages.push({
                        date:new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                        message: 'ok',
                        status: 'received'
                    });
                }, 1000)
            }
        },

        ricercaParola(){
            let nomeRicercato = this.cercaParola.toLowerCase();
            this.contacts.forEach((contact) => {
                let contactName = contact.name.toLowerCase();
                contact.visible = contactName.includes(nomeRicercato);
            });
        },

        eliminaMessaggio(index){
            this.contacts[this.attivaImmagine].messages.splice(index, 1)
        },

        getLastMessage(contact) {
            const messages = contact.messages;
            if (messages.length > 0) {
                const lastMessage = messages[messages.length - 1];
                return lastMessage.message;
            }
            return '';
        },
        
        getLastLogin(contact) {
            let messages = contact.messages;
            if (messages.length > 0) {
              let last_login = messages[messages.length - 1];
              return last_login.date.slice(0, 9);
            }
            return '';
        },

        getTimeLogin() {
            let messages = this.contacts[this.attivaImmagine].messages;
            if (messages.length > 0) {
              let time_login = messages[messages.length - 1];
              return time_login.date.slice(10, 15);
            }
            return '';
        }
    },
}).mount('#app')
