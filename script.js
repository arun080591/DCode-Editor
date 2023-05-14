// make run function for output
function run()
{
    // first access all the textarea and output area
    const htmlCode = document.getElementById("html").value;
    const cssCode = document.getElementById("css").value;
    const jsCode = document.getElementById("js").value;
    const output = document.getElementById("output");

    // now display all data in output iframe which created a another html file
    output.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
    output.contentWindow.eval(jsCode);
}