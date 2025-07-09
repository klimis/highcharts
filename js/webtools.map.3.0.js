@media all {
    .leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer {
        position: absolute;
        left: 0;
        top: 0
    }

    .leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow {
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
        -webkit-user-drag: none
    }

    .leaflet-tile::selection {
        background: #fff0
    }

    .leaflet-safari .leaflet-tile {
        image-rendering: -webkit-optimize-contrast
    }

    .leaflet-safari .leaflet-tile-container {
        width: 1600px;
        height: 1600px;
        -webkit-transform-origin: 0 0
    }

    .leaflet-marker-icon,.leaflet-marker-shadow {
        display: block
    }

    .leaflet-container .leaflet-overlay-pane svg,.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile {
        max-width: none!important;
        max-height: none!important
    }

    .leaflet-container.leaflet-touch-zoom {
        -ms-touch-action: pan-x pan-y;
        touch-action: pan-x pan-y
    }

    .leaflet-container.leaflet-touch-drag {
        -ms-touch-action: pinch-zoom;
        touch-action: none;
        touch-action: pinch-zoom
    }

    .leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {
        -ms-touch-action: none;
        touch-action: none
    }

    .leaflet-container {
        -webkit-tap-highlight-color: #fff0
    }

    .leaflet-container a {
        -webkit-tap-highlight-color: rgb(51 181 229 / .4)
    }

    .leaflet-tile {
        filter: inherit;
        visibility: hidden
    }

    .leaflet-tile-loaded {
        visibility: inherit
    }

    .leaflet-zoom-box {
        width: 0;
        height: 0;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        z-index: 800
    }

    .leaflet-overlay-pane svg {
        -moz-user-select: none
    }

    .leaflet-pane {
        z-index: 400
    }

    .leaflet-tile-pane {
        z-index: 200
    }

    .leaflet-overlay-pane {
        z-index: 400
    }

    .leaflet-shadow-pane {
        z-index: 500
    }

    .leaflet-marker-pane {
        z-index: 600
    }

    .leaflet-tooltip-pane {
        z-index: 650
    }

    .leaflet-popup-pane {
        z-index: 700
    }

    .leaflet-map-pane canvas {
        z-index: 100
    }

    .leaflet-map-pane svg {
        z-index: 200
    }

    .leaflet-vml-shape {
        width: 1px;
        height: 1px
    }

    .lvml {
        behavior: url(#default#VML);
        display: inline-block;
        position: absolute
    }

    .leaflet-control {
        position: relative;
        z-index: 800;
        pointer-events: visiblePainted;
        pointer-events: auto
    }

    .leaflet-top,.leaflet-bottom {
        position: absolute;
        z-index: 1000;
        pointer-events: none
    }

    .leaflet-top {
        top: 0
    }

    .leaflet-right {
        right: 0
    }

    .leaflet-bottom {
        bottom: 0
    }

    .leaflet-left {
        left: 0
    }

    .leaflet-control {
        float: left;
        clear: both
    }

    .leaflet-right .leaflet-control {
        float: right
    }

    .leaflet-top .leaflet-control {
        margin-top: 10px
    }

    .leaflet-bottom .leaflet-control {
        margin-bottom: 10px
    }

    .leaflet-left .leaflet-control {
        margin-left: 10px
    }

    .leaflet-right .leaflet-control {
        margin-right: 10px
    }

    .leaflet-fade-anim .leaflet-tile {
        will-change: opacity
    }

    .leaflet-fade-anim .leaflet-popup {
        opacity: 0;
        -webkit-transition: opacity 0.2s linear;
        -moz-transition: opacity 0.2s linear;
        transition: opacity 0.2s linear
    }

    .leaflet-fade-anim .leaflet-map-pane .leaflet-popup {
        opacity: 1
    }

    .leaflet-zoom-animated {
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0
    }

    .leaflet-zoom-anim .leaflet-zoom-animated {
        will-change: transform
    }

    .leaflet-zoom-anim .leaflet-zoom-animated {
        -webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,.25,1);
        -moz-transition: -moz-transform 0.25s cubic-bezier(0,0,.25,1);
        transition: transform 0.25s cubic-bezier(0,0,.25,1)
    }

    .leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile {
        -webkit-transition: none;
        -moz-transition: none;
        transition: none
    }

    .leaflet-zoom-anim .leaflet-zoom-hide {
        visibility: hidden
    }

    .leaflet-interactive {
        cursor: pointer
    }

    .leaflet-grab {
        cursor: -webkit-grab;
        cursor: -moz-grab;
        cursor: grab
    }

    .leaflet-crosshair,.leaflet-crosshair .leaflet-interactive {
        cursor: crosshair
    }

    .leaflet-popup-pane,.leaflet-control {
        cursor: auto
    }

    .leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable {
        cursor: move;
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing
    }

    .leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container {
        pointer-events: none
    }

    .leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path {
        pointer-events: visiblePainted;
        pointer-events: auto
    }

    .leaflet-container {
        background: #fff;
        outline: 0
    }

    .leaflet-container a {
        color: #0078a8
    }

    .leaflet-container a.leaflet-active {
        outline: 2px solid orange
    }

    .leaflet-zoom-box {
        border: 2px dotted #38f;
        background: rgb(255 255 255 / .5)
    }

    .leaflet-container {
        font: 12px/1.5 "Helvetica Neue",Arial,Helvetica,sans-serif
    }

    .leaflet-bar {
        box-shadow: 0 1px 5px rgb(0 0 0 / .65);
        border-radius: 4px
    }

    .leaflet-bar a,.leaflet-bar a:hover {
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        width: 26px;
        height: 26px;
        line-height: 26px;
        display: block;
        text-align: center;
        text-decoration: none;
        color: #000
    }

    .leaflet-bar a,.leaflet-control-layers-toggle {
        background-position: 50% 50%;
        background-repeat: no-repeat;
        display: block
    }

    .leaflet-bar a:hover {
        background-color: #f4f4f4
    }

    .leaflet-bar a:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px
    }

    .leaflet-bar a:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        border-bottom: none
    }

    .leaflet-bar a.leaflet-disabled {
        cursor: default;
        background-color: #f4f4f4;
        color: #bbb
    }

    .leaflet-touch .leaflet-bar a {
        width: 30px;
        height: 30px;
        line-height: 30px
    }

    .leaflet-touch .leaflet-bar a:first-child {
        border-top-left-radius: 2px;
        border-top-right-radius: 2px
    }

    .leaflet-touch .leaflet-bar a:last-child {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px
    }

    .leaflet-control-zoom-in,.leaflet-control-zoom-out {
        font: bold 18px 'Lucida Console',Monaco,monospace;
        text-indent: 1px
    }

    .leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out {
        font-size: 22px
    }

    .leaflet-control-layers {
        box-shadow: 0 1px 5px rgb(0 0 0 / .4);
        background: #fff;
        border-radius: 5px
    }

    .leaflet-touch .leaflet-control-layers-toggle {
        width: 44px;
        height: 44px
    }

    .leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle {
        display: none
    }

    .leaflet-control-layers-expanded .leaflet-control-layers-list {
        display: block;
        position: relative
    }

    .leaflet-control-layers-expanded {
        padding: 6px 10px 6px 6px;
        color: #333;
        background: #fff
    }

    .leaflet-control-layers-scrollbar {
        overflow-y: scroll;
        overflow-x: hidden;
        padding-right: 5px
    }

    .leaflet-control-layers-selector {
        margin-top: 2px;
        position: relative;
        top: 1px
    }

    .leaflet-control-layers label {
        display: block
    }

    .leaflet-control-layers-separator {
        height: 0;
        border-top: 1px solid #ddd;
        margin: 5px -10px 5px -6px
    }

    .leaflet-container .leaflet-control-attribution {
        background: #fff;
        background: rgb(255 255 255 / .7);
        margin: 0
    }

    .leaflet-control-attribution,.leaflet-control-scale-line {
        padding: 0 5px;
        color: #333
    }

    .leaflet-control-attribution a {
        text-decoration: none
    }

    .leaflet-control-attribution a:hover {
        text-decoration: underline
    }

    .leaflet-container .leaflet-control-attribution,.leaflet-container .leaflet-control-scale {
        font-size: 11px
    }

    .leaflet-left .leaflet-control-scale {
        margin-left: 5px
    }

    .leaflet-bottom .leaflet-control-scale {
        margin-bottom: 5px
    }

    .leaflet-control-scale-line {
        border: 2px solid #777;
        border-top: none;
        line-height: 1.1;
        padding: 2px 5px 1px;
        font-size: 11px;
        white-space: nowrap;
        overflow: hidden;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background: #fff;
        background: rgb(255 255 255 / .5)
    }

    .leaflet-control-scale-line:not(:first-child) {
        border-top: 2px solid #777;
        border-bottom: none;
        margin-top: -2px
    }

    .leaflet-control-scale-line:not(:first-child):not(:last-child) {
        border-bottom: 2px solid #777
    }

    .leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar {
        box-shadow: none
    }

    .leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar {
        border: 2px solid rgb(0 0 0 / .2);
        background-clip: padding-box
    }

    .leaflet-popup {
        position: absolute;
        text-align: center;
        margin-bottom: 20px
    }

    .leaflet-popup-content-wrapper {
        padding: 1px;
        text-align: left;
        border-radius: 12px
    }

    .leaflet-popup-content {
        margin: 13px 19px;
        line-height: 1.4
    }

    .leaflet-popup-content p {
        margin: 18px 0
    }

    .leaflet-popup-tip-container {
        width: 40px;
        height: 20px;
        position: absolute;
        left: 50%;
        margin-left: -20px;
        overflow: hidden;
        pointer-events: none
    }

    .leaflet-popup-tip {
        width: 17px;
        height: 17px;
        padding: 1px;
        margin: -10px auto 0;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .leaflet-popup-content-wrapper,.leaflet-popup-tip {
        background: #fff;
        color: #333;
        box-shadow: 0 3px 14px rgb(0 0 0 / .4)
    }

    .leaflet-container a.leaflet-popup-close-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 4px 4px 0 0;
        border: none;
        text-align: center;
        width: 18px;
        height: 14px;
        font: 16px/14px Tahoma,Verdana,sans-serif;
        color: #c3c3c3;
        text-decoration: none;
        font-weight: 700;
        background: #fff0
    }

    .leaflet-container a.leaflet-popup-close-button:hover {
        color: #999
    }

    .leaflet-popup-scrolled {
        overflow: auto;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd
    }

    .leaflet-oldie .leaflet-popup-content-wrapper {
        zoom:1}

    .leaflet-oldie .leaflet-popup-tip {
        width: 24px;
        margin: 0 auto;
        -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";
        filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678,M12=0.70710678,M21=-0.70710678,M22=0.70710678)
    }

    .leaflet-oldie .leaflet-popup-tip-container {
        margin-top: -1px
    }

    .leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip {
        border: 1px solid #999
    }

    .leaflet-div-icon {
        background: #fff;
        border: 1px solid #666
    }

    .leaflet-tooltip {
        position: absolute;
        padding: 6px;
        background-color: #fff;
        border: 1px solid #fff;
        border-radius: 3px;
        color: #222;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        pointer-events: none;
        box-shadow: 0 1px 3px rgb(0 0 0 / .4)
    }

    .leaflet-tooltip.leaflet-clickable {
        cursor: pointer;
        pointer-events: auto
    }

    .leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before {
        position: absolute;
        pointer-events: none;
        border: 6px solid #fff0;
        background: #fff0;
        content: ""
    }

    .leaflet-tooltip-bottom {
        margin-top: 6px
    }

    .leaflet-tooltip-top {
        margin-top: -6px
    }

    .leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before {
        left: 50%;
        margin-left: -6px
    }

    .leaflet-tooltip-top:before {
        bottom: 0;
        margin-bottom: -12px;
        border-top-color: #fff
    }

    .leaflet-tooltip-bottom:before {
        top: 0;
        margin-top: -12px;
        margin-left: -6px;
        border-bottom-color: #fff
    }

    .leaflet-tooltip-left {
        margin-left: -6px
    }

    .leaflet-tooltip-right {
        margin-left: 6px
    }

    .leaflet-tooltip-left:before,.leaflet-tooltip-right:before {
        top: 50%;
        margin-top: -6px
    }

    .leaflet-tooltip-left:before {
        right: 0;
        margin-right: -12px;
        border-left-color: #fff
    }

    .leaflet-tooltip-right:before {
        left: 0;
        margin-left: -12px;
        border-right-color: #fff
    }
}

