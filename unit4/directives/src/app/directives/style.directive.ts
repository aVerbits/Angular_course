import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";


@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
constructor(private el: ElementRef, private r: Renderer2) {
    this.r.setStyle(this.el.nativeElement, 'color', 'blue')
// el.nativeElement.style.color = 'red'
}

    @HostListener('click', ['$event.target']) onClick(event: Event){
        console.log(event)
    }

    @HostListener('mouseenter') onEnter() {
        this.r.setStyle(this.el.nativeElement, 'color', 'green')

    }

    @HostListener('mouseleave') onLeave() {
        this.r.setStyle(this.el.nativeElement, 'color', null)

    }
}