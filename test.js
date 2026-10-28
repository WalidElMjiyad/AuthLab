function hello()
{
}

hello.a = 22

hello.print = function(){
    console.log(this.a++)
}

hello.print()
hello.print()
hello.print()
hello.print()