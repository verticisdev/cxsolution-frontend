export interface TableType {
    id?: string;
    imgsrc?: string;
    name?: string;
    post?: string;
    pname?: string;
    teams?: any[];
    status?: string;
    budget?: string;
}

export interface EnTableType {
    id: string;
    imgsrc: string;
    name: string;
    email: string;
    pname: string;
    teams: {
        id: string;
        color: string;
        text: string;
    }[];
    status: string;
    weeks: string;
    budget: string;
}

export interface IClientTable {
    id: number;
    logo: string;
    name: string;
    email: string;
    shots_quantity: number;
    answers_quantity: number;
    score: number;
    classification: string;
    [x: string]: string | number;
    slug: string;
    status: string;
}

export interface CustomerResponseType {
    id: number;
    send_date: string;
    send_to: string;
    answer: boolean | string;
    view: boolean;
    score: number;
    send_method: string;
    [x: string]: string | number | boolean;
}

export interface NpsDataType {
    id: number;
    customer_response_id: number;
    message: string;
    main_question: string;
    answer: number;
    questions: Array<{
        id: number;
        question: string;
        answer: boolean;
    }>;
    feedback: string;
}

const basicsTableData: TableType[] = [
    {
        id: '1',
        imgsrc: "/images/profile/user-1.jpg",
        name: 'Sunil Joshi',
        post: 'Web Designer',
        pname: 'Elite Admin',
        teams: [
            {
                id: '1.1',
                color: 'secondary.main',
                text: 'S',
            },
            {
                id: '1.2',
                color: 'error.main',
                text: 'D',
            },
        ],
        status: 'Active',
        budget: '3.9',
    },
    {
        id: '2',
        imgsrc: "/images/profile/user-2.jpg",
        name: 'Andrew McDownland',
        post: 'Project Manager',
        pname: 'Real Homes WP Theme',
        teams: [
            {
                id: '2.1',
                color: 'primary.main',
                text: 'A',
            },
            {
                id: '2.2',
                color: 'warning.main',
                text: 'X',
            },
            {
                id: '2.3',
                color: 'secondary.main',
                text: 'N',
            },
        ],
        status: 'Pending',
        budget: '24.5',
    },
    {
        id: '3',
        imgsrc: "/images/profile/user-3.jpg",
        name: 'Christopher Jamil',
        post: 'Project Manager',
        pname: 'MedicalPro WP Theme',
        teams: [
            {
                id: '3.1',
                color: 'error.main',
                text: 'X',
            },
        ],
        status: 'Completed',
        budget: '12.8',
    },
    {
        id: '4',
        imgsrc: "/images/profile/user-4.jpg",
        name: 'Nirav Joshi',
        post: 'Frontend Engineer',
        pname: 'Hosting Press HTML',
        teams: [
            {
                id: '4.1',
                color: 'primary.main',
                text: 'Y',
            },
            {
                id: '4.2',
                color: 'error.main',
                text: 'X',
            },
        ],
        status: 'Active',
        budget: '2.4',
    },
    {
        id: '5',
        imgsrc: "/images/profile/user-5.jpg",
        name: 'Micheal Doe',
        post: 'Content Writer',
        pname: 'Helping Hands WP Theme',
        teams: [
            {
                id: '5.1',
                color: 'secondary.main',
                text: 'S',
            },
        ],
        status: 'Cancel',
        budget: '9.3',
    },
];

