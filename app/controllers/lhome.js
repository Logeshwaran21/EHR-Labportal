import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        show: function(){
            this.transitionToRoute('lprofile');
        },
        show1: function(){
            this.transitionToRoute('bloodtest');
        }
    }

    
});
    
$(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $(".side-nav .collapse").on("hide.bs.collapse", function() {                   
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-right").addClass("fa-angle-down");
    });
    $('.side-nav .collapse').on("show.bs.collapse", function() {                        
        $(this).prev().find(".fa").eq(1).removeClass("fa-angle-down").addClass("fa-angle-right");        
    });
})
