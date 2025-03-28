import { useQuery } from '@tanstack/react-query';

const data = [
  {
    id: 1,
    title: 'Программирование',
    content: 'Изучение языка программирования Pascal',
    teacher: 'Николай Петрович',
    image: 'card1.jpeg',
  },
  {
    id: 2,
    title: 'Французский язык',
    content: 'Изучение алфавита',
    teacher: 'Федор Бондарчук',
    image: 'card2.jpg',
  },
  {
    id: 3,
    title: 'Русский язык',
    content: 'Изучение латыни',
    teacher: 'Лиза Гузеева',
    image: 'card3.jpg',
  },
];

export const useGetSections = () => {
  return useQuery({
    queryKey: ['sections'],
    queryFn: async () => {
      // const response = await $api.get<Section[]>('/sections');
      // return response.data;

      return data; // only for test
    },
  });
};