const EnhancedTableData: EnTableType[] = [
    {
        id: '1',
        imgsrc: "/images/profile/user-1.jpg",
        name: 'Sunil Joshi',
        email: 'sunil@gmail.com',
        pname: 'Elite Admin',
        teams: [
            {
                id: '1.1',
                color: 'secondary.main',
                text: 'S',
            },
            {
                id: '1.2',
                color: 'error.main',
                text: 'D',
            },
        ],
        status: 'Active',
        weeks: '11',
        budget: '3.9',
    },
    {
        id: '2',
        imgsrc: "/images/profile/user-2.jpg",
        name: 'Andrew McDownland',
        email: 'andrew@gmail.com',
        pname: 'Real Homes WP Theme',
        teams: [
            {
                id: '2.1',
                color: 'primary.main',
                text: 'A',
            },
            {
                id: '2.2',
                color: 'warning.main',
                text: 'X',
            },
            {
                id: '2.3',
                color: 'secondary.main',
                text: 'N',
            },
        ],
        status: 'Pending',
        weeks: '19',
        budget: '24.5',
    },
    {
        id: '3',
        imgsrc: "/images/profile/user-3.jpg",
        name: 'Christopher Jamil',
        email: 'jamil@gmail.com',
        pname: 'MedicalPro WP Theme',
        teams: [
            {
                id: '3.1',
                color: 'error.main',
                text: 'X',
            },
        ],
        status: 'Completed',
        weeks: '30',
        budget: '12.8',
    },
    {
        id: '4',
        imgsrc: "/images/profile/user-4.jpg",
        name: 'Nirav Joshi',
        email: 'nirav@gmail.com',
        pname: 'Hosting Press HTML',
        teams: [
            {
                id: '4.1',
                color: 'primary.main',
                text: 'Y',
            },
            {
                id: '4.2',
                color: 'error.main',
                text: 'X',
            },
        ],
        status: 'Active',
        weeks: '40',
        budget: '2.4',
    },
    {
        id: '5',
        imgsrc: "/images/profile/user-5.jpg",
        name: 'Micheal Doe',
        email: 'micheal@gmail.com',
        pname: 'Helping Hands WP Theme',
        teams: [
            {
                id: '5.1',
                color: 'secondary.main',
                text: 'S',
            },
        ],
        status: 'Cancel',
        weeks: '1',
        budget: '9.3',
    },
    {
        id: '6',
        imgsrc: "/images/profile/user-4.jpg",
        name: 'Nirav Joshi',
        email: 'nirav@gmail.com',
        pname: 'Hosting Press HTML',
        teams: [
            {
                id: '6.1',
                color: 'primary.main',
                text: 'Y',
            },
            {
                id: '6.2',
                color: 'error.main',
                text: 'X',
            },
        ],
        status: 'Active',
        weeks: '16',
        budget: '2.4',
    },
    {
        id: '7',
        imgsrc: "/images/profile/user-1.jpg",
        name: 'Sunil Joshi',
        email: 'sunil@gmail.com',
        pname: 'Elite Admin',
        teams: [
            {
                id: '7.1',
                color: 'secondary.main',
                text: 'S',
            },
            {
                id: '7.2',
                color: 'error.main',
                text: 'D',
            },
        ],
        status: 'Active',
        weeks: '12',
        budget: '3.9',
    },
    {
        id: '8',
        imgsrc: "/images/profile/user-2.jpg",
        name: 'Andrew McDownland',
        email: 'andrew@gmail.com',
        pname: 'Real Homes WP Theme',
        teams: [
            {
                id: '8.1',
                color: 'primary.main',
                text: 'A',
            },
            {
                id: '8.2',
                color: 'warning.main',
                text: 'X',
            },
            {
                id: '8.3',
                color: 'secondary.main',
                text: 'N',
            },
        ],
        status: 'Pending',
        weeks: '14',
        budget: '24.5',
    },
    {
        id: '9',
        imgsrc: "/images/profile/user-3.jpg",
        name: 'Christopher Jamil',
        email: 'jamil@gmail.com',
        pname: 'MedicalPro WP Theme',
        teams: [
            {
                id: '9.1',
                color: 'error.main',
                text: 'X',
            },
        ],
        status: 'Completed',
        weeks: '12',
        budget: '12.8',
    },

    {
        id: '10',
        imgsrc: "/images/profile/user-5.jpg",
        name: 'Micheal Doe',
        email: 'micheal@gmail.com',
        pname: 'Helping Hands WP Theme',
        teams: [
            {
                id: '10.1',
                color: 'secondary.main',
                text: 'S',
            },
        ],
        status: 'Cancel',
        weeks: '9',
        budget: '9.3',
    },
];

