import "./node_modules/jquery/dist/jquery.js";
import getRBSData from "./geo.js";
import createRBSForm from "./form.js";


$(function () {
   console.log("ready!");

    let form = createRBSForm();

    $(form).appendTo("#container");

    $(form).on("submit", function(e) {
        e.preventDefault();
        getRBSData().done(function (data) {
            console.log(data);
        });

    });

});