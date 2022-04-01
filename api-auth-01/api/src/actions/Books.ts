import {NextFunction, Request, RequestHandler, Response} from "express";
import IAction from "./IAction";
import Book from "../models/Book";

export default class BooksAction implements IAction {
  private static readonly BOOKS: Book[] = [
    {
      id: "e50f8564-6298-4cda-aa34-c62b6920cf60",
      title: "‘The Baby on the Fire Escape: Creativity, Motherhood, and the Mind-Baby Problem,’ by Julie Phillips (Norton, April 26)",
      caption: "Drawing on the lives and struggles of many pioneering artists — Alice Neel, Jenny Offill, Audre Lorde, Doris Lessing and others — Phillips offers a rich inquiry into the space where inspiration, creative work and motherhood converge. “What does it mean to create, not alone in ‘a room of one’s own,’ but in a shared space?,” she asks. “What is the shape of a creative mother’s life?”",
      coverUrl: "https://static01.nyt.com/images/2022/03/30/books/review/APRIL-BOOKS-02/APRIL-BOOKS-02-superJumbo.jpg?quality=75&auto=webp"
    },
    {
      id: "3d598a28-229b-4eae-b9eb-3426986d4b46",
      title: "‘The Candy House,’ by Jennifer Egan (Scribner, April 5)",
      caption: "Egan returns to the world of her Pulitzer Prize-winning 2010 novel, “A Visit From the Goon Squad,” in this long-awaited follow-up. Some characters and themes recur — the music executive Bennie Salazar; his mentor, Lou; and his protégé, Sasha; among others — though Egan jumps between the perspectives of their families and loved ones in a complex story about memory, storytelling and how technology encroaches on our lives.",
      coverUrl: "https://static01.nyt.com/images/2022/03/30/books/review/APRIL-BOOKS-12/APRIL-BOOKS-12-superJumbo.jpg?quality=75&auto=webp"
    },
    {
      id: "bbb6bdb4-c7aa-48fc-b973-99289c7882cf",
      title: "‘Constructing a Nervous System: A Memoir,’ by Margo Jefferson (Pantheon, April 12)",
      caption: "In her earlier autobiography, “Negroland,” Jefferson reflected on her upbringing in an upper middle-class Black family. Now, the Pulitzer Prize-winning critic and essayist widens her scope, surveying the artists who shaped her.",
      coverUrl: "https://static01.nyt.com/images/2022/03/30/books/review/APRIL-BOOKS-05/APRIL-BOOKS-05-superJumbo.jpg?quality=75&auto=webp"
    },
    {
      id: "bbb1f78c-310c-4072-8a41-f5c6fa7ab014",
      title: "‘Different: Gender Through the Eyes of a Primatologist,’ by Frans de Waal (Norton, April 5)",
      caption: "De Waal, whose previous books have taken on the emotional life of bonobos and chimpanzees, sets out to discern what humans can learn about gender and sex from other apes. “Whereas it is true that gender goes beyond biology, it’s not created out of thin air,” he writes. “There is every reason, therefore, to see what we can learn about ourselves from comparisons with other primates.”",
      coverUrl: "https://static01.nyt.com/images/2022/03/30/books/review/APRIL-BOOKS-06/APRIL-BOOKS-06-superJumbo.jpg?quality=75&auto=webp"
    },
    {
      id: "49aa902b-cf95-40e1-801a-75e14f0dbcf4",
      title: "‘The Man Who Invented Motion Pictures: A True Tale of Obsession, Murder, and the Movies,’ by Paul Fischer (Simon & Schuster, April 19)",
      caption: "In the 1880s, Louis Le Prince began testing a device that recorded animated photographs, closing in on an invention that others had chased for years. The stakes were impossibly high, Fischer writes: “No human experience, from the most benign to the most momentous, would again need to be lost to history.” But soon after, Le Prince vanished — and later, Thomas Edison would claim the credit for inventing the motion picture. Though the disappearance went unsolved, Fischer brings new life to the case.",
      coverUrl: "https://static01.nyt.com/images/2022/03/30/books/review/APRIL-BOOKS-03/APRIL-BOOKS-03-jumbo.jpg?quality=75&auto=webp"
    }
  ];

  readonly method = 'get';
  readonly path = '/books';

  apply(req: Request, res: Response, next: NextFunction) {
    res.status(200).send(JSON.stringify(BooksAction.BOOKS));
  }
}