import "./node_modules/jquery/dist/jquery.js";

export default function createRBSForm() {


    let form = document.createElement("form");

    $(form).attr({
        id: "form",
        action: "",
        method: "GET"
    }) 

    let strnam = document.createElement("input");
    $(strnam).attr({
        type: "text",
        id: "strnam",
        placeholder: "Straße",
    }); 
    let hnr = document.createElement("input");
    $(hnr).attr({
        type: "text",
        id: "hnr",
        placeholder : "H-Nr.",
    });
    let plz = document.createElement("input");
    $(plz).attr({
        type: "text",
        id: "plz",
        placeholder: "PLZ"

    });
    let submitButton = document.createElement("input");
    $(submitButton).attr({
        type: "submit",
        id: "submitButton",
        value: "submit"
    })

    $(strnam).appendTo(form);
    $(hnr).appendTo(form);
    $(plz).appendTo(form);
    $(submitButton).appendTo(form);
    return form;
}
