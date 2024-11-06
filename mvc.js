import {readFile} from 'node:fs/promises';
import { JSDOM } from "jsdom";

export async function build(){
    let content = await getTemplate("index.html");
    const vars={
        nomvar:"prenièrmmmmmmmmmme variable",
    };
    let dom = new JSDOM(content);
    //content node and its value
    let contentNode=dom.window.document.getElementsByTagName("content")[0];
    let value=contentNode.getAttribute('value');
    //new replacing node
    let textNode = dom.window.document.createTextNode(vars[value]);
    //retrieving parent
    let parent = contentNode.parentNode;
    parent.replaceChild(textNode,contentNode);
    return dom.serialize();
}

async function getTemplate(path){
    const data= await readFile(path,{encoding:'utf8'});
    return data;
}