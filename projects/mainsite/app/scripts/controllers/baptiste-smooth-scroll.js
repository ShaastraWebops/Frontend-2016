/* ----
SMOOTH FUNCTION
---- */
var Smooth = function(opt) {
	
	if (!(this instanceof Smooth))
		return new Smooth(opt)
	
	this.createBound();
	
	opt = opt || {};
  
	this.pos = {
		scrollTop: 0,
		targetY: 0,
    bounding: null
	};

	this.ui = {
		listener: document.body,
		section: opt.section,
		scroll: utils.createEl({selector: 'div', styles: 'scroll-view'})
	};

	this.ease = opt.ease || 0.1;
	this.rAF = undefined;
	
};

Smooth.prototype.constructor = Smooth;

Smooth.prototype.createBound = function(){
	
	['debounce', 'resize'].forEach(function(fn) {
		this[fn] = this[fn].bind(this);
	}, this);
    
};

Smooth.prototype.init = function(){
	
	var self = this;
  
	this.addScroll();
  
	this.addEvents();
  
  this.resize();

	this.run();

};

Smooth.prototype.debounce = function(){
  
  // store the body scrollTop value on a window.onscroll event
	this.pos.scrollTop = this.ui.listener.scrollTop;
  
};

Smooth.prototype.run = function(){
  
  // retrieve a value based on the scrolltop and latest targetY.
  // multiply with a value between 0 and 1
  // 0.1 is the slowest [and smoothest], try 0.9
	this.pos.targetY += (this.pos.scrollTop - this.pos.targetY) * this.ease;
	
  var transform = 'matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,-' + this.pos.targetY + ',0,1)';
  
  // use a module instead
  // something that will detect prefixes for the transform
  this.ui.section.style["transform"] = transform;
  this.ui.section.style["webkitTransform"] = transform;
  this.ui.section.style["mozTransform"] = transform;
  this.ui.section.style["msTransform"] = transform;
  
	this.rAF = requestAnimationFrame(this.run.bind(this));
  
};

Smooth.prototype.addScroll = function(){
	
	this.ui.listener.appendChild(this.ui.scroll);

};

Smooth.prototype.removeScroll = function(){
	
	this.ui.listener.removeChild(this.ui.scroll);

};

Smooth.prototype.addEvents = function(){

	this.ui.listener.onscroll = this.debounce;
  
  window.onresize = this.resize;

};

Smooth.prototype.removeEvents = function(){

	var self = this;

	this.ui.listener.onscroll = null;
  
  window.onresize = null;

};

Smooth.prototype.resize = function(){

	this.pos.bounding = this.ui.section.getBoundingClientRect();
  
  this.ui.scroll.style["height"] = this.pos.bounding.height + this.pos.bounding.top;
	
};

Smooth.prototype.destroy = function(){

	cancelAnimationFrame(this.rAF);
	
	this.rAF = undefined;
  
	this.removeEvents();

	this.removeScroll();

};

/* ----
UTILS FUNCS
---- */
var utils = {
  
  createEl: function(opt) {

		opt = opt || {};
		
		var el = document.createElement(opt.selector);
		
		"a" == opt.selector && opt.link && (el.href = opt.link);

		opt.id && (el.id = opt.id);
		opt.styles && (el.className = opt.styles);

		opt.html && (el.innerHTML = opt.html);

		opt.children && (el.appendChild(opt.children));

		return el;
	
	}
  
}

/* ----
INIT SMOOTH
---- */
var el = document.querySelector('#main-container');

var scroll = new Smooth({
  section: el,
  ease: 0.1
});

console.log(scroll);

scroll.init();