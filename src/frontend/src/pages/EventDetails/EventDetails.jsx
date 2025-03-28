import MainLayout from "@/Layout/MainLayout";
import EventDetailsDescription from "./Components/EventDetailsDescription";
import EventsSlider from "./Components/Nandini";
export default function EventsDetail() {
  return (
    <MainLayout>
      <div className="space-y-0">
        <EventDetailsDescription />
        <EventsSlider />
      </div>
    </MainLayout>
  );
}
