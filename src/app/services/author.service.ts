import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  authors!: Author[]
  key:string='author'
  pushkinBooks:Book[]=[
    new Book(1,"Дубровский",200,"роман"),
    new Book(2,"Пиковая дама",20,"рассказ"),
    new Book(3,"Кирджали",10,"повесть"),
    new Book(4,"Египетские ночи",20,"повесть"),
    new Book(5,"Капитанская дочь",150,"роман"),
  ]
  turgenyevBooks:Book[]=[
    new Book(1,"Муму", 220,"рассказ"),
  ]
  shevchenkoBooks:Book[]=[
    new Book(1,"Кобзарь", 220,"лирическое стихотворение"),
    new Book(2,"Художник", 20,"повесть"),
  ]
  constructor() { 
    //наполняем массив Авторы
    this.authors=[
      new Author(1,"Александр","Пушкин",new Date(6,6,1799),this.pushkinBooks,"Сергеевич"),
      new Author(2,"Иван","Тургеньев",new Date(9,11,1818),this.turgenyevBooks,"Сергеевич"),
      new Author(3,"Тарас","Шевченко",new Date(9,3,1814),this.shevchenkoBooks,"Григорьевич"),
    ]
  }
  //возвращаем тестовый массив по запросу
  getAuthorFrom(){    
    return this.authors       
  }

  //возвращаем сохраненный массив по запросу
  getAllFromStorage(): Author[]{
    //получаем массив с локального хранилища
    let testAuth=localStorage.getItem(this.key)
    //если там ничего нет    
    if(testAuth==null){
      //возвращаем заготовку(возможны другие варианты в будущем)
      this.setAllToStorage(this.getAuthorFrom())
      return this.getAuthorFrom()
    }else{
      //возвращаем отпарсенные данные из хранилища
      return JSON.parse(testAuth)
    }
  }

  //сохранение данных в локальное хранилище
  setAllToStorage(auth: Author[]){
    //добавляем полученые данные
    localStorage.setItem(this.key,JSON.stringify(auth))
  }

  //добавление одного айтема
  setOneItem(a: Author){
    //получаем массив данных которые есть
    let authors=this.getAllFromStorage()
    
    if(a.id===undefined){
      a.id=this.creatorId()
      
      //добавляем в массив новый айтем
      authors.push(a)
      //отправляем массив в локальное хранилище
      this.setAllToStorage(authors)
    }else{
      console.log("такой автор уже есть")
    }
    
    
    
    
  }
  
  //получение одного айтема
  getAuthByID(id:number):Author| string{

    //получаем данные
    let auth = this.getAllFromStorage()

    //ищем нужный айтем     
    for(let a of auth){

      //если существует возвращаем
      if(a.id==id){
        return a
      }
    }
    return "нет таких"
  }

  //изменение данных
  upadateAuthor(auth: Author){
    let authors=this.getAllFromStorage()
    for(let a of authors){
      if(a.id==auth.id){
        a.firstName =auth.firstName
        a.patronymic=auth.patronymic
        a.surname=auth.surname
        a.bithDate=auth.bithDate
        a.books=auth.books
      }
    }
    this.setAllToStorage(authors)
  }

  //удаление айтема
  deleteAuthor(id:number){
    let authors=this.getAllFromStorage()
    
    authors=authors.filter(a=>{
      if(a.id!=id){
        return a
      }
      return null
    })
    
    this.setAllToStorage(authors)
  }

  creatorId(){
    let auth= this.getAllFromStorage()
    let len =auth.length
    let count
    for(let i=1;;i++){
      count=0
      for(let a of auth){
        
        if(a.id==i){
          
          count++
        }
      }
      if(count==0){
        return i
      }

    }    
    
    
  }
    
  
}
