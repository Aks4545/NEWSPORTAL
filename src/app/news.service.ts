import { Injectable } from '@angular/core';
import { carouseldata, database,malayalam,hindi,tamil,telungu,sports,tech, international, entertainment, business,homeCard, singleho ,singlehome,singlepage,singleh,h1} from 'src/assets/data/data';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private router : Router) { }


  getData(){
    return database
  }

  getDatas(){
    return malayalam
  }
  getDatass(){
    return hindi
  }
  getData1(){
    return tamil
  }
  getData2(){
    return telungu
  }
  getData3(){
    return sports
  }
  getData4(){
    return tech
  }
  getData5(){
    return international
  }
  getData6(){
    return entertainment
  }
  getData7(){
    return business
  }

getHomeCard(){
return homeCard
}
getData8(){
  return carouseldata
}
getData9(){
  return singleho
}
getsingleHome(){
  return singlehome
}
getsinglePage(){
  return singlepage
}

getsingleh(){
  return singleh
}
geth1(){
return h1
}
}
