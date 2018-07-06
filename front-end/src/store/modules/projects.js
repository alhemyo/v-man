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
                options: [ 'AD', 'AO', 'BR', 'CS', 'CT', 'VT', 'DB,', 'FA', 'FT', 'GR', 'HM', 'IN', 'KN', 'OV', 'PP', 'PS', 'RP', 'SF', 'TK', 'VD', 'VT', 'ZZ' ]
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
            }

        }

    },
    mutations: {},
    actions: {}

}