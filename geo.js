
import "./node_modules/jquery/dist/jquery.js";

export default function getRBSData(street, num, postalcode) {
    const options = {
        base: "https://gdi.berlin.de/services/wfs/adressen_rbs?request=",
        fType: "getfeature",
        service: "wfs",
        version: "2.0",
        filter: "",
        output: "application/json",
    }
    filter = "&typename=adressen_rbs&cqlfilter=strnam='"+street+"' AND hausnr='"+num+"' AND postleit='"+postalcode+"'";


        return $.get({
            url: options.base
            +options.fType+"&service="
            +options.service+"&version="
            +options.version
            +options.filter+"&outputformat="
            +options.output,
        }).fail(error => {
            console.log(error);
        });
}