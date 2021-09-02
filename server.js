
const http = require('http')
const fs = require('fs')
const path = require('path')


http.createServer((req,res) =>{

    const file = req.url === '/' ? 'index.html' : req.url
    
    const filePath =  path.join(__dirname,'public',file)
    const allowedFileTypes = ['.html','.css','.js']
    const extName = path.extname(filePath)
       
    const allowed = allowedFileTypes.find((item) => item === extName)

    if(allowed){

        fs.readFile(
                filePath,
                (err, content) => {

                    if(err) throw err
                    
                    res.end(content)
                }
        )
    }else{
        return
    }

    



}).listen(5000), () => console.log('serve start')

