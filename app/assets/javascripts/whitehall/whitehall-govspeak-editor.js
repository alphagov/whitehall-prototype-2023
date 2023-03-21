
// $( document ).ready(function() {
//     console.log( "document loaded" );
// });

(function ($, undefined) {
    $.fn.getCursorPosition = function() {
        var el = $(this).get(0);
        var pos = 0;
        if('selectionStart' in el) {
            pos = el.selectionStart;
        } else if('selection' in document) {
            el.focus();
            var Sel = document.selection.createRange();
            var SelLength = document.selection.createRange().text.length;
            Sel.moveStart('character', -el.value.length);
            pos = Sel.text.length - SelLength;
        }
        return pos;
    }

    $.fn.selectRange = function(start, end) {
        if(end === undefined) {
            end = start;
        }
        return this.each(function() {
            if('selectionStart' in this) {
                this.selectionStart = start;
                this.selectionEnd = end;
            } else if(this.setSelectionRange) {
                this.setSelectionRange(start, end);
            } else if(this.createTextRange) {
                var range = this.createTextRange();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', start);
                range.select();
            }
        });
    };
    
    $.fn.setCursorPosition = function(pos) {
        if (this.setSelectionRange) {
            this.setSelectionRange(pos, pos);
        } else if (this.createTextRange) {
            var range = this.createTextRange();
            range.collapse(true);

            if (pos < 0) {
                pos = $(this).val().length + pos;
            }

            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }

        // var el = $(this).get(0);
        // var pos = 0;
        // if('selectionStart' in el) {
        //     pos = el.selectionStart;
        // } else if('selection' in document) {
        //     el.focus();
        //     var Sel = document.selection.createRange();
        //     var SelLength = document.selection.createRange().text.length;
        //     Sel.moveStart('character', -el.value.length);
        //     pos = Sel.text.length - SelLength;
            
        // }
        // Sel.moveEnd('character', pos);
        // Sel.moveStart('character', pos);
        // Sel.select();
        // //return pos;
    };
})(jQuery);





// function insertAtCursor(myField, myValue) {
    //IE support
    // if (document.selection) {
    //     myField.focus();
    //     sel = document.selection.createRange();
    //     sel.text = myValue;
    //     // alert(1);
    // }
    // //MOZILLA and others
    // else if (myField.selectionStart || myField.selectionStart == '0') {
    //     var startPos = myField.selectionStart;
    //     var endPos = myField.selectionEnd;
    //     myField.value = myField.value.substring(0, startPos)
    //         + myValue
    //         + myField.value.substring(endPos, myField.value.length);

    //         // alert(2);
    // } else {
    //     myField.value += myValue;
    //     // alert(3);
    // }

        //alert(myValue);
    // var startPos = myField.selectionStart;
    //     var endPos = myField.selectionEnd;
    //     myField.value = myField.value.substring(0, startPos)
    //         + myValue
    //         + myField.value.substring(endPos, myField.value.length);
// }

