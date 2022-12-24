import { getStoredJSON, setJSON } from "./StorageServer";

const EVENTS_KEY = "events";

const defaultEvents = [
  {
    id: "123",
    category: "animal welfare",
    title: "Cat Adoption Day",
    description: "Find your new feline friend at this event.",
    location: "Meow Town",
    date: "January 28, 2022",
    time: "12:00",
    organizer: "Kat Laydee",
  },
  {
    id: "456",
    category: "food",
    title: "Community Gardening",
    description: "Join us as we tend to the community edible plants.",
    location: "Flora City",
    date: "March 14, 2022",
    time: "10:00",
    organizer: "Fern Pollin",
  },
  {
    id: "789",
    category: "sustainability",
    title: "Beach Cleanup",
    description: "Help pick up trash along the shore.",
    location: "Playa Del Carmen",
    date: "July 22, 2022",
    time: "11:00",
    organizer: "Carey Wales",
  },
];

export const setDefaultEvents = () => setJSON(EVENTS_KEY, defaultEvents);

export const getEvents = () => getStoredJSON(EVENTS_KEY);

export const getEvent = (id) => getEvents()?.find((event) => event.id === String(id)) ?? null;

export const postEvent = (event) => {
  const prevEvents = getEvents();
  let events = [event];

  if (prevEvents) events = [...prevEvents, event];
  setJSON(EVENTS_KEY, events);
};
