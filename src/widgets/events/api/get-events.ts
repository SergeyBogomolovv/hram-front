import { useQuery } from '@tanstack/react-query';
import { Event } from '../model/schema';
import { $api } from '@/shared/lib/api';

const events: Event[] = [
  {
    id: 1,
    nameImg: '/placeholder1.jpg',
    title: 'Название мероприятия',
    content:
      '“Путешествие в прошлое: Уникальный урок истории в Воскресной школе Евфросинии Московской”',
    author: 'Евфросиния Московская',
  },
  {
    id: 2,
    nameImg: '/placeholder2.jpg',
    title: 'Название мероприятия',
    content:
      '“Путешествие в прошлое: Уникальный урок истории в Воскресной школе Евфросинии Московской”',
    author: 'Евфросиния Московская',
  },
];

export const getEvents = async () => {
  const { data } = await $api.get('/');
  console.log(data);
  await new Promise((resolve) => setTimeout(resolve, 200));
  return events;
};

export const useGetEvents = () => {
  return useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
};