@media all {
    .wt-map {
        overflow: hidden;
        z-index: 1
    }

    .wtmap {
        position: relative;
        font-family: Inter,Arial,sans-serif
    }

    .wt-map.leaflet-container[role="group"]:focus-visible .wt-map-viewport {
        outline: 4px solid #ffd617;
        outline-offset: -4px
    }

    .wtmap,.wtmap * {
        box-sizing: border-box
    }

    .wtmap .wt-map-content {
        position: relative;
        overflow: hidden;
        border: 1px solid #444
    }

    .wtmap .map {
        z-index: 2
    }

    .wtmap,.wtmap .map,.wtmap .wt-map {
        min-height: 500px
    }

    .wtmap *::-webkit-scrollbar-track {
        background-color: #f9f9f9
    }

    .wtmap *::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background-color: #f9f9f9
    }

    .wtmap *::-webkit-scrollbar-thumb {
        background-color: #ddd;
        border-radius: 5px
    }

    .wt-map-viewport {
        z-index: 550;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        pointer-events: none
    }
}

@media all {
    .wt-map-menu {
        width: 50px;
        margin: 0 0 0 -50px;
        padding: 0
    }

    .wt-map-menu .wt-btn,.wt-map-menu .wt-btn:focus,.wt-map-menu .wt-btn:active {
        position: relative;
        display: block;
        width: 50px;
        height: 50px;
        background: center center no-repeat;
        text-decoration: none;
        color: #fff;
        outline: none;
        border: 4px solid #444
    }

    .wt-map-menu .wt-btn:focus,.wt-map-menu .wt-btn:active,.wt-map-menu .wt-btn.selected:focus,.wt-map-menu .wt-btn.selected:active {
        border-color: #ffd617
    }

    .wt-map-menu .wt-btn.selected,.wt-map-fullscreen .wt-map-menu a.fullscreen {
        background-color: #fff;
        border-color: #fff
    }

    .wt-map-menu .wt-btn span {
        position: absolute;
        z-index: 665;
        top: -999px;
        display: block;
        padding: 10px;
        background-color: #404040;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        min-width: 100px;
        overflow: hidden;
        border-radius: 5px;
        text-align: center;
        white-space: nowrap
    }

    .wt-map-menu .wt-btn b {
        display: none;
        width: 0;
        height: 0;
        border: 10px solid #fff0;
        border-left-color: #404040;
        position: absolute;
        right: 40px;
        top: 15px;
        z-index: 665
    }

    .wt-map-menu .wt-btn:hover span,.wt-map-menu .wt-btn:focus span,.wt-map-menu .wt-btn:active span {
        top: 4px;
        right: 55px
    }

    .wt-map-menu .wt-btn:hover b,.wt-map-menu .wt-btn:focus b,.wt-map-menu .wt-btn:active b {
        display: block
    }

    .wt-map-menu .wt-btn.selected b,.wt-map-menu .wt-btn.selected span {
        display: none
    }

    .wt-map-menu .wt-btn.home {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.layer {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.layer.selected {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23444' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M21.698 10.658l2.302 1.342-12.002 7-11.998-7 2.301-1.342 9.697 5.658 9.7-5.658zm-9.7 10.657l-9.697-5.658-2.301 1.343 11.998 7 12.002-7-2.302-1.342-9.7 5.657zm12.002-14.315l-12.002-7-11.998 7 11.998 7 12.002-7z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.download {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='1' stroke-opacity='1' viewBox='0 0 24 24'%3E%3Cpath d='M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.download.selected {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23444' xmlns='http://www.w3.org/2000/svg' width='24' height='24' stroke-width='1' stroke-opacity='1' viewBox='0 0 24 24'%3E%3Cpath d='M23 24v-20h-8v2h6v16h-18v-16h6v-2h-8v20h22zm-12-13h-4l5 6 5-6h-4v-11h-2v11z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.zoomin {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.zoomout {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.fullscreen {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9z'/%3E%3C/svg%3E")
    }

    .wt-map-fullscreen .wt-map-menu .wt-btn.fullscreen {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M18 3h2v4h4v2h-6v-6zm6 12v2h-4v4h-2v-6h6zm-18 6h-2v-4h-4v-2h6v6zm-6-12v-2h4v-4h2v6h-6z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.print {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M16 18h-8v-1h8v1zm-2 1h-6v1h6v-1zm10-14v13h-4v6h-16v-6h-4v-13h4v-5h16v5h4zm-18 0h12v-3h-12v3zm12 10h-12v7h12v-7zm4-8h-20v9h2v-3h16v3h2v-9zm-1.5 1c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.routing {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 0l-1.4 1.4L20.2 4H16c-2.8 0-5 2.2-5 5v5c-.8-.6-1.9-1-3-1H3.8l2.6-2.6L5 9l-5 5 5 5 1.4-1.4L3.8 15H8c1.7 0 3 1.3 3 3v6h2V9c0-1.7 1.3-3 3-3h4.2l-2.6 2.6L19 10l5-5-5-5z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.routing.selected {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23444' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 0l-1.4 1.4L20.2 4H16c-2.8 0-5 2.2-5 5v5c-.8-.6-1.9-1-3-1H3.8l2.6-2.6L5 9l-5 5 5 5 1.4-1.4L3.8 15H8c1.7 0 3 1.3 3 3v6h2V9c0-1.7 1.3-3 3-3h4.2l-2.6 2.6L19 10l5-5-5-5z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.more {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.more.selected {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23444' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M6 12c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm9 0c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.outers {
        z-index: 35;
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 3c-2.21 0-4 1.791-4 4s1.79 4 4 4c2.209 0 4-1.791 4-4s-1.791-4-4-4zm-.004 3.999c-.564.564-1.479.564-2.044 0s-.565-1.48 0-2.044c.564-.564 1.479-.564 2.044 0s.565 1.479 0 2.044z'/%3E%3C/svg%3E")
    }

    .wt-map-menu .wt-btn.locate {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z'/%3E%3C/svg%3E");
        background-size: 30px auto
    }

    .wt-map-menu .wt-btn.locate.selected {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23444' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 11h-2.051c-.469-4.725-4.224-8.48-8.949-8.95v-2.05h-2v2.05c-4.725.47-8.48 4.225-8.949 8.95h-2.051v2h2.051c.469 4.725 4.224 8.48 8.949 8.95v2.05h2v-2.05c4.725-.469 8.48-4.225 8.949-8.95h2.051v-2zm-11 8.931v-3.931h-2v3.931c-3.611-.454-6.478-3.32-6.931-6.931h3.931v-2h-3.931c.453-3.611 3.32-6.477 6.931-6.931v3.931h2v-3.931c3.611.454 6.478 3.319 6.931 6.931h-3.931v2h3.931c-.453 3.611-3.32 6.477-6.931 6.931zm1-7.931c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z'/%3E%3C/svg%3E")
    }
}

@media all {
    .wt-hide-menu .wt-map-menu {
        margin: 0;
        background-color: #fff0
    }

    .wt-hide-menu .wt-map-menu .wt-btn {
        display: none!important
    }

    .wt-hide-menu .wt-map-panels {
        min-width: 400px;
        border: 0;
        border-left: 1px solid #444
    }

    .wtmap.wt-hide-menu .wt-map,.wtmap.wt-hide-menu .leaflet-control-container {
        margin-right: 0
    }

    .wt-hide-menu.wt-map-show-panel .wt-map,.wt-hide-menu.wt-map-show-panel .leaflet-control-container {
        margin-right: 400px
    }

    .wt-hide-menu.wt-map-show-panel .wt-map-panels {
        min-width: 400px;
        width: 400px
    }
}

@media all {
    html .wt-map-fullscreen {
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        width: 100%!important;
        height: 100%;
        overflow: hidden
    }

    .wt-map-fullscreen .wt-map,.wt-map-fullscreen .wt-map-content,.wt-map-fullscreen .map {
        position: relative;
        min-height: 100%!important;
        z-index: 3;
        height: 100%;
        background-color: #fff
    }

    .wt-map-fullscreen .print {
        display: none
    }
}

@media all {
    .wt-map-loading {
        position: absolute;
        z-index: 400;
        left: 1px;
        top: 1px;
        width: 80px;
        height: 80px;
        background: 0 0 / 80px auto no-repeat #fff0 url("data:image/svg+xml,%3Csvg fill='%23444' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'  width='293px' height='293px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%0A%3Cg transform='translate(73%2C50)'%3E%0A%3Cg transform='rotate(0)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='1' transform='scale(1.01951 1.01951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.6193693693693695s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.6193693693693695s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(69.9185842870421%2C61.5)'%3E%0A%3Cg transform='rotate(29.999999999999996)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.9166666666666666' transform='scale(1.08951 1.08951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.5630630630630631s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.5630630630630631s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(61.5%2C69.91858428704208)'%3E%0A%3Cg transform='rotate(59.99999999999999)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.8333333333333334' transform='scale(1.15951 1.15951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.5067567567567568s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.5067567567567568s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(50%2C73)'%3E%0A%3Cg transform='rotate(90)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.75' transform='scale(1.22951 1.22951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.4504504504504505s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.4504504504504505s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(38.50000000000001%2C69.9185842870421)'%3E%0A%3Cg transform='rotate(119.99999999999999)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.6666666666666666' transform='scale(1.29951 1.29951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.39414414414414417s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.39414414414414417s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(30.08141571295791%2C61.5)'%3E%0A%3Cg transform='rotate(150.00000000000003)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.5833333333333334' transform='scale(1.36951 1.36951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.3378378378378379s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.3378378378378379s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(27%2C50)'%3E%0A%3Cg transform='rotate(180)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.5' transform='scale(1.43951 1.43951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.28153153153153154s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.28153153153153154s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(30.081415712957906%2C38.50000000000001)'%3E%0A%3Cg transform='rotate(209.99999999999997)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.4166666666666667' transform='scale(1.50951 1.50951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.22522522522522526s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.22522522522522526s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(38.499999999999986%2C30.081415712957916)'%3E%0A%3Cg transform='rotate(239.99999999999997)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.3333333333333333' transform='scale(1.57951 1.57951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.16891891891891894s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.16891891891891894s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(49.99999999999999%2C27)'%3E%0A%3Cg transform='rotate(270)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.25' transform='scale(1.64951 1.64951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.11261261261261263s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.11261261261261263s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(61.5%2C30.081415712957913)'%3E%0A%3Cg transform='rotate(300.00000000000006)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.16666666666666666' transform='scale(1.71951 1.71951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='-0.056306306306306314s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='-0.056306306306306314s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%3Cg transform='translate(69.91858428704208%2C38.499999999999986)'%3E%0A%3Cg transform='rotate(329.99999999999994)'%3E%0A%3Ccircle cx='0' cy='0' r='3' fill='%23444444' fill-opacity='0.08333333333333333' transform='scale(1.78951 1.78951)'%3E%0A  %3CanimateTransform attributeName='transform' type='scale' begin='0s' values='1.84 1.84%3B1 1' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite'%3E%3C/animateTransform%3E%0A  %3Canimate attributeName='fill-opacity' keyTimes='0%3B1' dur='0.6756756756756757s' repeatCount='indefinite' values='1%3B0' begin='0s'%3E%3C/animate%3E%0A%3C/circle%3E%0A%3C/g%3E%0A%3C/g%3E%0A%3C/svg%3E")
    }
}

@media all {
    .wt-map-attribution {
        padding: 10px 0 5px;
        font-size: 12px;
        line-height: 1.6
    }
}

@media all {
    .wt-map-region {
        position: absolute;
        z-index: 1;
        left: 0;
        bottom: -360px;
        transition: bottom .3s;
        padding: 0;
        overflow: hidden;
        overflow-x: auto;
        max-height: 104px;
        max-width: calc(100% - 49px);
        pointer-events: all;
        border-top: 1px solid #999;
        border-right: 1px solid #999;
        background-color: rgb(255 255 255 / .9);
        white-space: nowrap
    }

    .wt-map-region * {
        box-sizing: border-box
    }

    .wt-map-region .wt-insets {
        position: relative;
        display: inline-block;
        overflow: hidden
    }

    .wt-map-region .wt-insets .wt-insets-map {
        min-height: 80px;
        min-width: 40px;
        background-color: #fff0;
        margin-bottom: 20px;
        z-index: 1
    }

    .wt-insets-label {
        font-size: 12px;
        padding: 5px 0;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center
    }

    .wt-insets-mask {
        position: absolute;
        left: 5px;
        top: 5px;
        bottom: 5px;
        right: 5px;
        background-color: #fff0;
        display: block;
        min-width: calc(100% - 10px);
        border: 4px solid #fff0;
        z-index: 2;
        box-shadow: none;
        pointer-events: all
    }

    .wt-insets-mask:focus {
        outline: none;
        border: 4px solid #ffd617!important
    }

    .wt-map-info-show .wt-map-menu .wt-btn.region {
        display: none
    }

    .wt-map-menu .wt-btn.region {
        display: block;
        position: absolute;
        bottom: 0;
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z'/%3E%3C/svg%3E")
    }

    .wt-map-region-visible .wt-btn.region {
        background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z'/%3E%3C/svg%3E");
        display: block
    }

    .wt-map-region-visible .wt-map-region {
        bottom: 0
    }
}

@media all {
    .wt-map-info {
        position: absolute;
        right: -500%;
        top: 30px;
        bottom: 30px;
        z-index: 6;
        min-width: 400px;
        -webkit-transition: left .3s,right .3s,top .3s,bottom .3s;
        transition: left .3s,right .3s,top .3s,bottom .3s;
        pointer-events: none;
        outline: none
    }

    .wt-map-info-show .wt-map-info {
        max-width: 500px
    }

    .wt-map-info-show-animate .wt-map-info {
        right: 80px
    }

    .wt-hide-menu .wt-map-info {
        right: 30px
    }

    .wt-map-info.wt-info-top-left,.wt-map-info.wt-info-bottom-left {
        right: auto;
        left: -500%
    }

    .wt-map-info-show-animate .wt-map-info.wt-info-top-left,.wt-map-info-show-animate .wt-map-info.wt-info-bottom-left {
        left: 0
    }

    .wt-map-info.wt-info-bottom-right,.wt-map-info.wt-info-bottom-left {
        top: auto;
        bottom: 30px
    }

    .wt-map-info-show .wt-info-modal:before {
        content: "\00a0";
        display: block;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background-color: rgb(0 0 0 / .5);
        max-width: 100%;
        padding: 0;
        z-index: 1
    }

    .wt-map-info-show .wt-info-modal {
        pointer-events: all;
        z-index: 40;
        position: fixed;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        min-width: 100%;
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        transition: all 0s
    }

    .wt-map-info-show .wt-info-modal .wt-map-info-content {
        max-width: calc(100% - 20px);
        min-width: 400px
    }

    .smartphone.wt-map-info-show .wt-map-info.wt-info-modal .wt-map-info-close,.wt-map-info-show .wt-map-info.wt-info-modal .wt-map-info-close {
        top: 5px;
        right: 5px
    }

    .smartphone.wt-map-info-show .wt-map-info.wt-info-modal {
        border: 0
    }

    .smartphone.wt-map-info-show .wt-info-modal .wt-map-info-content {
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border: 0;
        min-width: 100%;
        min-height: 100%
    }

    .wt-map-info-content {
        pointer-events: auto;
        border: 10px solid rgb(255 255 255 / .1);
        border-bottom-width: 20px;
        background-color: rgb(255 255 255 / .975);
        box-shadow: 0 2px 5px #444;
        margin: 10px 10px 20px 10px;
        max-height: calc(100% - 20px);
        min-height: 200px;
        padding: 20px;
        overflow: auto;
        outline: 1px solid #999;
        position: relative;
        z-index: 2
    }

    .wt-map-info-content h2:first-child {
        margin-top: 0
    }

    .wt-map-info-content p {
        line-height: 1.5
    }

    .wt-map-info a.wt-map-info-close {
        position: absolute;
        right: 40px;
        top: -10px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        overflow: hidden;
        background: url("data:image/svg+xml,%3Csvg fill='%23fff' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'/%3E%3C/svg%3E") #444 center center no-repeat;
        background-size: 20px auto;
        pointer-events: auto;
        z-index: 6
    }

    .wt-map-info a.wt-map-info-close:focus-visible {
        box-shadow: 0 0 0 4px #ffd617;
        outline: 0
    }

    .wt-map-info a.wt-map-info-close span {
        position: relative;
        left: -999px
    }

    .smartphone.wt-map-info-show .wt-map-menu {
        display: none
    }

    .smartphone.wt-map-info-show .wt-map-info {
        border-left: 0;
        border-right: 0;
        top: 300px;
        bottom: 0;
        right: 0;
        left: 0;
        width: auto;
        max-width: initial;
        min-width: initial;
        -webkit-transition: all 0s;
        transition: all 0s;
        z-index: 11
    }

    .smartphone.wt-map-info-show .wt-map-info-content {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0;
        max-height: 100%;
        min-height: 100%;
        z-index: 12
    }

    .smartphone.wt-map-info-show .leaflet-container {
        min-height: 300px!important;
        margin-bottom: 300px;
        margin-right: 0;
        z-index: 11
    }

    .smartphone.wt-map-info-show .wt-map-panels {
        border: 0
    }

    .smartphone.wt-map-info-show a.wt-map-info-close {
        z-index: 13;
        top: -27px;
        right: 27px
    }

    .smartphone.wt-map-info-show .wt-map-viewport {
        height: 300px
    }

    .wt-map-info-show .wt-map-region {
        bottom: -300px
    }

    .wt-map-info-show .wt-map-region-close {
        display: none
    }

    .wt-map-region-visible.wt-map-info-show .region {
        display: block
    }
}

@media all {
    .wtmap .wtLabelFix,.wtmap .wtLabel {
        border: 0!important;
        background: #fff!important;
        font-size: 12px;
        padding: 5px!important;
        box-shadow: 0 0 0 #fff0!important;
        text-shadow: 0 0 7px #fff;
        color: #444!important;
        text-align: center
    }

    .wt-map .wtLabelItalic {
        font-style: italic;
        font-size: 10px
    }

    .wtmap .wtLabelFix {
        background: transparent!important;
        padding: 0!important;
        box-shadow: none!important;
        text-shadow: none!important;
        top: 10px
    }

    .wtmap .wtLabelFix:before {
        display: none
    }

    .wt-labels-hide .wtLabelFix {
        visibility: hidden
    }
}

@media all {
    .wt-map-panels {
        position: absolute;
        right: -400px;
        top: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 10;
        min-width: 450px;
        -webkit-transition: right .3s;
        transition: right .3s;
        border-left: 51px solid #444
    }

    .wt-map-show-panel .wt-map-panels {
        right: 0;
        min-width: 450px;
        width: 30%
    }

    .wtmap .wt-map,.wtmap .leaflet-control-container {
        margin-right: 50px
    }

    .leaflet-control-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: 3
    }

    .wt-map-show-panel .wt-map,.wt-map-show-panel .leaflet-control-container {
        margin-right: 450px
    }

    .wt-map-panels .wtpanel {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 10px;
        overflow: auto;
        display: none
    }

    .wt-map-panels .wtpanel-content {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        overflow: auto;
        z-index: 25;
        padding: 10px;
        border: 4px solid #fff
    }

    .wtpanel-content[hidden] {
        display: none
    }

    .wtpanel-content:focus {
        outline: none
    }

    .wt-map-show-panel .wt-map-panels .wtpanel {
        display: block
    }

    .wt-map-show-panel .wtpanel-contentwtregion {
        bottom: -300px
    }

    .smartphone.wt-map-show-panel .wt-map-panels {
        width: 100%;
        max-width: 100%;
        min-width: 150px;
        border-left: 0;
        border-right: 0;
        left: -1px
    }

    .smartphone.wt-map-show-panel .wt-map-panels .wtpanel-content {
        width: 100%
    }

    .smartphone.wt-map-show-panel .wt-map-menu .wt-btn {
        display: none
    }

    .smartphone.wt-map-show-panel .wt-map-menu {
        left: auto;
        right: 0
    }
}

@media all {
    .wt-map-panels .wtpanel-content {
        overflow: hidden;
        border: 0;
        padding: 0;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column
    }

    .wt-map-panels [hidden] {
        display: none
    }

    .wtpanel-content-header {
        background-color: #fff
    }

    .wtpanel-content-body {
        padding: 16px;
        flex-grow: 1;
        overflow: auto;
        position: relative
    }

    .wtpanel-content-footer {
        background-color: #f93
    }

    .wtpanel-content-header--default {
        display: flex;
        align-items: center;
        background: #f6f6f6;
        height: 50px;
        color: #444;
        border-bottom: 1px solid #ddd
    }

    .wtpanel-content-header--default b {
        flex-grow: 1;
        text-align: center;
        color: #666;
        font-weight: 400;
        font-size: 18px
    }

    .wtpanel-content-header--default button {
        margin: 0 0 0 auto;
        display: flex;
        border: 0;
        align-items: center;
        background: #f9f9f9;
        height: 49px;
        width: 54px;
        border-left: 1px solid #ddd;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #444;
        outline: none
    }

    .wtpanel-content-header--default button:focus-visible {
        color: #fff;
        background-color: #444
    }
}

@media all {
    .smartphone .wt-disclaimer-content {
        padding: 0
    }

    .wt-disclaimer-content {
        padding: 20px 20px 20px 10px
    }

    .wt-disclaimer-content h2 {
        color: #444;
        font-size: 24px;
        padding: 0 0 20px;
        margin: 0
    }

    .wt-disclaimer-content p {
        font-size: 14px;
        line-height: 1.6;
        text-align: justify
    }
}

@media all {
    .wtpanel-routing:focus-visible {
        outline: 3px solid #ffd617;
        outline-offset: -3px
    }

    .wtpanel-routing h2 {
        padding: 0 10px;
        margin: 0 0 10px
    }

    .wtpanel-routing .wtpanel-content-body p {
        padding: 0 10px;
        margin: 0
    }

    .routing-container * {
        box-sizing: border-box
    }

    .leaflet-showrouting .routing-container {
        right: 0
    }

    .routing-container {
        position: absolute;
        top: 0;
        right: -40%;
        bottom: 0;
        background-color: #fff;
        z-index: 3333;
        padding: 30px;
        width: 40%;
        border-left: 50px solid #444;
        -webkit-transition: all 0.6s ease;
        -moz-transition: all 0.6s ease;
        -o-transition: all 0.6s ease;
        -ms-transition: all 0.6s ease;
        transition: all 0.6s ease
    }

    .routing-container .leaflet-routing-alternatives-container {
        position: absolute;
        left: 20px;
        top: 160px;
        bottom: 20px;
        right: 5px;
        padding-right: 15px;
        overflow: auto
    }

    .leaflet-routing-geocoders {
        padding: 5px
    }

    .leaflet-routing-geocoder {
        background-color: #fff;
        border: 1px solid #ccc;
        margin: 0 0 15px 0;
        position: relative;
        display: flex;
        align-items: center
    }

    .leaflet-routing-geocoders input {
        padding: 10px;
        font-size: 16px;
        margin: 0;
        border: 0;
        background-color: #fff;
        outline: none;
        flex-grow: 1
    }

    .wt-routing--search-field-wrapper {
        display: flex;
        flex-grow: 1
    }

    .wt-remove-location-waypoint,.leaflet-routing-geocoders span.leaflet-routing-remove-waypoint {
        width: 40px;
        height: 30px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px dashed #ddd
    }

    .wt-remove-location-waypoint {
        width: 50px;
        position: relative
    }

    .wt-remove-location-waypoint b {
        display: none;
        width: 0;
        height: 0;
        border: 9px solid #fff0;
        border-bottom-color: #404040;
        position: absolute;
        right: 13px;
        top: calc(100% - 6px);
        z-index: 665
    }

    .wt-remove-location-waypoint:hover b {
        display: block
    }

    .wt-remove-location-waypoint:hover,.wt-remove-location-waypoint:focus-visible {
        background-color: #444;
        color: #fff;
        outline: 3px solid #444!important;
        border: 1px solid #fff;
        opacity: 1;
        z-index: 6000003;
        height: 50px;
        width: 50px
    }

    .leaflet-routing-geocoders span.leaflet-routing-remove-waypoint:hover,.leaflet-routing-geocoders span.leaflet-routing-remove-waypoint:focus-visible {
        background-color: #444;
        color: #fff;
        height: 40px
    }

    .leaflet-routing-geocoders button {
        display: none
    }

    .leaflet-routing-geocoder-result {
        position: absolute;
        z-index: 9999;
        top: 0;
        display: none;
        background-color: #fff;
        background-color: rgb(255 255 255 / .9);
        padding: 10px;
        border: 1px solid #ccc
    }

    .leaflet-routing-geocoder-result table {
        border: 0;
        width: 100%;
        padding: 0;
        margin: 0;
        border-collapse: collapse
    }

    .leaflet-routing-geocoder-result td {
        border-bottom: 1px solid #eee;
        padding: 15px;
        font-size: 14px;
        margin: 0;
        line-height: 1.4
    }

    .leaflet-routing-geocoder-result td:hover,.leaflet-routing-geocoder-selected {
        background-color: #f6f6f6!important;
        color: #444
    }

    .leaflet-routing-geocoder-result-open {
        display: block
    }

    .leaflet-routing-alt {
        padding: 10px 0
    }

    .leaflet-routing-alt h2 {
        color: #36adff;
        padding: 0 10px;
        margin: 0 0 10px;
        line-height: 1.2
    }

    .leaflet-routing-alt h3 {
        color: #369;
        margin: 0;
        padding: 0 10px 10px;
        border-bottom: 1px dashed #ccc;
        font-size: 18px;
        font-weight: 400;
        line-height: 1.2
    }

    .leaflet-routing-alt .wt-routing-direction {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        border-bottom: 1px solid #eee;
        padding: 10px 0
    }

    .leaflet-routing-alt .wt-routing-direction:nth-child(even) {
        background-color: #f9f9f9
    }

    .leaflet-routing-alt .wt-routing-direction:hover {
        background-color: #f3f3f3;
        cursor: pointer
    }

    .leaflet-routing-alt .wt-routing-distance {
        font-weight: 700;
        min-width: 80px;
        text-align: right;
        padding-right: 10px;
        justify-content: flex-end
    }

    .leaflet-routing-alt .wt-routing-text {
        flex-grow: 3
    }

    .leaflet-routing-alt .wt-routing-icon {
        min-width: 40px;
        padding-left: 10px
    }

    .leaflet-routing-icon {
        background-image: url(https://webtools.europa.eu/services/map/3.0/images/svg/leaflet.routing.icons.svg);
        background-size: 240px 20px;
        background-repeat: no-repeat;
        display: inline-block;
        width: 20px;
        height: 20px
    }

    .leaflet-routing-icon-continue {
        background-position: 0 0
    }

    .leaflet-routing-icon-sharp-right {
        background-position: -20px 0
    }

    .leaflet-routing-icon-turn-right {
        background-position: -40px 0
    }

    .leaflet-routing-icon-bear-right {
        background-position: -60px 0
    }

    .leaflet-routing-icon-u-turn {
        background-position: -80px 0
    }

    .leaflet-routing-icon-sharp-left {
        background-position: -100px 0
    }

    .leaflet-routing-icon-turn-left {
        background-position: -120px 0
    }

    .leaflet-routing-icon-bear-left {
        background-position: -140px 0
    }

    .leaflet-routing-icon-depart {
        background-position: -160px 0
    }

    .leaflet-routing-icon-enter-roundabout {
        background-position: -180px 0
    }

    .leaflet-routing-icon-arrive {
        background-position: -200px 0
    }

    .leaflet-routing-icon-via {
        background-position: -220px 0
    }

    #leaflet-wt-straightline-container h3 {
        padding-left: 40px;
        margin: 0
    }

    #leaflet-wt-straightline-container h3 span.wt-distance {
        color: #369
    }

    #leaflet-wt-straightline-container h3 span.wt-distance-legend {
        font-weight: 700;
        border-bottom: dashed 2px #384c81;
        display: inline-block;
        width: 30px;
        margin-bottom: 3px;
        padding: 0;
        margin-left: -40px;
        padding-top: 10px
    }

    .leaflet-popup-content button.btn_geocoder_start {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0
    }

    .leaflet-popup-content button.btn_geocoder_dest {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left-width: 0
    }

    .leaflet-popup-content button {
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: .5em;
        cursor: pointer;
        color: #666
    }

    .leaflet-routing-container {
        margin-top: 10px
    }

    .leaflet-routing-container.leaflet-bar.leaflet-control {
        box-shadow: none!important;
        border-radius: 0!important;
        width: 100%
    }

    .leaflet-popup-close-button:hover {
        color: #999
    }

    .leaflet-popup-close-button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 4px 4px 0 0;
        text-align: center;
        width: 18px;
        height: 14px;
        font: 16px/14px Tahoma,Verdana,sans-serif;
        color: #444;
        text-decoration: none;
        font-weight: 700;
        background: #fff0
    }

    .leaflet-popup-close-button span {
        color: #444
    }

    .leaflet-routing-geocoder input {
        border-radius: 0;
        border: 1px solid #fff
    }

    .wt-route--legend {
        display: flex;
        background: #fff;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 40px;
        color: #ccc;
        border-right: 1px dashed #ddd
    }

    .leaflet-routing-geocoder .geolocateRouting {
        display: flex;
        width: 40px;
        height: 40px;
        cursor: pointer;
        border-right: 1px solid #ccc;
        align-items: center;
        justify-content: center;
        background-color: #eee
    }

    .leaflet-routing-geocoder .geolocateRouting:hover,.leaflet-routing-geocoder .geolocateRouting:focus-visible,.leaflet-routing-geocoder span.leaflet-routing-remove-waypoint:hover,.leaflet-routing-geocoder span.leaflet-routing-remove-waypoint:focus-visible {
        background-color: #444;
        color: #fff;
        outline: 3px solid #444!important;
        border: 1px solid #fff;
        opacity: 1;
        z-index: 3
    }

    .leaflet-routing-geocoder span.geolocateRouting:focus,.leaflet-routing-geocoder span.geolocateRouting:active,.leaflet-routing-geocoder span.leaflet-routing-remove-waypoint:focus,.leaflet-routing-geocoder span.leaflet-routing-remove-waypoint:active,.leaflet-routing-geocoder input:focus,.leaflet-routing-geocoder input:active,.leaflet-routing-alternatives-container div.wt-routing-direction:focus,.leaflet-routing-alternatives-container div.wt-routing-direction:active {
        outline: 3px solid #444!important;
        border: 1px solid #fff;
        opacity: 1;
        z-index: 3
    }

    .wt-autocomplete--wrapper {
        flex-grow: 1
    }

    .wt-autocomplete--wrapper input {
        width: 100%
    }
}

@media all {
    .wt-location-tooltip {
        padding: 14px;
        max-width: 320px;
        min-width: 200px
    }

    .wt-location-tooltip h4 {
        font-size: 18px;
        font-weight: 700;
        margin: 0 0 6px;
        white-space: pre-wrap
    }

    .wt-location-tooltip div {
        display: block;
        white-space: pre-wrap
    }

    .wt-location-tooltip b {
        display: inline-block;
        width: 60px
    }

    .wtpanel-content .wt-location-content {
        margin: 10px 10px 20px 10px
    }

    .wtpanel-content .wt-location-toolbar {
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        margin: 10px 5px
    }

    .wt-location-toolbar span[style] {
        flex-grow: 1
    }

    .wtpanel-content .locateMe {
        display: block;
        background-color: #f6f6f6;
        padding: 0;
        margin: 0;
        border: 0;
        border-right: 1px solid #ccc;
        cursor: pointer;
        width: 50px;
        height: 50px;
        outline: none
    }

    .wtpanel-content .locateMe:hover,.wtpanel-content .locateMe:focus-visible {
        background-color: #444;
        color: #fff;
        outline: 3px solid #444!important;
        border: 1px solid #fff;
        z-index: 3
    }

    .wt-location-search {
        border: 0;
        padding: 16px;
        width: 100%;
        font-size: 16px;
        font-family: Inter,Arial,sans-serif;
        outline: none;
        flex-grow: 1
    }

    .wt-location-search~ul[aria-busy=false] {
        border: 1px solid #444;
        background-color: #fff;
        margin: 4px 0 0 0;
        max-width: 280px;
        max-height: 230px;
        min-width: 280px;
        font-size: 16px;
        font-family: Inter,Arial,sans-serif;
        overflow: auto
    }
}

@media all {
    .map-interactive-print {
        padding: 10px 10px 0 10px;
        margin: 0 5px;
        max-width: 360px
    }

    .map-interactive-print p {
        float: left;
        width: 50%
    }

    .map-interactive-print *:focus {
        box-shadow: 0 0 0 4px #ffd617
    }

    .smartphone .map-interactive-print p {
        width: 100%;
        float: none;
        display: block
    }

    .map-interactive-print label {
        display: block;
        color: #999
    }

    .map-interactive-print select {
        padding: 0 30px 0 10px;
        width: 150px;
        border: 1px solid #ddd;
        font-size: 16px;
        margin-left: auto;
        line-height: 40px;
        background: 95% center / 14px auto no-repeat #fff url("data:image/svg+xml,%3Csvg fill='%23bbb' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z'/%3E%3C/svg%3E");
        background-position: calc(100% - 10px) center;
        outline: none;
        box-shadow: 0 2px 3px #ccc;
        border-radius: 3px
    }

    .smartphone .map-interactive-print select {
        width: 100%;
        display: block
    }

    .map-interactive-print select::-ms-expand {
        display: none
    }

    .map-interactive-print select {
        -webkit-appearance: none;
        appearance: none
    }

    .map-interactive-print button {
        padding: 0 20px;
        line-height: 46px;
        font-size: 18px;
        margin: 10px 20px 0 0;
        cursor: pointer;
        border: 1px solid #444;
        background-color: #444;
        color: #fff;
        display: inline-block;
        border-radius: 5px;
        outline: none;
        box-shadow: 0 2px 3px #ccc;
        min-width: 90px
    }

    .map-interactive-print button.secondary {
        background-color: #fff0;
        color: #444;
        border-color: #d0d0d0
    }

    .map-interactive-print .print-buttons {
        display: block;
        width: 100%;
        clear: both;
        padding: 20px 0 0 0
    }
}

@media all {
    .chorojson-legend-gradient {
        height: 30px;
        margin: 5px 0 5px;
        min-width: 200px
    }

    .chorojson-tooltip {
        padding: 0
    }

    .chorojson-tooltip div {
        padding: 10px
    }

    .chorojson-tooltip span,.chorojson-tooltip b {
        display: block
    }

    .chorojson-tooltip-value {
        font-size: 24px;
        font-weight: 700;
        line-height: 1
    }

    .chorojson-legend-container ul span {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        display: inline-block;
        vertical-align: middle
    }

    .chorojson-legend-container,.bubble-legend-container {
        padding: 5px 15px;
        font: 14px/16px Arial,Helvetica,sans-serif;
        background: #fff;
        background: rgb(255 255 255 / .8);
        box-shadow: 0 0 15px rgb(0 0 0 / .2);
        border-radius: 5px;
        color: #555;
        margin: 10px
    }

    .chorojson-legend-container ul,.bubble-legend-container ul {
        padding: 0;
        margin: 0;
        display: inline-block;
        list-style-type: none
    }

    .chorojson-legend-container ul {
        display: block;
        clear: both
    }

    .bubble-legend-container ul {
        padding: 0 10px 10px 0;
        float: left
    }

    .bubble-legend-container li {
        line-height: 18px;
        padding: 3px;
        margin: 0;
        font-size: 12px;
        white-space: nowrap
    }

    .bubble-legend-container li b {
        color: #ddd;
        font-size: 14px;
        line-height: 14px
    }

    .bubble-legend-container li i {
        color: #444;
        font-style: normal
    }

    .bubble-legend-container span {
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle
    }

    .chorojson-legend-container h3,.bubble-legend-container h3 {
        margin: 10px 0
    }

    .bubble-legend-container p {
        clear: both;
        display: block
    }

    .leaflet-right .bubble-legend-container {
        margin-right: 60px
    }
}

@media all {
    .wt-mask-touch,.wt-mask-mouse {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgb(0 0 0 / .35);
        z-index: 10;
        padding: 0 70px 0 20px;
        text-align: center;
        color: #fff;
        font-family: Inter,Arial,sans-serif;
        display: none;
        vertical-align: middle
    }

    .wt-map-show-panel .wt-mask-touch,.wt-map-show-panel .wt-mask-mouse {
        right: 450px
    }

    .wt-mask-touch {
        pointer-events: none
    }

    .wt-mask-touch p,.wt-mask-mouse p {
        position: relative;
        top: 50%;
        transform: translate(0,-100%);
        text-shadow: 1px 1px 2px #444;
        line-height: 1.4;
        font-size: 26px
    }
}

@media all {
    .wtmap .wt-map-form .wt-form-group,.wtmap .wt-map-form .wt-form-fields {
        border: 1px solid #ccc;
        padding: 15px;
        margin: 15px;
        border-radius: 10px
    }

    .wtmap .wt-map-form .wt-form-group .wt-form-fields {
        padding: 10px 0;
        margin: 0;
        border: 0
    }

    .wtmap .wt-map-form .wt-form-group .wt-form-fields label {
        line-height: 1.4
    }

    .wtmap .wt-map-form .wt-form-group .wt-form-title {
        border-bottom: 1px dashed #ccc;
        padding-top: 5px
    }
}

@media all {
    .wt-map-panels .wt-map-menu .wt-cancel-location,.wt-map-panels .wt-map-menu .wt-cancel-routing {
        padding: 0 5px;
        text-align: right;
        margin-bottom: 10px
    }

    .wt-map-panels .wt-map-menu .wt-cancel-location button,.wt-map-panels .wt-map-menu .wt-cancel-routing button {
        cursor: pointer;
        font-weight: 400;
        padding: 10px;
        border-radius: 5px;
        background-color: #f3f3f3;
        border: 1px solid #ccc;
        display: inline-block;
        font-size: 16px
    }

    .wt-map-panels .wt-map-menu .wt-cancel-location button:focus-visible,.wt-map-panels .wt-map-menu .wt-cancel-location button:hover,.wt-map-panels .wt-map-menu .wt-cancel-routing button:focus-visible,.wt-map-panels .wt-map-menu .wt-cancel-routing button:hover {
        outline: none;
        border-color: #444;
        color: #fff;
        background-color: #444
    }
}

@media all {
    .wt-marker-shadow,.wt-marker-shadow-2 {
        background-image: url(https://webtools.europa.eu/services/map/3.0/images/marker-shadow2.png);
        background-repeat: no-repeat;
        background-position: 31% bottom;
        background-size: 110% auto
    }

    .wt-marker-shadow-2 {
        background-size: 90% auto
    }
}

@media all {
    .wt-map .wt-marker[tabindex]:focus-visible {
        outline: 4px solid #ffd617
    }

    .wt-map svg path[tabindex]:focus-visible {
        outline: 6px solid #444
    }

    .wt-map svg use {
        outline: 3px solid #fff
    }
}

@media all {
    .wt-map {
        position: relative
    }

    .wt-map--skip {
        background: #444;
        color: #fff;
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        z-index: 40;
        padding: 0;
        text-align: center;
        font-size: 24px;
        text-decoration: none;
        overflow: hidden;
        height: 0;
        outline: none
    }

    .wt-map--skip:focus-visible,.wt-map--skip-target:focus-visible {
        padding: 10px;
        height: auto
    }
}
