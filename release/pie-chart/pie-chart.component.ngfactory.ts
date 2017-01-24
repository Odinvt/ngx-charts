/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-chart.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/element_ref';
import * as import10 from '@angular/core/src/zone/ng_zone';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '../../../src/common/charts/chart.component';
import * as import14 from '../../../src/common/tooltip/tooltip.service';
import * as import15 from '../common/charts/chart.component.ngfactory';
import * as import16 from '../../../src/pie-chart/pie-series.component';
import * as import17 from './pie-series.component.ngfactory';
import * as import18 from '../../../src/services/injection.service';
export class Wrapper_PieChartComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PieChartComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  subscription0:any;
  subscription1:any;
  subscription2:any;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieChartComponent(p0,p1,p2,p3);
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    this.context.ngOnDestroy();
    (this.subscription0 && this.subscription0.unsubscribe());
    (this.subscription1 && this.subscription1.unsubscribe());
    (this.subscription2 && this.subscription2.unsubscribe());
  }
  check_results(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.results = currValue;
      this._changes['results'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_view(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.view = currValue;
      this._changes['view'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_scheme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.scheme = currValue;
      this._changes['scheme'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_schemeType(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.schemeType = currValue;
      this._changes['schemeType'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_customColors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.customColors = currValue;
      this._changes['customColors'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_labels(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.labels = currValue;
      this._changes['labels'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_legend(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.legend = currValue;
      this._changes['legend'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_explodeSlices(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.explodeSlices = currValue;
      this._changes['explodeSlices'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_doughnut(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.doughnut = currValue;
      this._changes['doughnut'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_activeEntries(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.activeEntries = currValue;
      this._changes['activeEntries'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean,emit1:boolean,emit2:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.select.subscribe(_eventHandler.bind(view,'select'))); }
    if (emit1) { (this.subscription1 = this.context.activate.subscribe(_eventHandler.bind(view,'activate'))); }
    if (emit2) { (this.subscription2 = this.context.deactivate.subscribe(_eventHandler.bind(view,'deactivate'))); }
  }
}
var renderType_PieChartComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieChartComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieChartComponent>;
  _PieChartComponent_0_3:Wrapper_PieChartComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieChartComponent_Host0,renderType_PieChartComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ngx-charts-pie-chart',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PieChartComponent0(this.viewUtils,this,0,this._el_0);
    this._PieChartComponent_0_3 = new Wrapper_PieChartComponent(new import9.ElementRef(this._el_0),this.injectorGet(import10.NgZone,this.parentIndex),this.compView_0.ref,this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._PieChartComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PieChartComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieChartComponent) && (0 === requestNodeIndex))) { return this._PieChartComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieChartComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._PieChartComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieChartComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieChartComponentNgFactory:import8.ComponentFactory<import0.PieChartComponent> = new import8.ComponentFactory<import0.PieChartComponent>('ngx-charts-pie-chart',View_PieChartComponent_Host0,import0.PieChartComponent);
const styles_PieChartComponent:any[] = ([] as any[]);
var renderType_PieChartComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieChartComponent,{});
export class View_PieChartComponent0 extends import2.AppView<import0.PieChartComponent> {
  _text_0:any;
  _el_1:any;
  /*private*/ _vc_1:import12.ViewContainer;
  compView_1:import2.AppView<import13.ChartComponent>;
  _TooltipService_1_5:import14.TooltipService;
  _ChartComponent_1_6:import15.Wrapper_ChartComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import2.AppView<import16.PieSeriesComponent>;
  _PieSeriesComponent_5_3:import17.Wrapper_PieSeriesComponent;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _arr_15:any;
  /*private*/ _expr_16:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieChartComponent0,renderType_PieChartComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
    this._arr_15 = import3.pureProxy2((p0:any,p1:any):any[] => {
      return [
        p0,
        p1
      ]
      ;
    });
    this._expr_16 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'ngx-charts-chart',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._vc_1 = new import12.ViewContainer(1,(null as any),this,this._el_1);
    this.compView_1 = new import15.View_ChartComponent0(this.viewUtils,this,1,this._el_1);
    this._TooltipService_1_5 = new import14.TooltipService(this.parentView.injectorGet(import18.InjectionService,this.parentIndex));
    this._ChartComponent_1_6 = new import15.Wrapper_ChartComponent(this._vc_1.vcRef,this._TooltipService_1_5);
    this._text_2 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','pie-chart chart'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,':svg:g',new import3.InlineArray2(2,'ngx-charts-pie-series',''),(null as any));
    this.compView_5 = new import17.View_PieSeriesComponent0(this.viewUtils,this,5,this._el_5);
    this._PieSeriesComponent_5_3 = new import17.Wrapper_PieSeriesComponent();
    this.compView_5.create(this._PieSeriesComponent_5_3.context);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this.compView_1.create(this._ChartComponent_1_6.context);
    this._text_8 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_1,new import3.InlineArray8(6,'legendLabelActivate',(null as any),'legendLabelDeactivate',(null as any),'legendLabelClick',(null as any)),this.eventHandler(this.handleEvent_1));
    this._ChartComponent_1_6.subscribe(this,this.eventHandler(this.handleEvent_1),true,true,true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray8(6,'select',(null as any),'activate',(null as any),'deactivate',(null as any)),this.eventHandler(this.handleEvent_5));
    this._PieSeriesComponent_5_3.subscribe(this,this.eventHandler(this.handleEvent_5),true,true,true);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.PieSeriesComponent) && (5 === requestNodeIndex))) { return this._PieSeriesComponent_5_3.context; }
    if (((token === import14.TooltipService) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._TooltipService_1_5; }
    if (((token === import13.ChartComponent) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ChartComponent_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this._arr_15(this.context.width,this.context.height);
    this._ChartComponent_1_6.check_view(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.legend;
    this._ChartComponent_1_6.check_showLegend(currVal_1_0_1,throwOnChange,false);
    const currVal_1_0_2:any = this.context.legendOptions;
    this._ChartComponent_1_6.check_legendOptions(currVal_1_0_2,throwOnChange,false);
    const currVal_1_0_3:any = this.context.activeEntries;
    this._ChartComponent_1_6.check_activeEntries(currVal_1_0_3,throwOnChange,false);
    if (this._ChartComponent_1_6.ngDoCheck(this,this._el_1,throwOnChange)) { this.compView_1.markAsCheckOnce(); }
    const currVal_5_0_0:any = this.context.colors;
    this._PieSeriesComponent_5_3.check_colors(currVal_5_0_0,throwOnChange,false);
    const currVal_5_0_1:any = this.context.data;
    this._PieSeriesComponent_5_3.check_series(currVal_5_0_1,throwOnChange,false);
    const currVal_5_0_2:any = this.context.innerRadius;
    this._PieSeriesComponent_5_3.check_innerRadius(currVal_5_0_2,throwOnChange,false);
    const currVal_5_0_3:any = this.context.outerRadius;
    this._PieSeriesComponent_5_3.check_outerRadius(currVal_5_0_3,throwOnChange,false);
    const currVal_5_0_4:any = this.context.explodeSlices;
    this._PieSeriesComponent_5_3.check_explodeSlices(currVal_5_0_4,throwOnChange,false);
    const currVal_5_0_5:any = this.context.labels;
    this._PieSeriesComponent_5_3.check_showLabels(currVal_5_0_5,throwOnChange,false);
    const currVal_5_0_6:any = this.context.gradient;
    this._PieSeriesComponent_5_3.check_gradient(currVal_5_0_6,throwOnChange,false);
    const currVal_5_0_7:any = this.context.activeEntries;
    this._PieSeriesComponent_5_3.check_activeEntries(currVal_5_0_7,throwOnChange,false);
    if (this._PieSeriesComponent_5_3.ngDoCheck(this,this._el_5,throwOnChange)) { this.compView_5.markAsCheckOnce(); }
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    const currVal_16:any = this.context.translation;
    if (import3.checkBinding(throwOnChange,this._expr_16,currVal_16)) {
      this.renderer.setElementAttribute(this._el_3,'transform',((currVal_16 == null)? (null as any): currVal_16.toString()));
      this._expr_16 = currVal_16;
    }
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this.compView_1.destroy();
    this.compView_5.destroy();
    this._PieSeriesComponent_5_3.ngOnDestroy();
    this._ChartComponent_1_6.ngOnDestroy();
  }
  visitProjectableNodesInternal(nodeIndex:number,ngContentIndex:number,cb:any,ctx:any):void {
    if (((nodeIndex == 1) && (ngContentIndex == 0))) {
      cb(this._text_2,ctx);
      cb(this._el_3,ctx);
      cb(this._text_7,ctx);
    }
  }
  handleEvent_1(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'legendLabelActivate')) {
      const pd_sub_0:any = ((<any>this.context.onActivate($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'legendLabelDeactivate')) {
      const pd_sub_1:any = ((<any>this.context.onDeactivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'legendLabelClick')) {
      const pd_sub_2:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'select')) {
      const pd_sub_0:any = ((<any>this.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    if ((eventName == 'activate')) {
      const pd_sub_1:any = ((<any>this.context.onActivate($event)) !== false);
      result = (pd_sub_1 && result);
    }
    if ((eventName == 'deactivate')) {
      const pd_sub_2:any = ((<any>this.context.onDeactivate($event)) !== false);
      result = (pd_sub_2 && result);
    }
    return result;
  }
}