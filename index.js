var a = null;
var b = null;
var c = null;

$("#mood").hide();
$("#choice").hide();
$("#startarea").hide();
$("#music").hide();

function go(x, text) {
    a = x;
    //alert(text);
    $("#status_one").append($("#status_one").text(text));
    $("#mood").show(2000);
}

function goo(x, text) {
    b = x;
    $("#status_two").append($("#status_two").text(text));
    $("#choice").show(2000);
}

function gooo(x, text) {
    c = x;
    $("#status_three").append($("#status_three").text(text));
    $("#startarea").show(2000);
}

function final() {

    $sum = a * 100 + b * 10 + c;
    //alert($sum);
    $src = '';
    switch ($sum) {
        case 111:
            $src = 'https://open.spotify.com/embed/track/1NHZfGzz1bgy03FDQZq0aw'
            break;
        case 112:
            $src = 'https://open.spotify.com/embed/track/4QK2UTlsQDP5EZPRK9t43J'
            break;
        case 121:
            $src = 'https://open.spotify.com/embed/track/3SH5hjBZnY4DsIy40lvlzP'
            break;
        case 122:
            $src = 'https://open.spotify.com/embed/track/0UvCh63URrLFcPkKt99hHd'
            break;
        case 131:
            $src = 'https://open.spotify.com/embed/track/5LyH3P8WFC6mBIJGX4s0Er'
            break;
        case 132:
            $src = 'https://open.spotify.com/embed/track/5imShWWzwqfAJ9gXFpGAQh'
            break;
        case 211:
            $src = 'https://open.spotify.com/embed/track/12vmfcNSbH7BMC293TaaRo'
            break;
        case 212:
            $src = 'https://open.spotify.com/embed/track/0gvyynDlHO6I01K0aWSScT'
            break;
        case 221:
            $src = 'https://open.spotify.com/embed/track/01TY23ADPk3T6iz9iLOmpM'
            break;
        case 222:
            $src = 'https://open.spotify.com/embed/track/38TLG5pwABn51WBkfeCErZ'
            break;
        case 231:
            $src = 'https://open.spotify.com/embed/track/7I0cSk6rDG4HeNMUuPYqEs'
            break;
        case 232:
            $src = 'https://open.spotify.com/embed/track/2vTyXh01MY29nCMEPDMauj'
            break;
        case 311:
            $src = 'https://open.spotify.com/embed/track/5Kziiw7t5ExgGk1lHn2KOM'
            break;
        case 312:
            $src = 'https://open.spotify.com/embed/track/6ibvz4ildWhHfq6uOlV1tR'
            break;
        case 321:
            $src = 'https://open.spotify.com/embed/track/4hKsXZhtMC6wGjMfynSFLR'
            break;
        case 322:
            $src = 'https://open.spotify.com/embed/track/5rYKveDQqMLJltwsJmAcaN'
            break;
        case 331:
            $src = 'https://open.spotify.com/embed/track/5u9myQ7NH4SfCL03T4bGSC'
            break;
        case 332:
            $src = 'https://open.spotify.com/embed/track/4z2XPrpHz1raJibarWFY7Z'
            break;

        default:
            break;

    }




    $("#music").empty();
    $iframe = $("<iframe>").attr("src", $src).attr("width", "500").attr("height", "380").attr("frameborder", "0").attr("allowtransparency", "true").attr("allow", "encrypted-media")
    $("#music").append($iframe);


    $("#music").show(2000);
}