import { Component, inject, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{

  http: HttpClient = inject(HttpClient);
  ngOnInit(): void {
    //let obs = new Observable((observer)=>{observer.next(Math.random())});
    //Subscriber 1
    // obs.subscribe((data)=>{
    //   console.log(data)
    // })
    //Subscriber 2
    // obs.subscribe((data)=>{
    //   console.log(data)
    // })

    
    //Subject Example
    // const subject = new Subject();
    //Subscriber 1
    
    // subject.subscribe((data)=>{
    //   console.log(data)
    // })
    //Subscriber 2
    // subject.subscribe((data)=>{
    //   console.log(data)
    // })

    // subject.next(Math.random())


    // const subject = new Subject()
    // const data = this.http.get('https://randomuser.me/api/')

    // subject.subscribe((res)=>{
    //   console.log(res)
    // })
    // subject.subscribe((res)=>{
    //   console.log(res)
    // })
    // subject.subscribe((res)=>{
    //   console.log(res)
    // })

    // data.subscribe(subject)


    //Behaviour Subject
    // const behaviourSubject = new BehaviorSubject<number>(100)
    // behaviourSubject.subscribe((res)=>{
    //   console.log(res)
    // })
    // behaviourSubject.subscribe((res)=>{
    //   console.log(res)
    // })
    // behaviourSubject.next(200)


    //Replay Subject
    // const replaySubject = new ReplaySubject<number>(2);
    // replaySubject.next(100);
    // replaySubject.next(200);
    // replaySubject.next(300);
    // replaySubject.next(400);
    // replaySubject.subscribe((res)=>{
    //   console.log(res)
    // })
    // replaySubject.subscribe((res)=>{
    //   console.log(res)
    // })
    // replaySubject.subscribe((res)=>{
    //   console.log(res)
    // })
    // replaySubject.next(500)



    //Async Subject
    // const asyncSubject = new AsyncSubject();

    // asyncSubject.next(100);
    // asyncSubject.next(200);
    // asyncSubject.next(300);
    // asyncSubject.next(400);
    // asyncSubject.complete()

    // asyncSubject.subscribe((res)=>{
    //   console.log(res)
    // })

    // asyncSubject.subscribe((res)=>{
    //   console.log(res)
    // })

    // asyncSubject.subscribe((res)=>{
    //   console.log(res)
    // })
    // asyncSubject.complete()

    // Difference between promise and observable
    const promise = new Promise((resolve,reject)=>{
      console.log('promise is called');
      resolve(100)
      resolve(200)
      resolve(300)
      resolve(400)
    })

    promise.then((data)=>{
      console.log(data)
    })

    const obs = new Observable((res)=>{
      console.log('observer called');
      res.next(100)
      res.next(200)
      res.next(300)
      res.next(400)
    })

    obs.subscribe(data => console.log(data))



  }

}


