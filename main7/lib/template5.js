module.exports = { //하나인 경우, 바로 module.exports 가능!
    HTML: function(name, list, body){
        return `
    <!DOCTYPE html>
            <html lang="ko">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>${name}</title>
            </head>
            <body>
                <h1><a href='/'>선린인터넷고등학교</a></h1>
                <!--메뉴-->
                ${list}
                <a href='/create'>create</a>
                ${body}
            
            </body>
            </html>
    `
    }, list:function(files){
        let list = '<ol>'
        for(i=0;i<files.length;i++){
            list = list + `<li><a href="?name=${files[i]}">${files[i]}</a></li>`
            
        }
        list = list + '</ol>'
        return list
    }, create:function(){
        return `
        <form action='/create_process' method="POST"> 
        <p><input type ='text' name='title' placeholder="title"></p>
        <p><textarea name='description' placeholder="description"></textarea></p>
        <p><button type='submit'>send</button></p>
        </form>
        `   // <!--메서드를 입력X : get방식--> <!--각 용도에 맞는 메서드 방식이 있음!(쿼리 스트링) 이 경우, post!-->
    } //인자X : 굳이 메서드로 할 필요는 X
}
