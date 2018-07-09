// Project base store

export default {

    state: {

        // Create roject
        createProject: {

            name: "",
            deadline: {
                day: "",
                month: "",
                year: ""
            },
            priority: {
                userBadge: false,
                value: "",
                options: [
                    'low',
                    'mid',
                    'high'
                ]
            },
            admin: {
                userBadge: true,
                value: [],
                options: [

                    {
                        name: "Jane",
                        avatar: "/images/janeDoe.png",
                        id: "1"
                    },
                    {
                        name: "Ignat",
                        avatar: "/images/johnDoe.png",
                        id: "2"
                    },
                    {
                        name: "Vanja",
                        avatar: "/images/johnDoe.png",
                        id: "3"
                    }

                ]
            },
            client: {
                userBadge: false,
                value: "",
                options: [ 'AD', 'AO', 'BR', 'CS', 'CT', 'DB', 'FA', 'FT', 'GR', 'HM', 'IN', 'KN', 'OV', 'PP', 'PS', 'RP', 'SF', 'TK', 'VD', 'VT', 'ZZ' ]
            },
            users: {
                userBadge: true,
                value: [],
                options: [

                    {
                        name: "Jane",
                        avatar: "/images/janeDoe.png",
                        id: "1"
                    },
                    {
                        name: "Ignat",
                        avatar: "/images/johnDoe.png",
                        id: "2"
                    },
                    {
                        name: "Vanja",
                        avatar: "/images/johnDoe.png",
                        id: "3"
                    },
                    {
                        name: "Ivana",
                        avatar: "/images/janeDoe.png",
                        id: "4"
                    },
                    {
                        name: "Nevena",
                        avatar: "/images/johnDoe.png",
                        id: "5"
                    },
                    {
                        name: "Nikola",
                        avatar: "/images/johnDoe.png",
                        id: "6"
                    },
                    {
                        name: "Jovana",
                        avatar: "/images/janeDoe.png",
                        id: "7"
                    },
                    {
                        name: "Joco",
                        avatar: "/images/johnDoe.png",
                        id: "15"
                    },
                    {
                        name: "Dejan",
                        avatar: "/images/johnDoe.png",
                        id: "8"
                    },
                    {
                        name: "Maja",
                        avatar: "/images/janeDoe.png",
                        id: "9"
                    },
                    {
                        name: "Filip",
                        avatar: "/images/johnDoe.png",
                        id: "10"
                    },
                    {
                        name: "Macko",
                        avatar: "/images/johnDoe.png",
                        id: "11"
                    },
                    {
                        name: "Kosta",
                        avatar: "/images/janeDoe.png",
                        id: "12"
                    },
                    {
                        name: "Bojan",
                        avatar: "/images/johnDoe.png",
                        id: "13"
                    },
                    {
                        name: "Ana",
                        avatar: "/images/johnDoe.png",
                        id: "14"
                    }

                ]
            }

        }

    },

    mutations: {

        // Create project mutations
        updateCreateProjectName( state, name ) { return state.createProject.name = name },
        updateCreateProjectDeadlineDay( state, day ) { return state.createProject.deadline.day = day },
        updateCreateProjectDeadlineMonth( state, month ) { return state.createProject.deadline.month = month },
        updateCreateProjectDeadlineYear( state, year ) { return state.createProject.deadline.year = year },
        updateCreateProjectPriority( state, priority ) { return state.createProject.priority.value = priority },
        updateCreateProjectAdmin( state, admin ) { return state.createProject.admin.value = admin },
        updateCreateProjectClient( state, client ) { return state.createProject.client.value = client },
        updateCreateProjectUsers( state, users ) { return state.createProject.users.value = users }

    },
    actions: {}

}