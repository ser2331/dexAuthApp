import avatar from './components/assets/images/avatarRick.jpg';
import dex from './components/assets/images/download.png';

export default class FakeData {
  static reports = [
    {
      description: 'Перелет',
      category: 'Транспорт',
      amount: 23,
      expectedPrice: 367,
      price: 234,
      key: 0,
    },
    {
      description: 'Такси и Автобус',
      category: 'Транспорт',
      amount: 324,
      expectedPrice: 346,
      price: 321,
      key: 1,
    },
    {
      description: 'Вождение',
      category: 'Транспорт',
      amount: 23,
      expectedPrice: 364,
      price: 473,
      key: 2,
    },
    {
      description: 'Парковка',
      category: 'Транспорт',
      amount: 22,
      expectedPrice: 457,
      price: 276,
      key: 4,
    },
    {
      description: 'Отель',
      category: 'Жилье',
      amount: 11,
      expectedPrice: 345,
      price: 523,
      key: 5,
    },
    {
      description: 'Завтрак и обед',
      category: 'Еда',
      amount: 22,
      expectedPrice: 253,
      price: 542,
      key: 6,
    },
    {
      description: 'Ужины',
      category: 'Еда',
      amount: 3,
      expectedPrice: 345,
      price: 345,
      key: 21,
    },
    {
      description: 'Закуски и напитки',
      category: 'Еда',
      amount: 9,
      expectedPrice: 356,
      price: 324,
      key: 2334,
    },
    {
      description: 'Билеты в музей',
      category: 'Развлечения',
      amount: 2,
      expectedPrice: 534,
      price: 654,
      key: 2324,
    },
    {
      description: 'Билеты в театр',
      category: 'Развлечения',
      amount: 43,
      expectedPrice: 768,
      price: 567,
      key: 1455,
    },
    {
      description: 'Карты м путеводитель',
      category: 'Другое',
      amount: 32,
      expectedPrice: 315,
      price: 315,
      key: 145345,
    },
    {
      description: 'Севениры и подарки',
      category: 'Другое',
      amount: 32,
      expectedPrice: 512,
      price: 389,
      key: 13616,
    },
  ];

  static users = [
    {
      login: 'admin@mail.ru',
      password: 'admin',
      isAdmin: true,
      sureName: 'Дуков',
      name: 'Сергей',
      lastName: 'Сергеевич',
      confirmPassword: 'admin',
      day: '19',
      month: '3',
      year: '1995',
      phone: '77589599',
      gender: 'Male',
      readOut: false,
      avatar: avatar,
    },
    {
      login: 'test@mail.ru',
      password: 'test',
      isAdmin: false,
      sureName: 'Дуков',
      name: 'Алексей',
      lastName: 'Алексеевич',
      confirmPassword: 'test',
      day: '28',
      month: '9',
      year: '1991',
      phone: '77589599',
      gender: 'Male',
      readOut: false,
    },
  ];

  static customers = [
    {
      key: 'Customer1',
      password: 'admin',
      login: 'qwerty@mail.ru',
      isAdmin: true,
      sureName: 'Дуков',
      name: 'Сергей',
      lastName: 'Сергеевич',
      day: '19',
      month: '3',
      year: '1995',
      phone: '77589599',
      gender: 'Male',
      readOut: false,
    },
    {
      key: 'Customer2',
      password: 'test',
      login: '123456@mail.ru',
      isAdmin: false,
      sureName: 'Афанасьев',
      name: 'Алексей',
      lastName: 'Алексеевич',
      day: '28',
      month: '9',
      year: '1991',
      phone: '77589599',
      gender: 'Male',
      readOut: false,
    },
    {
      key: 'Customer3',
      password: 'test',
      login: '9999@mail.ru',
      isAdmin: false,
      sureName: 'Петров',
      name: 'Михаил',
      lastName: 'Михайлович',
      day: '16',
      month: '2',
      year: '1999',
      phone: '77589599',
      gender: 'Male',
      readOut: false,
    },
  ];

  static bankAccountsData = [
    {
      key: '1',
      name: 'Тинькофф Банк',
      accountNumber: 3223213312331233,
      address: 'Одесская 76',
      amountFunds: '1200',
    },
    {
      key: '2',
      name: 'Агропром Банк',
      accountNumber: 3223213312331233,
      address: 'Камарово 81',
      amountFunds: '1500',
    },
    {
      key: '3',
      name: 'Сбер Банк',
      accountNumber: 3223219999999233,
      address: 'Партизанская 5',
      amountFunds: '2500',
    },
    {
      key: '4',
      name: 'Эксим Банк',
      accountNumber: 1234567891123412,
      address: 'Пушкина 9',
      amountFunds: '500',
    },
  ];

  static internetAccountsData = [
    {
      key: '1',
      name: 'Банк Левобережный',
      accountNumber: 9999999999999990,
      address: 'Набережная 90',
      amountFunds: '8000',
    },
    {
      key: '2',
      name: 'Райффайзенбанк',
      accountNumber: 1111213312331233,
      address: 'Лермонтова 81',
      amountFunds: '5000',
    },
    {
      key: '3',
      name: 'Промсвязьбанк ',
      accountNumber: 3223219999991111,
      address: 'Мира 5',
      amountFunds: '5500',
    },
    {
      key: '4',
      name: 'Банк Открытие',
      accountNumber: 1234111191123412,
      address: 'Суворова 9',
      amountFunds: '800',
    },
  ];

  static planning = [
    {
      key: '0',
      title: 'Полетать на самолете',
      description: 'Сесть за штурвал самолета',
      chosen: Math.random() * 2 > 1,
      important: 'important',
    },
    {
      key: '1',
      title: 'Взобраться на Эверест',
      description: 'Альпинизм',
      chosen: Math.random() * 2 > 1,
      important: 'unimportant',
    },
    {
      key: '2',
      title: 'Купить яхту',
      description: 'Купить яхту',
      chosen: Math.random() * 2 > 1,
      important: 'unimportant',
    },
    {
      key: '3',
      title: 'Совершить кругосветное путешевствие',
      description: 'Путешевствие',
      chosen: Math.random() * 2 > 1,
      important: 'important',
    },
    {
      key: '4',
      title: 'Ужин на вершине Египетской пирамиды',
      description: 'Ужин',
      chosen: Math.random() * 2 > 1,
      important: 'unimportant',
    },
    {
      key: '5',
      title: 'Полетать на самолете',
      description: 'Сесть за штурвал самолета',
      chosen: Math.random() * 2 > 1,
      important: 'important',
    },
  ];

  static schedule = {
    allTime: 720,
    relaxation: {
      all: 320,
      salons: 100,
      sea: 170,
      shops: 50,
    },
    entertainment: {
      all: 200,
      carousels: 50,
      race: 100,
      horseRacing: 50,
    },
    road: 100,
    timeForLiving: 100,
  };

  static helpData = [
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 0,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 2,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 3,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 4,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 234,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 2345,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 5354,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 426,
    },
    {
      label: 'DEX',
      image: dex,
      description:
        'We design, ' +
        'develop and support innovative Mobile, ' +
        'Web and Cross-platform IT solutions',
      id: 2624,
    },
  ];
}
