class Meetup {
  id: string | undefined;
  image: string;
  title: string;
  address: string;
  description: string;
  constructor(id: string | undefined, title: string, image: string, address: string, description: string) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.address = address;
    this.description = description
  }
}

export default Meetup;