import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  constructor(private routeId: ActivatedRoute, private api:ApiService){}
  data:any=[]

  ngOnInit(){

    this.api.getProducts().subscribe((res:any)=>{
      let id=this.routeId.snapshot.paramMap.get('id')
      let response=res
      let product =response.filter((e:any)=>e.id==id)
      this.data=product[0]
    })
  }
}
