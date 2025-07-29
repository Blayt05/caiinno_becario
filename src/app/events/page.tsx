import { events } from "@/data/events";
import EventCarousel from "@/components/Event";

export default function EventPage() {
  const sortedEvents = events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <div className="space-y-16">
      {sortedEvents.map((event) => (
        <div key={event.id}>
          <EventCarousel item={event} />
        </div>
      ))}
    </div>
  );
}