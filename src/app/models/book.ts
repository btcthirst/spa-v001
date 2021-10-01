export class Book {
    
    constructor(
        private _title: string,
        private _pages: number,
        private _genre: string){}
      
    get title(){
      return this._title
    }
    set title(val: string){
      this._title=val
    }
      
    get pages(){
      return this._pages
    }
    set pages(val: number){
      this._pages=val
    }
      
    get genre(){
      return this._genre
    }
    set genre(val: string){
      this._genre=val
    }
      
}
