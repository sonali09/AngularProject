import { Injectable, ComponentFactoryResolver, ViewContainerRef, ComponentFactory } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompAdderService {
  viewRef: ViewContainerRef;
  factory: ComponentFactory<{}>;

  constructor(private resolver:ComponentFactoryResolver) { }

  setViewContainerRef(viewref:ViewContainerRef){
    this.viewRef = viewref;
  }
  addComponent(compToAdd: any){
    this.factory = this.resolver.resolveComponentFactory(compToAdd);
    const comp = this.factory.create(this.viewRef.parentInjector);
    this.viewRef.insert(comp.hostView);
  }
}