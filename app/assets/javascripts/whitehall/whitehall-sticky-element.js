(function($) {
    $.stickyElement = {
        stickyElement: $("[data-sticky-element]"),
        wrapper: $("[data-sticky-element]").parent(),
        hasResized: !0,
        hasScrolled: !0,
        interval: 50,
        windowVerticalPosition: 1,
        startPosition: 0,
        stopPosition: 0,
        getWindowDimensions: function() {
            return {
                height: window.innerHeight,
                width: window.innerWidth
            }
        },
        getWindowPositions: function() {
            return {
                scrollTop: window.scrollY
            }
        },
        onResize: function() {
            this.hasResized = !0;
        },
        onScroll: function() {
            this.hasScrolled = !0;
        },
        checkResize: function() {
            if (this.hasResized) {
                this.hasResized = !1, this.hasScrolled = !0;
                var t = this.getWindowDimensions(),
                    e = (this.wrapper.offsetHeight) || (this.wrapper.outerHeight());
                    // - $(window).height()
                this.startPosition = (this.wrapper.offset().top - ($(window).height()/2)),
                this.stopPosition = this.wrapper.offset().top + e - t.height
                // console.log((this.wrapper.offsetHeight));
                // console.log((this.wrapper.outerHeight()));
            }
            
        },
        checkScroll: function() {
            this.hasScrolled &&
                (this.hasScrolled = !1,
                this.windowVerticalPosition = this.getWindowPositions().scrollTop,
                this.updateVisibility(),
                this.updatePosition());

            if (this.hasScrolled) {
                this.hasResized = !1, this.hasScrolled = !0;
                var t = this.getWindowDimensions(),
                    e = (this.wrapper.offsetHeight) || (this.wrapper.outerHeight());
                    // - $(window).height()
                this.startPosition = (this.wrapper.offset().top - ($(window).height()/2)),
                this.stopPosition = this.wrapper.offset().top + e - t.height
                console.log((this.wrapper.offsetHeight));
                console.log((this.wrapper.outerHeight()));
            }

                // console.log((this.wrapper.offset().top - ($(window).height()/2)));
                // console.log(this.wrapper.offset().top + e - t.height);
                // console.log((this.wrapper.offsetHeight));
                // console.log((this.wrapper.outerHeight()));
                // console.log(($('#document-summary-panel').offsetHeight));
                // console.log(($('#document-summary-panel').outerHeight()));
        },
        updateVisibility: function() {
            this.startPosition < this.windowVerticalPosition ? this.show() : this.hide()
        },
        updatePosition: function() {
            this.stopPosition < this.windowVerticalPosition ? this.stickToParent() : this.stickToWindow()
        },
        stickToWindow: function() {
            this.stickyElement.addClass("sticky-element--stuck-to-window")
        },
        stickToParent: function() {
            this.stickyElement.removeClass("sticky-element--stuck-to-window")
        },
        show: function() {
            this.stickyElement.removeClass("sticky-element--hidden")
        },
        hide: function() {
            this.stickyElement.addClass("sticky-element--hidden")
        },
        init: function() {
            this.stickyElement && 
            (window.onresize = this.onResize.bind(this), 
            window.onscroll = this.onScroll.bind(this), 
            setInterval(this.checkResize.bind(this), this.interval), 
            setInterval(this.checkScroll.bind(this), this.interval), 
            this.checkResize(),
            this.checkScroll(), 
            this.stickyElement.addClass("sticky-element--enabled"))
        }
    };

    // $.fn.stickyElement = function() {
    //     $.stickyElement.init(this);
    // };
})(jQuery);
// $(document).ready(function() {  
//     $.stickyElement.wrapper = $('#contents-tasks');
//     $.stickyElement.wrapper = $('.sections');
//     $.stickyElement.init();
// });


    




// function e(t) {
//     this.wrapper = t, this.stickyElement = this.wrapper.querySelector("[data-sticky-element]"), this.hasResized = !0, this.hasScrolled = !0, this.interval = 50, this.windowVerticalPosition = 1, this.startPosition = 0, this.stopPosition = 0
// }
// e.prototype.init = function() {
//     this.stickyElement && (window.onresize = this.onResize.bind(this), window.onscroll = this.onScroll.bind(this), setInterval(this.checkResize.bind(this), this.interval), setInterval(this.checkScroll.bind(this), this.interval), this.checkResize(), this.checkScroll(), this.stickyElement.classList.add("sticky-element--enabled"))
// }, e.prototype.getWindowDimensions = function() {
//     return {
//         height: window.innerHeight,
//         width: window.innerWidth
//     }
// }, e.prototype.getWindowPositions = function() {
//     return {
//         scrollTop: window.scrollY
//     }
// }, e.prototype.onResize = function() {
//     this.hasResized = !0
// }, e.prototype.onScroll = function() {
//     this.hasScrolled = !0
// }, e.prototype.checkResize = function() {
//     if (this.hasResized) {
//         this.hasResized = !1, this.hasScrolled = !0;
//         var t = this.getWindowDimensions(),
//             e = this.wrapper.offsetHeight || parseFloat(this.wrapper.style.height.replace("px", ""));
//         this.startPosition = this.wrapper.offsetTop, this.stopPosition = this.wrapper.offsetTop + e - t.height
//     }
// }, e.prototype.checkScroll = function() {
//     this.hasScrolled && (this.hasScrolled = !1, this.windowVerticalPosition = this.getWindowPositions().scrollTop, this.updateVisibility(), this.updatePosition())
// }, e.prototype.updateVisibility = function() {
//     this.startPosition < this.windowVerticalPosition ? this.show() : this.hide()
// }, e.prototype.updatePosition = function() {
//     this.stopPosition < this.windowVerticalPosition ? this.stickToParent() : this.stickToWindow()
// }, e.prototype.stickToWindow = function() {
//     this.stickyElement.classList.add("sticky-element--stuck-to-window")
// }, e.prototype.stickToParent = function() {
//     this.stickyElement.classList.remove("sticky-element--stuck-to-window")
// }, e.prototype.show = function() {
//     this.stickyElement.classList.remove("sticky-element--hidden")
// }, e.prototype.hide = function() {
//     this.stickyElement.classList.add("sticky-element--hidden")
// }, t.StickyElementContainer = e
