import * as fs from 'fs';
import  { readFileSync, existsSync } from 'fs'

export function loadConfig(){
    // if(!fs.existsSync('./config.json')) return undefined;
    if(!existsSync("./config.json")) return undefined;
    return JSON.parse(readFileSync('./config.json', 'utf-8'))
}