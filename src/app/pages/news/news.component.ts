import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewserviceService } from 'src/app/services/newservice.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styles: [
  ]
})
export class NewsComponent implements OnInit {

  news: any [] = [];

  constructor(public newsservice: NewserviceService, private router: Router) {



  }

  ngOnInit(): void {
    this.newsservice.listnews().subscribe(resultado => {
      console.log(resultado);
      this.news=resultado.articles;
      console.log(this.news);
    }, error => { console.log(error) })

  }

  LogOut(){
    sessionStorage.removeItem("token");
    this.router.navigateByUrl("/login");

  }

}
