import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
name:'prepipe'
})
export class PrefixPipe implements PipeTransform{
transform(str:string, prefixname:string,delimeter:string){
return prefixname+delimeter+str;
}
}