$( window ).on( "load", function() {
    console.log( "Whitehall Govspeak Editor: Window loaded" );
    $(".whitehall-govspeak-editor-insert ul li a")
        .attr("href", "#")
        .removeAttr("target")
        .removeAttr("href")
        .click(function() {
            // TODO: Create a function for this instead of case switch
            console.log( "Whitehall Govspeak Editor: Click added to insert menu" );
            console.log( "Whitehall Govspeak Editor: Clicked on " + $(this).attr("data-module") );
            switch($(this).attr("data-module")) {
                case "attachment-modal":
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module") );
                    $(".whitehall-govspeak-editor-insert-modal-attachment").addClass("gem-c-modal-dialogue-show");
                    //css("display", "block");
                    break;
                case "contact-modal" :
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module") );
                    $(".whitehall-govspeak-editor-insert-modal-contact").addClass("gem-c-modal-dialogue-show");
                    break;
                case "image-modal":
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module"));
                    $(".whitehall-govspeak-editor-insert-modal-image").addClass("gem-c-modal-dialogue-show");
                    break;
                case "video-modal":
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module"));
                    $(".whitehall-govspeak-editor-insert-modal-video").addClass("gem-c-modal-dialogue-show");
                    break;
                case "table-modal":
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module"));
                    $(".whitehall-govspeak-editor-insert-modal-table").addClass("gem-c-modal-dialogue-show");
                    break;
                case "call-to-action-modal":
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module"));
                    $(".whitehall-govspeak-editor-insert-modal-call-to-action").addClass("gem-c-modal-dialogue-show");
                    break;
                case "reusable-content-modal":
                    console.log( "Whitehall Govspeak Editor: Modal " + $(this).attr("data-module"));
                    $(".whitehall-govspeak-editor-insert-modal-reusable-content").addClass("gem-c-modal-dialogue-show");
                    break;
                default:
                    console.log( "Whitehall Govspeak Editor: Click failed");
            }
    //   alert( "Handler for .click() called." );
    });

    $(".gem-c-modal-dialogue .gem-c-modal-dialogue__close-button").click(function() {
        console.log( "Whitehall Govspeak Editor: Close modal");
        $(".gem-c-modal-dialogue").removeClass("gem-c-modal-dialogue-show");
        $(".app-c-toolbar-dropdown").removeAttr('open');
    });

//     $CTA
// You must do this
// $CTA

/// $CTA \n

$(".gem-c-modal-dialogue .whitehall-editor-modal-insert-link-call-to-action").click(function() {
    console.log( "Whitehall Govspeak Editor: Insert markdown");
    var editorTextarea = $("#body-field");
    var currentContent = editorTextarea.val();
    var markdownString = "$CTA \n" + $('#call-to-action-text').val() + "\n $CTA";
    var currentPos = editorTextarea.getCursorPosition();
    var endPos = currentContent.length;

    var position = window.getSelection().getRangeAt(0).startOffset;

    console.log(endPos);
    if(endPos === undefined) {
        editorTextarea.focus();
        endPos = currentContent.length;
    }

    
    
    var tempFirstPart = currentContent.substring(0, currentPos);
    var tempLastPart = currentContent.substring(currentPos, endPos);
    console.log(currentPos + " - " + endPos +  " - " + markdownString);
    var replacedContent = tempFirstPart
                            + markdownString
                            + tempLastPart;

    editorTextarea.val(replacedContent);
    console.log(currentPos);

    $(".gem-c-modal-dialogue").removeClass("gem-c-modal-dialogue-show");
    $(".app-c-toolbar-dropdown").removeAttr('open');

    endPos = endPos + markdownString.length;
    console.log(currentPos + markdownString.length);
});


    $(".gem-c-modal-dialogue .whitehall-editor-modal-insert-link").click(function() {
        console.log( "Whitehall Govspeak Editor: Insert markdown");
        var editorTextarea = $("#body-field");
        var currentContent = editorTextarea.val();
        var markdownString = $(this).attr('value');
        var currentPos = editorTextarea.getCursorPosition();
        // editorTextarea.focus();
        var endPos = currentContent.length;

        var position = window.getSelection().getRangeAt(0).startOffset;

        console.log(endPos);
        if(endPos === undefined) {
            editorTextarea.focus();
            // editorTextarea.setCursorPosition(0);
            

            endPos = currentContent.length;
        }
        // editorTextarea.focus();

        
        //  else {
        //     editorTextarea.focus();
        //     editorTextarea.setCursorPosition(0);
        //     endPos = editorTextarea.text().length;
        // }
        
        // alert($(this).attr('value'));
        //insertAtCursor($("#body-field"), $(this).attr('value'));
        
        var tempFirstPart = currentContent.substring(0, currentPos);
        // alert(tempFirstPart);
        var tempLastPart = currentContent.substring(currentPos, endPos);
        // alert(tempLastPart);
        
        // alert(myField.text());
        console.log(currentPos + " - " + endPos +  " - " + markdownString);
        var replacedContent = tempFirstPart
                                + markdownString
                                + tempLastPart;

        editorTextarea.val(replacedContent);
        
        console.log(currentPos);


        $(".gem-c-modal-dialogue").removeClass("gem-c-modal-dialogue-show");
        $(".app-c-toolbar-dropdown").removeAttr('open');

        // editorTextarea.focus();
        endPos = endPos + markdownString.length;
        console.log(currentPos + markdownString.length);
        // currentPos + markdownString.length
        // editorTextarea.setCursorPosition(currentPos + markdownString.length);
        // , .app-c-toolbar-dropdown--end
    });

    // WHITEHALL EXTRA TOOLS
    // $(".whitehall-editor-modal-insert-link").click(function() {
    //     // alert($(this).attr('value'));
        
    // });
    // window.customElements.get("md-header-3") || ((window.MarkdownHeading3ButtonElement = S), window.customElements.define("md-header-3", S));
    // var x = (function () {
    //     function e() {
    //         o(this, e);
    //         var t = i(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
    //         return E.set(t, { prefix: "#### ", surroundWithNewlines: !0 }), t;
    //     }
    //     return a(e, n), e;
    // })();
    // END WHITEHALL EXTRA TOOLS
    
});



//  data-module="inline-attachment-modal" data-modal-action="open" 
// data-module="contact-embed-modal" 
// data-module="inline-image-modal"
// data-module="video-embed-modal"