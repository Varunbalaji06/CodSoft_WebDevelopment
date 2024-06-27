let outputScreen = document.getElementById("output-screen")
console.log(outputScreen)

function display(num)
{
    outputScreen.value += num;
}

function Calc()
{
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert('Invalid');
    }
}

function ClearScreen()
{
    outputScreen.value = "";

}

function del()
{
    outputScreen.value = outputScreen.value.slice(0,-1);
}