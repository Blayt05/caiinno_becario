export interface Event {
    id: string;
    title: string;
    date: string;
    images: {
      url: string;
      alt?: string;
    }[];
  }
  