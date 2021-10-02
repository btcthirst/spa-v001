import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors!: Author[]
  pushkinBooks:Book[]=[
    new Book("Дубровский",200,"роман"),
    new Book("Пиковая дама",20,"рассказ"),
    new Book("Кирджали",10,"повесть"),
    new Book("Египетские ночи",20,"повесть"),
    new Book("Капитанская дочь",150,"роман"),
  ]
  turgenyevBooks:Book[]=[
    new Book("Муму", 220,"рассказ"),
  ]
  shevchenkoBooks:Book[]=[
    new Book("Кобзарь", 220,"лирическое стихотворение"),
    new Book("Художник", 20,"повесть"),
  ]
  constructor() { 
    //наполняем массив Авторы
    this.authors=[
      new Author("Александр","Пушкин",new Date(6,6,1799),this.pushkinBooks,"Сергеевич"),
      new Author("Иван","Тургеньев",new Date(9,11,1818),this.turgenyevBooks,"Сергеевич"),
      new Author("Тарас","Шевченко",new Date(9,3,1814),this.shevchenkoBooks,"Григорьевич"),
    ]
  }
  //возвращаем массив по запросу
  getAuthorFrom(){
    return this.authors
  }

  //записываем массив в локальное хранилище
  setAuthorInStorage(){
    if(!localStorage.getItem('author')){
      localStorage.setItem("author", JSON.stringify(this.authors))
    }   
  }

  //берем массив с хранилища
  getAuthorFromStorage(){
    let test =localStorage.getItem("author")
    if(test==null){
      console.log("ничего не вернулось")
    } else{
      this.authors=JSON.parse(test) 
      
    }
    
    
  }
}
