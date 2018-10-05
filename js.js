var showMoreCard=false
var showContent=false

function showMore() {
    if(showMoreCard==false){
        document.getElementById("morecard").style.display="block";
        document.getElementById("contractme").style.display="none";
        document.getElementById("me").style.display="none";
        document.getElementById("about").style.display="none";
        document.getElementById("content").setAttribute('style','margin-right: auto;')
        document.getElementById("card").setAttribute('style','')
        document.getElementById("moreimg").setAttribute('style','transform: rotateY(180deg);')
        showMoreCard=true;
    }
    else {
        if (showContent==true){
            document.getElementById("morecard").style.display="block";
            document.getElementById("contractme").style.display="none";
            document.getElementById("me").style.display="none";
            document.getElementById("about").style.display="none";
            document.getElementById("card").setAttribute('style','')
            document.getElementById("content").setAttribute('style','margin-right: auto;')
            showContent=false;
            showMoreCard=true;
        }
        else {
            document.getElementById("morecard").style.display="none";
            document.getElementById("contractme").style.display="none";
            document.getElementById("me").style.display="none";
            document.getElementById("about").style.display="none";
            document.getElementById("content").setAttribute('style','margin-right: 40px;')
            document.getElementById("moreimg").setAttribute('style','transform: rotateY(0deg);')
            showMoreCard=false;
            showMoreCard=false;
        }

    }
}


function about() {
    document.getElementById("morecard").style.display="none";
    document.getElementById("contractme").style.display="none";
    document.getElementById("me").style.display="none";
    document.getElementById("about").style.display="block";
    document.getElementById("card").setAttribute('style','background:#ff6666')
    showContent=true;
}


function contract() {
    document.getElementById("morecard").style.display="none";
    document.getElementById("contractme").style.display="block";
    document.getElementById("me").style.display="none";
    document.getElementById("about").style.display="none";
    document.getElementById("card").setAttribute('style','background: rgb(255,198,53)')
    showContent=true;
}


function myself() {
    document.getElementById("morecard").style.display="none";
    document.getElementById("contractme").style.display="none";
    document.getElementById("me").style.display="block";
    document.getElementById("about").style.display="none";
    document.getElementById("card").setAttribute('style','background:#4cd4fb')
    showContent=true;
}