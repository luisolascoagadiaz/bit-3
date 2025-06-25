import { Component, inject, OnInit } from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import{Api} from '../../../services/api';

@Component({
  selector: 'app-menu',
  imports: [Navigation],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  private api = inject(Api);
  frases!: any[];

  ngOnInit(): void {
      this.api.getApiList().subscribe((res:any)=>{
        this.frases = res.value;
      })
  }

    myClickHandler() {
        this.api.getApiList().subscribe((res:any)=>{
        this.frases = res.value;
      })
      }
}
