import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'angular-observables';

  data: any[] = [];

  array1 = [1,2,3,4];
  array2 = ['hello',5,7,6];

  @ViewChild('createDataBtn')
  createDataBtn: ElementRef;

  createBtnObs;

  //1 creating Observable

  // myObservable = new Observable((observer)=>{
  //   setTimeout(() => {observer.next(1)}, 1000);
  //   setTimeout(() => {observer.next(2)}, 2000);
  //   setTimeout(() => {observer.next(3)}, 3000);
  //   //setTimeout(() => {observer.error(new Error('SomeThing went wrong.Please try again later'))}, 3000);
  //   setTimeout(() => {observer.next(4)}, 4000);
  //   setTimeout(() => {observer.next(5)}, 5000);
  //   setTimeout(() => {observer.complete()}, 6000);
  // })

  // Creating observable using of operator
  // myObservable = of(this.array1,this.array2)

  
  //Creating observable using from operator
  // promiseData = new Promise((resolve,reject)=>{
  //   resolve([1,2,3,4,5,6]);
  // })

  myObservable = from([1,2,3,4,5,6]).pipe(map((val)=>{
    return val * 2
  }),filter((val)=>{
    return val % 4 === 0
  }))

  mergeMapping = this.myObservable.pipe(mergeMap((val:any)=>{
    return of (val + 100);
  }))
  // map in observable

  // transformMyobservable = this.myObservable.pipe(map((val)=>{
  //   return val * 2;
  // }), filter((val)=>{
  //   return val % 4  === 0
  // }))

  // filterdData = this.transformMyobservable.pipe(filter((val)=>{
  //   return val % 4 === 0
  // }))

  // myObservable = from(this.promiseData)


  GetAsynData(){
    // this.myObservable.subscribe((val:any)=>{
    //   this.data.push(val);
    // },
    // (err)=>{
    //   alert(err.message);
    // },
    // ()=>{
    //   alert('All the data is streamed')
    // }
  
    // )
    this.mergeMapping.subscribe({
      next:(val:any)=>{
        this.data.push(val)
      },
      error(err){
        alert(err.message)
      },
      complete() {
        alert('All data is streamed');
      },
    })
    
  }

  // buttonClicked(){
  //   let count = 0;
  //   this.createBtnObs = fromEvent(this.createDataBtn.nativeElement,'click')
  //                       .subscribe((data)=>{
  //                         console.log(data)
  //                         this.showItem(++count)
  //                       })
  // }

  ngAfterViewInit(): void {
    //this.buttonClicked()
  }

  // showItem(val){
  //   let div = document.createElement('div');
  //   div.innerText = 'Item' + val;
  //   div.className = 'data-list';
  //   document.getElementById('container').appendChild(div)
  // }

  

}
