import { Book } from "./book";

export class Author {
   constructor(
        public id: number,
        public firstName: string,
        public surname:string,
        public bithDate:Date,
        public books: Book[],
        public patronymic?: string){}
}

