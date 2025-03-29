export type Product = {
    id: string;
    name: string;
    category: string;
    image: string;
    description: string;
    origin: string;
    price?: string;
};

export type Category = {
    id: string;
    name: string;
    description: string;
    image: string;
};

export const headerLinks = [
    { title: "Главная", href: "#main" },
    { title: "О нас", href: "#about" },
    { title: "Ассортимент", href: "#assortment" },
    { title: "Контакты", href: "#contact" },
];

export const products: Product[] = [
    {
        id: "p1",
        name: "Красные яблоки",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "Сладкие и хрустящие красные яблоки, идеально подходящие для перекуса и выпечки.",
        origin: "Локальные фермы",
    },
    {
        id: "p2",
        name: "Апельсины",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
        description: "Сочные апельсины, богатые витамином C и ярким вкусом.",
        origin: "Средиземноморье",
    },
    {
        id: "p3",
        name: "Бананы",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
        description: "Сладкие и кремовые бананы, богатые калием и естественной энергией.",
        origin: "Центральная Америка",
    },
    {
        id: "p4",
        name: "Клубника",
        category: "berries",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "Сладкая и ароматная клубника, взрывающаяся вкусом.",
        origin: "Локальные фермы",
    },
    {
        id: "p5",
        name: "Голубика",
        category: "berries",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
        description: "Богатая антиоксидантами голубика со сладко-терпким вкусом.",
        origin: "Северная Америка",
    },
    {
        id: "p6",
        name: "Авокадо",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
        description: "Кремовые авокадо, идеально подходящие для тостов, салатов и гуакамоле.",
        origin: "Мексика",
    },
    {
        id: "p7",
        name: "Мандарины",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1611329695518-1865c5ea1fcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "Сладкие, легко очищаемые мандарины, идеально подходящие для перекуса на ходу.",
        origin: "Азия",
    },
    {
        id: "p8",
        name: "Виноград",
        category: "fruits",
        image: "https://images.unsplash.com/photo-1631310457984-c0a106bfba24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
        description: "Сладкий и сочный виноград разных сортов и цветов.",
        origin: "Средиземноморье",
    },
];

export const companyInfo = {
    name: "FoodsFruits",
    foundedYear: 2014,
    description: "Премиальный дистрибьютор фруктов с обязательством обеспечивать качество и устойчивое развитие.",
    mission: "Доставлять самые свежие, высококачественные фрукты нашим клиентам, поддерживая устойчивые методы фермерства.",
    values: [
        "Качество - мы отбираем только лучшие фрукты",
        "Устойчивое развитие - мы заботимся о природе",
        "Прозрачность - честные отношения с партнерами и клиентами",
        "Удовлетворенность клиентов - ваше довольство наш приоритет",
    ],
    contact: {
        address: "123 Фруктовая улица, Москва, Россия",
        phone: "+7 (123) 456-7890",
        email: "info@scarabey-fruits.ru",
    },
};
