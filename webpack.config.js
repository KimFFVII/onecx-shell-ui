// const { ModuleFederationPlugin } = require('@module-federation/enhanced')
import config from './module-federation.config'
import { withModuleFederation } from '@nx/angular/module-federation';

export default withModuleFederation(config)

// module.exports = {
//   infrastructureLogging: { level: 'verbose' },
//   stats: { logging: 'verbose' },
//   output: {
//     publicPath: 'auto'
//   },
//   optimization: { runtimeChunk: false },
//   resolve: { alias: {} },
//   experiments: { outputModule: true },
//   plugins: [
//     new ModuleFederationPlugin({
//       name: 'onecx-shell-ui',
//       dts: false,
//       library: { type: 'module' },
//       filename: 'remoteEntry.js',
//       manifest: false,
//       shared: {
//         '@angular/core': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/core/event-dispatch-contract.min.js': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/core/primitives/event-dispatch': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/core/primitives/signals': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/core/rxjs-interop': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/core/testing': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/common': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/common/http': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/common/testing': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/common/upgrade': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/elements': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/forms': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/platform-browser': {
//           requiredVersion: '^18.2.12',
//           version: '18.2.12'
//         },
//         '@angular/platform-browser/animations': {
//           requiredVersion: '^18.2.12',
//           version: '18.2.12'
//         },
//         '@angular/platform-browser/animations/async': {
//           requiredVersion: '^18.2.12',
//           version: '18.2.12'
//         },
//         '@angular/platform-browser/testing': {
//           requiredVersion: '^18.2.12',
//           version: '18.2.12'
//         },
//         '@angular/router': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular/router/testing': {
//           requiredVersion: '^18.2.12',
//           singleton: true,
//           version: '18.2.12'
//         },
//         '@angular-architects/module-federation-tools': {
//           requiredVersion: '18.0.6',
//           version: '18.0.6'
//         },
//         '@ngx-translate/core': {
//           requiredVersion: '^15.0.0',
//           version: '15.0.0'
//         },
//         rxjs: {
//           requiredVersion: '~7.8.1',
//           version: '7.8.1'
//         },
//         'rxjs/ajax': {
//           requiredVersion: '~7.8.1',
//           version: '7.8.1'
//         },
//         'rxjs/fetch': {
//           requiredVersion: '~7.8.1',
//           version: '7.8.1'
//         },
//         'rxjs/operators': {
//           requiredVersion: '~7.8.1',
//           version: '7.8.1'
//         },
//         'rxjs/testing': {
//           requiredVersion: '~7.8.1',
//           version: '7.8.1'
//         },
//         'rxjs/webSocket': {
//           requiredVersion: '~7.8.1',
//           version: '7.8.1'
//         },
//         primeng: {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/resources/': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/accordion': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/animateonscroll': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/animate': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/api': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/autofocus': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/autocomplete': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/avatar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/badge': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/avatargroup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/baseicon': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/blockui': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/breadcrumb': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/button': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/buttongroup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/calendar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/card': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/carousel': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/cascadeselect': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/chart': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/checkbox': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/chip': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/chips': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/colorpicker': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/confirmpopup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/confirmdialog': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/contextmenu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/defer': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dialog': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dataview': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/divider': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dock': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dom': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dropdown': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dynamicdialog': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/dragdrop': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/editor': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/fieldset': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/fileupload': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/focustrap': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/floatlabel': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/iconfield': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/galleria': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/image': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inplace': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputgroup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputgroupaddon': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputicon': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputmask': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputnumber': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputotp': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputtext': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputswitch': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/inputtextarea': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/knob': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/keyfilter': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/listbox': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/megamenu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/menu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/menubar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/message': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/messages': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/metergroup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/multiselect': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/overlay': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/organizationchart': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/orderlist': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/paginator': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/overlaypanel': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/panel': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/panelmenu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/password': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/picklist': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/progressbar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/progressspinner': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/radiobutton': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/rating': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/ripple': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/scroller': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/scrollpanel': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/sidebar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/scrolltop': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/selectbutton': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/skeleton': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/slidemenu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/slider': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/speeddial': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/splitbutton': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/spinner': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/splitter': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/stepper': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/steps': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/styleclass': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/table': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tabmenu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/terminal': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tag': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tabview': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tieredmenu': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/timeline': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/togglebutton': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/toast': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tooltip': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/toolbar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tree': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/treeselect': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/treetable': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/ts-helpers': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/tristatecheckbox': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/virtualscroller': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/utils': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angledoubleleft': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angledoubleright': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angledoubleup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angledoubledown': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angleleft': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angleup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angleright': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/angledown': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/arrowdownright': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/arrowdownleft': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/arrowdown': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/arrowleft': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/arrowright': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/arrowup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/ban': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/bars': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/blank': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/caretright': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/calendar': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/caretleft': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/chevrondown': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/chevronleft': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/check': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/chevronright': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/exclamationtriangle': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/eye': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/chevronup': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/home': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/eyeslash': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/filter': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/filterslash': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/infocircle': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/pencil': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/plus': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/minus': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/refresh': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/searchplus': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/searchminus': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/search': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/sortamountdown': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/sortalt': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/spinner': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/sortamountupalt': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/thlarge': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/star': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/starfill': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/times': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/timescircle': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/trash': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/upload': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/windowmaximize': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/undo': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         'primeng/icons/windowminimize': {
//           requiredVersion: '^17.18.11',
//           version: '17.18.11'
//         },
//         '@onecx/accelerator': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-accelerator': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-accelerator/testing': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-auth': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-integration-interface': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-integration-interface/mocks': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-remote-components': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-remote-components/mocks': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-webcomponents': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/integration-interface': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/keycloak-auth': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/portal-integration-angular': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/portal-integration-angular/mocks': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/portal-integration-angular/ngrx': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/portal-integration-angular/testing': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/portal-layout-styles': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/shell-core': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         },
//         '@onecx/angular-utils': {
//           requiredVersion: '^5.31.0',
//           version: '5.31.0'
//         }
//       }
//     })
//   ]
// }
// console.log('CONFIG', JSON.stringify(module.exports))
