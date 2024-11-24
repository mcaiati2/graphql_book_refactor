export default interface IBookInput {
  authors?: string[] | null;
  description: string | null;
  bookId: string | null;
  image?: string | null;
  link?: string | null;
  title: string | null;
}