const clientTableData: IClientTable[] = [
    {
        id: 1,
        logo: "/images/profile/user-5.jpg",
        name: "3D Cure",
        email: "3dcure@gmail.com",
        shots_quantity: 1,
        answers_quantity: 1,
        score: 10,
        classification: "Promotor",
        slug: "3d-cure",
        status: "active",
    },
    {
        id: 2,
        logo: "/images/profile/user-5.jpg",
        name: "8 Horas",
        email: "8horas@gmail.com",
        shots_quantity: 4,
        answers_quantity: 1,
        score: 6,
        classification: "Detrator",
        slug: "8-horas",
        status: "active",
    },
    {
        id: 3,
        logo: "/images/profile/user-5.jpg",
        name: "ADS Latin",
        email: "adslatin@gmail.com",
        shots_quantity: 15,
        answers_quantity: 2,
        score: 8,
        classification: "Neutro",
        slug: "ads-latin",
        status: "active",
    },
    {
        id: 4,
        logo: "/images/profile/user-5.jpg",
        name: "ContaDr",
        email: "contadr@gmail.com",
        shots_quantity: 13,
        answers_quantity: 7,
        score: 8,
        classification: "Neutro",
        slug: "conta-dr",
        status: "active",
    },
    {
        id: 5,
        logo: "/images/profile/user-5.jpg",
        name: "Rede Constrói",
        email: "redeconstroi@gmail.com",
        shots_quantity: 13,
        answers_quantity: 7,
        score: 8,
        classification: "Detrator",
        slug: "rede-constroi",
        status: "active",
    },
    {
        id: 6,
        logo: "/images/profile/user-5.jpg",
        name: "Take Blip",
        email: "blip@gmail.com",
        shots_quantity: 1,
        answers_quantity: 1,
        score: 10,
        classification: "Promotor",
        slug: "blip",
        status: "thrash"
    },
    {
        id: 7,
        logo: "/images/profile/user-5.jpg",
        name: "Leo Velozo",
        email: "leovelozo@gmail.com",
        shots_quantity: 4,
        answers_quantity: 1,
        score: 6,
        classification: "Detrator",
        slug: "leo-velozo",
        status: "thrash"
    },
    {
        id: 8,
        logo: "/images/profile/user-5.jpg",
        name: "Canopus",
        email: "Canopus@gmail.com",
        shots_quantity: 1,
        answers_quantity: 1,
        score: 10,
        classification: "Promotor",
        slug: "canopus",
        status: "inactive"
    },
    {
        id: 9,
        logo: "/images/profile/user-5.jpg",
        name: "Canal Psicologia",
        email: "canalp@gmail.com",
        shots_quantity: 4,
        answers_quantity: 1,
        score: 6,
        classification: "Detrator",
        slug: "canal-psicologia",
        status: "inactive"
    },
    {
        id: 10,
        logo: "/images/profile/user-5.jpg",
        name: "Casa da Piscina",
        email: "casadapiscina@gmail.com",
        shots_quantity: 15,
        answers_quantity: 2,
        score: 8,
        classification: "Neutro",
        slug: "casa-da-piscina",
        status: "inactive"
    },
    {
        id: 11,
        logo: "/images/profile/user-5.jpg",
        name: "DeltaPrice",
        email: "delta@gmail.com",
        shots_quantity: 13,
        answers_quantity: 7,
        score: 8,
        classification: "Neutro",
        slug: "delta-price",
        status: "inactive"
    },
    {
        id: 12,
        logo: "/images/profile/user-5.jpg",
        name: "Affemg",
        email: "affemg@gmail.com",
        shots_quantity: 13,
        answers_quantity: 7,
        score: 8,
        classification: "Detrator",
        slug: "affemg",
        status: "inactive"
    },
];


