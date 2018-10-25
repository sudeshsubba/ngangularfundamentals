import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from '../services/jquery.service';

@Directive({
    selector: '[appModalTrigger]'
})

export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input() appModalTrigger: string;

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        const id = '#' + this.appModalTrigger;
        this.el.addEventListener('click', e => {
             this.$(id).modal({});
            // this.$('#searchresults').modal({});
        });
    }
}
