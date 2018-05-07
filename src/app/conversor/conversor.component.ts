import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  constructor() { }

  @Input()
  entrada = null;

  saida = null;

  ngOnInit() {
    this.saida = this.entrada.toString(2);
  }

}