const customerResponseData: CustomerResponseType[] = [
    {
        "id": 1,
        "send_date": "23/07/2023 13:58",
        "send_to": "Alice Garcia",
        "send_method": "E-mail",
        "answer": "02/08/2023",
        "view": true,
        "score": 8
    },
    {
        "id": 2,
        "send_date": "24/07/2023 10:30",
        "send_to": "Bob Smith",
        "send_method": "E-mail",
        "answer": false,
        "view": true,
        "score": 6
    },
    {
        "id": 3,
        "send_date": "25/07/2023 15:20",
        "send_to": "Carol Johnson",
        "send_method": "E-mail",
        "answer": "26/07/2023",
        "view": true,
        "score": 9
    },
    {
        "id": 4,
        "send_date": "26/07/2023 09:45",
        "send_to": "David Brown",
        "send_method": "E-mail",
        "answer": false,
        "view": false,
        "score": 3
    },
    {
        "id": 5,
        "send_date": "27/07/2023 17:12",
        "send_to": "Eve Williams",
        "send_method": "Whatsapp",
        "answer": "30/07/2023",
        "view": true,
        "score": 7
    },
    {
        "id": 6,
        "send_date": "28/07/2023 14:05",
        "send_to": "Frank Davis",
        "send_method": "Whatsapp",
        "answer": false,
        "view": true,
        "score": 5
    },
    {
        "id": 7,
        "send_date": "29/07/2023 11:18",
        "send_to": "Grace Martinez",
        "send_method": "Whatsapp",
        "answer": "29/07/2023",
        "view": true,
        "score": 9
    },
    {
        "id": 8,
        "send_date": "30/07/2023 08:22",
        "send_to": "Henry Taylor",
        "send_method": "Whatsapp",
        "answer": false,
        "view": false,
        "score": 2
    },
    {
        "id": 9,
        "send_date": "31/07/2023 16:50",
        "send_to": "Ivy Anderson",
        "send_method": "Whatsapp",
        "answer": "05/08/2023",
        "view": true,
        "score": 8
    },
    {
        "id": 10,
        "send_date": "01/08/2023 12:15",
        "send_to": "Jack Robinson",
        "send_method": "Whatsapp",
        "answer": false,
        "view": true,
        "score": 4
    }
];

