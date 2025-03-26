# AngularSandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.15.

## NPM Dependencies

- Arlas WUI Toolkit (27.0.0)
- Arlas Map (27.0.0)
- Arlas Map Box (27.0.0)
- GeoJSON (0.5.0)

## Angular Dependencies

- Angular Material

## Description

This project is a sandbox for testing the Arlas library in an Angular application.

## Bugs

- Error logs are displayed in the web browser console when the application is launched:
```bash
core.mjs:7195 ERROR TypeError: this.mapService.updateLabelSources is not a function
    at _ArlasDrawComponent.ngOnChanges (arlas-map.mjs:4419:25)
    at _ArlasDrawComponent.rememberChangeHistoryAndInvokeOnChangesHook (core.mjs:3979:10)
    at callHookInternal (core.mjs:5008:10)
    at callHook (core.mjs:5035:5)
    at callHooks (core.mjs:4992:9)
    at executeCheckHooks (core.mjs:4929:3)
    at refreshView (core.mjs:13344:11)
    at detectChangesInView (core.mjs:13543:5)
    at detectChangesInViewIfAttached (core.mjs:13505:3)
    at detectChangesInEmbeddedViews (core.mjs:13465:7)
```
```bash
core.mjs:7195 ERROR TypeError: Cannot read properties of undefined (reading 'status')
    at _ArlasMapboxGL._getMoveEnd (arlas-mapbox.mjs:343:24)
    at arlas-map.mjs:2100:19
    at map.js:7:31
    at OperatorSubscriber2._this._next (OperatorSubscriber.js:14:9)
    at Subscriber2.next (Subscriber.js:32:12)
    at emit (debounceTime.js:18:20)
    at AsyncAction2.emitWhenIdle (debounceTime.js:29:7)
    at AsyncAction2._execute (AsyncAction.js:67:12)
    at AsyncAction2.execute (AsyncAction.js:56:22)
    at AsyncScheduler2.flush (AsyncScheduler.js:23:26)
```
- On powerless computers, the application may be slow to load and throw infinite exceptions in the console, as well as service not correctly injected.
