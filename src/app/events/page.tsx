import { events } from "@/data/events";
import EventsGrid from "@/components/EventsGrid";

export default function EventPage() {
  const sortedEvents = [...events].sort((a, b) => Number(b.date) - Number(a.date));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-12">
      <h1 className="mb-10 text-center text-3xl md:text-4xl font-bold">Eventos</h1>
      <EventsGrid events={sortedEvents} />
    </div>
  );
}
