import { Injectable } from '@angular/core';
import { Genre } from '../models/genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {
  key="genre"
  genreList: Genre[]
  constructor() { 
    this.genreList=[
      new Genre(1,"Лирическое стихотворение","Небольшое по объему, часто написанное от первого лица, стихотворение передает чувства, настроения, переживания лирического героя, или непосредственно автора стиха."),
      new Genre(2,"Повесть","средний (между рассказом и романом) эпический жанр, в котором представлен ряд эпизодов из жизни героя (героев). По объёму П. больше рассказа и шире изображает действительность, рисуя цепь эпизодов, составляющих определенный период жизни главного персонажа, в ней больше событий и действующих лиц, однако, в отличие от романа, как правило, одна сюжетная линия."),
      new Genre(3,"Рассказ","малый эпический жанр: прозаическое произведение небольшого объема, в котором, как правило, изображаются одно или несколько событий жизни героя."),
      new Genre(4,"Роман","жанр эпоса: большое эпическое произведение, в котором всесторонне изображается жизнь людей в определенный период времени или в течение целой человеческой жизни."),
    ]
  }
  getGenres(){
    return this.genreList
  }

  //возвращаем сохраненный массив по запросу
  getAllFromStorage(): Genre[]{
    //получаем массив с локального хранилища
    let testGenre=localStorage.getItem(this.key)
    //если там ничего нет    
    if(testGenre==null){
      //возвращаем заготовку(возможны другие варианты в будущем)
      this.setAllToStorage(this.getGenres())
      return this.getGenres()
    }else{
      //возвращаем отпарсенные данные из хранилища
      return JSON.parse(testGenre)
    }
  }

  //сохранение данных в локальное хранилище
  setAllToStorage(g: Genre[]){
    //добавляем полученые данные
    localStorage.setItem(this.key,JSON.stringify(g))
  }

  //добавление одного айтема
  setOneItem(g: Genre){
    //получаем массив данных которые есть
    let genres=this.getAllFromStorage()
    
    if(g.id===undefined){
      g.id=this.creatorId()
      
      //добавляем в массив новый айтем
      genres.push(g)
      //отправляем массив в локальное хранилище
      this.setAllToStorage(genres)
    }else{
      console.log("такой автор уже есть")
    }
    
    
    
    
  }
  
  //получение одного айтема
  getGenreByID(id:number):Genre| string{

    //получаем данные
    let genre = this.getAllFromStorage()

    //ищем нужный айтем     
    for(let g of genre){

      //если существует возвращаем
      if(g.id==id){
        return g
      }
    }
    return "нет таких"
  }

  //изменение данных
  upadateGenre(genre: Genre){
    let genres=this.getAllFromStorage()
    for(let g of genres){
      if(g.id==genre.id){
        g.name=genre.name
        g.description=genre.description
      }
    }
    this.setAllToStorage(genres)
  }

  //удаление айтема
  deleteGenre(id:number){
    let genres=this.getAllFromStorage()
    genres=genres.filter(g=>{
      if(g.id!=id){
        return g
      }
      return null
    })
    this.setAllToStorage(genres)
  }

  creatorId(){
    let genre= this.getAllFromStorage()
  
    let count
    for(let i=1;;i++){
      count=0
      for(let g of genre){
        
        if(g.id==i){
          
          count++
        }
      }
      if(count==0){
        return i
      }

    }    
    
    
  }
}