const npsData: NpsDataType[] = [
    {
        id: 1,
        customer_response_id: 1,
        message: "Como você avalia nossos serviços?",
        main_question: "Em uma escala de 0 a 10, qual é a probabilidade de você nos recomendar a um amigo?",
        answer: 8,
        questions: [
            {
                id: 1,
                question: "Você encontrou facilidade ao usar nosso produto?",
                answer: true
            },
            {
                id: 2,
                question: "Você teve algum problema durante sua experiência conosco?",
                answer: false
            }
        ],
        feedback: "Gostei muito da rapidez no atendimento ao cliente."
    },
    {
        id: 2,
        customer_response_id: 2,
        message: "Sua opinião é importante para nós!",
        main_question: "Em uma escala de 0 a 10, quanto você está satisfeito com nossa plataforma?",
        answer: 6,
        questions: [
            {
                id: 1,
                question: "Você acha que nossos preços são justos?",
                answer: false
            },
            {
                id: 2,
                question: "Você acredita que nossa plataforma atendeu às suas expectativas?",
                answer: true
            }
        ],
        feedback: "Acho que há espaço para melhorias na usabilidade."
    },
    {
        id: 3,
        customer_response_id: 3,
        message: "Nosso objetivo é proporcionar a melhor experiência.",
        main_question: "De 0 a 10, qual é a probabilidade de você renovar sua assinatura?",
        answer: 9,
        questions: [
            {
                id: 1,
                question: "Você recebeu suporte adequado quando precisou?",
                answer: true
            },
            {
                id: 2,
                question: "Você considera nossa plataforma intuitiva para uso?",
                answer: true
            }
        ],
        feedback: "Estou muito satisfeito com os recursos oferecidos."
    },
    {
        id: 4,
        customer_response_id: 4,
        message: "Ajude-nos a melhorar nossos serviços!",
        main_question: "De 0 a 10, quanto nossa empresa atendeu às suas necessidades?",
        answer: 3,
        questions: [
            {
                id: 1,
                question: "Você acha que nossos produtos são diversificados?",
                answer: true
            },
            {
                id: 2,
                question: "Você teve problemas de desempenho ao usar nosso software?",
                answer: true
            }
        ],
        feedback: "Alguns recursos podem ser mais estáveis, mas no geral estou satisfeito."
    },
    {
        id: 5,
        customer_response_id: 5,
        message: "Compartilhe sua opinião conosco!",
        main_question: "Em uma escala de 0 a 10, qual é o nível de confiança que você tem em nossa marca?",
        answer: 7,
        questions: [
            {
                id: 1,
                question: "Você acredita que nossa empresa valoriza suas necessidades?",
                answer: true
            },
            {
                id: 2,
                question: "Você acha que nossos produtos são inovadores?",
                answer: true
            }
        ],
        feedback: "Acho que nossa relação pode melhorar ainda mais, mas estou satisfeito."
    },
    {
        id: 6,
        customer_response_id: 6,
        message: "Queremos ouvir você!",
        main_question: "Em uma escala de 0 a 10, qual é a probabilidade de você utilizar nossos serviços novamente?",
        answer: 5,
        questions: [
            {
                id: 1,
                question: "Você teve dificuldades ao encontrar informações em nosso site?",
                answer: true
            },
            {
                id: 2,
                question: "Você considera nosso atendimento ao cliente eficiente?",
                answer: false
            }
        ],
        feedback: "Acho que existem problemas sérios que precisam ser abordados."
    },
    {
        id: 7,
        customer_response_id: 7,
        message: "Sua opinião é valiosa!",
        main_question: "De 0 a 10, qual é o nível de satisfação com nossos produtos?",
        answer: 9,
        questions: [
            {
                id: 1,
                question: "Você acha que nossos produtos são de alta qualidade?",
                answer: true
            },
            {
                id: 2,
                question: "Você teve problemas de compatibilidade com nossos serviços?",
                answer: false
            }
        ],
        feedback: "Excelentes produtos, continuem o bom trabalho."
    },
    {
        id: 8,
        customer_response_id: 8,
        message: "Avalie sua experiência conosco!",
        main_question: "De 0 a 10, qual é o nível de facilidade de uso de nossa plataforma?",
        answer: 2,
        questions: [
            {
                id: 1,
                question: "Você recebeu respostas rápidas ao entrar em contato conosco?",
                answer: false
            },
            {
                id: 2,
                question: "Você acha que nossa plataforma oferece recursos úteis?",
                answer: true
            }
        ],
        feedback: "Acho que a interface precisa de melhorias significativas."
    },
    {
        id: 9,
        customer_response_id: 9,
        message: "Compartilhe sua opinião!",
        main_question: "De 0 a 10, quanto você está satisfeito com nossa equipe de suporte?",
        answer: 8,
        questions: [
            {
                id: 1,
                question: "Você acredita que nossa equipe resolveu seus problemas de maneira eficaz?",
                answer: true
            },
            {
                id: 2,
                question: "Você teve dificuldades ao encontrar informações em nosso site?",
                answer: false
            }
        ],
        feedback: "A equipe de suporte foi prestativa, mas pode melhorar em alguns aspectos."
    },
    {
        id: 10,
        customer_response_id: 10,
        message: "Compartilhe sua opinião!",
        main_question: "De 0 a 10, quanto você está satisfeito com nossa equipe de suporte?",
        answer: 4,
        questions: [
            {
                id: 1,
                question: "Você acredita que nossa equipe resolveu seus problemas de maneira eficaz?",
                answer: true
            },
            {
                id: 2,
                question: "Você teve dificuldades ao encontrar informações em nosso site?",
                answer: false
            }
        ],
        feedback: "A equipe de suporte foi prestativa, mas pode melhorar em alguns aspectos."
    },
];

export { basicsTableData, EnhancedTableData, clientTableData, customerResponseData, npsData };
