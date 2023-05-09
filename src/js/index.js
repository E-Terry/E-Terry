/*? no js js needed from me */
hackycode('hackerTitle')

hackycode('hackerSubtitle')
function hackycode(id) {
    const element = document.getElementById(id);
    const chars = [...element.innerText];
    var i = -1;
    var run = setInterval(split, 50)
    
    
    function split() {
        var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var output = "";
        console.log(chars);
        console.log(output)
        for(var j = 0; j < chars.length; j++) {
            let c = chars[j];
            if(j>=i) {
                c = letters[Math.round(Math.random()*25)]
            }
            output +=  c;
        }
        console.log(output)
        element.innerHTML = output;
        i += 1/3;
        if(i>chars.length+1) {
            clearInterval(run)
        }
    }
}
