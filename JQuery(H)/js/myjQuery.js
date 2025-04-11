$(document).ready(function () {
    //All of your JQuery code will paste here
    // $('Selector').action() is the syntax of JQuery
    // # total 3 types of selectors in JQuery

    //1. Element Selector, below is the example
        // $('p').click();

    //2. Class Selector , below iis example
        // $('.second').click();

    //3. Id Selector , below is example
        // $('#third').click();

    //4.Other Elements
        // $('*').click();                             //Select all Elements
        // $('p:first').click();                          //First P will clicked
    




    // Events in jQuery
    //1. Click Event
        // $('p').click(function () {
        //     console.log('You clicked on P');        //do this while click on p  
        //     // $('p').hide();                       //to hide all the P
        //     // $(this).hide();                      // hide only who's clicked 
        // });
    //2. Double Click Event
        // $('p').dblclick(function () {
        //     console.log('You double clicked on P');
        // });
    //3. MouseEntered Event
        // $('p').mouseenter(function () {
        //     console.log('You mouseEntered :');      //Curser goes on P then it shows
        // });
    //4. Hover Event
        // $('p').hover(function () {
        //     console.log('You Hovered on P');        //When cursor hovers on P
        // });





    //Demoing the on method
        // $('p').on({
        //     click: function()
        //     {
        //     console.log("thanks for clicking");
        //     },
        //     mouseleave: function()
        //     {
        //         console.log("mouse Leave");
        //     }
        // });




        
    //use of Show and Hide
        // $('#wiki').show();                   //will show the text, use hide to hide the text
        // $('#wiki').hide(1000);               //value inside hide is timer (mili sec) of hiding text
        // $('#wiki').hide(1000,function(){
        //     console.log("Hidden");
        // });                                  //Animation (Hide then Show)
        // $('#wiki').show(1000,function(){
        //     console.log("Show");
        // });

    //use of toggle (if content is hidden then it will show ,for show it will hide)
        // $('#toggle').click(function(){
        //     $('#wiki').toggle(1000);            //Animation by button (Hide,Show)
        // });
        // $('#fadeOut').click(function(){
        //     $('#wiki').fadeOut(1000);           //Animation by button (Hide by Fading out)
        // });
        // $('#fadeIn').click(function(){
        //     $('#wiki').fadeIn(1000);            //Animation by button (Show By fading after FadeOut)
        // });
        // $('#fadeToggle').click(function(){
        //     $('#wiki').fadeToggle(1000);        //Animation by button (Show or Hide on button click)
        // });
        // $('#fadeTo').click(function(){
        //     $('#wiki').fadeTo("slow",0.33);     //Animation by button (Opicity changed(0.33) slowly)
        // });





    // Slide Method - Speed and callback two parameters , one is optional
        // $('#slideToggle').click(function(){
        //     $('#wiki').slideToggle(1000);           //Animate by Button (slideUp(),slideDown(),slideToggle())
        // });
    // Animate function in jQuery
        // $('#wiki').animate({
        //     opacity: 0.3,
        //     height:"150px",
        //     width: "350px"
        // },"slow")
    // Queue Form,ate running 
        // $('#wiki').animate({opacity:0.3},3000);
        // $('#wiki').animate({opacity:0.9},3000);
        // $('#wiki').animate({width:"300px"},1000);        //$("#wiki").stop() is usde to stop the animation at current




    // .text() is used to display the text content
    // .html() is used to display html content (text with tags)
        // $("#wiki").text();
        // $("body").html();
    

    // to update in textarea field we use .Val() , it returns the value of textarea
        // $("#ta").val();
        // $("#ta").val("Updated value in TextArea");
    // .empty() is used to empty the content of tag
    // .remove() is used to remove the full tags
    // addClass() is used to add class on a tag
        // $("div").empty();
        // $("div").remove();
        // $("div").addClass('NewClass');



    
    // CSS in jQuery ; to apply css in it we use .css()
        // $("div").css('background-color','red');             //change color to Red
        // $("div").css('background-color');                   //return value of RGB 
    
    
    
    
    
    
    
    
    });