import{readFileSync as R,readdirSync as D,mkdirSync as M,writeFileSync as W}from'fs'
const E=process.env,T=`!2b%'+,0        *******&***&*** ***             AEEA!           &)              %%"%`,I=E.MAKEFUN_INPUT_DIR||'/input',O=E.MAKEFUN_OUTPUT_DIR||'/output',F=c=>{throw c}
D(I).map(d=>{
let P=R(I+'/'+d+'/program.bin'),N=R(I+'/'+d+'/input.bin'),n=P.length,S=[],C=[],m=[],o='',G=O+'/'+d,p=0,s=0,i=0
try{
for(;s<1e6;s++){
if(p<0||p>=n)F(9)
let q=P[p],k=T.charCodeAt(q)-33
if(!(k>=0))F(5)
let u=k>>4,v=k>>2&3,w=k&3
if(p+u>=n)F(9)
let x=p+1+u
if(S.length<v)F(2)
if(S.length-v+w>256)F(3)
p=x
if(!q)F(0)
else if(q<3)S.push(P.readIntLE(x-u,u))
else if(q>2&&q<8){let t=S.splice(-v);for(const c of['','00','10','010','120'][q-3])S.push(t[c])}
else if(q<35){
let b=S.pop(),a=(q==23|q==27)?b:S.pop(),A=a>>>0,B=b>>>0,c=b&31
if(q>18&&q<23&&!b)F(4)
S.push([a+b,a-b,Math.imul(a,b),a/b,a%b,A/B,A%B,-a,a&b,a|b,a^b,~a,a<<c,a>>c,a>>>c,0,a==b,a<b,A<B][q-16]|0)
}
else if(q<53){
if(q==52)p=C.pop()??F(8)
else if(q==51){if(C.push(x)>64)F(7);p=P[x-2]|P[x-1]<<8}
else{let y=v?S.pop():0;if(!v|!y==(q==49))p=x+P.readInt16LE(x-2)}
}
else if(q<66){let a=S.pop();if(a>>>0>255)F(6);w?S.push(m[a]||0):m[a]=S.pop()}
else if(q>79&&q<82){let t=q==80?S.pop()+'':0;if(o.length+(q==80?t.length:1)>65536)F(11);q==80?o+=t:o+=String.fromCharCode(S.pop())}
else if(q==82)S.push(N[i++]??-1)
else F(S.pop()&255)
}
F(10)
}catch(e){M(G,{recursive:true});W(G+'/stdout.bin',o,'binary');W(G+'/exit.txt',(e|0)+'\n')}
})