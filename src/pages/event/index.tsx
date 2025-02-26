import { useParams } from 'react-router';

export default function EventPage() {
  const { id } = useParams();
  return <div>EventPage {id}</div>;
}
