import {readFile} from 'node:fs/promises';
import {createServer} from 'node:http';
import {JSDOM} from 'jsdom';
import { build } from './mvc.js';

async function getTemplate(path){
    const data= await readFile(path,{encoding:'utf8'});
    return data;
}


createServer(async (req,res) =>{
    let content =await getTemplate('index.html');
    const builder = await build();
    res.end(builder);
}).listen(3000);
