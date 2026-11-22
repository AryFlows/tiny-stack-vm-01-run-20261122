const{readdirSync:R,readFileSync:F,mkdirSync:K,writeFileSync:W}=require("fs");
const{MAKEFUN_INPUT_DIR:A="/input",MAKEFUN_OUTPUT_DIR:B="/output"}=process.env;
let O,T="#4d')-.2########,,,,,,,(,,,(,,,#,,,#############CGGC############(+##############''$'";
function V(p,I){
let D=[],t=0,C=[],u=0,M=[],l=0,i=0,x=0,g=0,a,b,r,v,s,H=65536,L=p.length;
O=[];
while(g++<1e6){
if(x<0|x>=L)return 9;
let k=p[x],c=T.charCodeAt(k)-35,m=c>>4,q=c>>2&3,w=c&3;
if(x+m>=L)return 9;
let n=x+1+m;
if(t<q|t-q+w>256)return t<q?2:3;
x=n;
if(k==0)return 0;
else if(k==1)D[t++]=p[n-1]<<24>>24;
else if(k==2)D[t++]=p[n-4]|p[n-3]<<8|p[n-2]<<16|p[n-1]<<24;
else if(k==3)t--;
else if(k==4)D[t]=D[t-1],t++;
else if(k==5)v=D[t-1],D[t-1]=D[t-2],D[t-2]=v;
else if(k==6)D[t]=D[t-2],t++;
else if(k==7)v=D[t-3],D[t-3]=D[t-2],D[t-2]=D[t-1],D[t-1]=v;
else if(k==23)D[t-1]=-D[t-1]|0;
else if(k==27)D[t-1]=~D[t-1];
else if(k>47&k<51){r=(p[n-2]|p[n-1]<<8)<<16>>16;if(k==48||(v=D[--t],k==49?!v:!!v))x=n+r}
else if(k==51){if(u==64)return 7;C[u++]=n,x=p[n-2]|p[n-1]<<8}
else if(k==52){if(u==0)return 8;x=C[--u]}
else if(k==64){if((a=D[t-1])<0|a>255)return 6;D[t-1]=M[a]|0}
else if(k==65){if((a=D[t-1])<0|a>255)return 6;M[a]=D[t-2],t-=2}
else if(k==80){s=""+D[t-1];if(l+s.length>H)return 11;t--,O.push(...Buffer.from(s)),l+=s.length}
else if(k==81){if(l>=H)return 11;O[l++]=D[--t]&255}
else if(k==82)D[t++]=i<I.length?I[i++]:-1;
else if(k==83)return D[--t]&255;
else if(k<16|k>34|k==31)return 5;
else{
b=D[t-1],a=D[t-2];
if(b==0&k>18&k<23)return 4;
r=k<23?k==16?a+b|0:k==17?a-b|0:k==18?Math.imul(a,b):k==19?a==-(2**31)&b==-1?a:(a/b)|0:k==20?b==-1?0:a%b|0:k==21?(a>>>0)/(b>>>0)|0:(a>>>0)%(b>>>0)|0:k<27?k==24?a&b:k==25?a|b:a^b:k<31?k==28?a<<(b&31):k==29?a>>(b&31):(a>>>(b&31))|0:k==32?+(a==b):k==33?+(a<b):(a>>>0)<(b>>>0)?1:0;
t-=2,D[t++]=r;
}
}
return 10;
}
R(A).map(d=>{
let e=V(F(A+"/"+d+"/program.bin"),F(A+"/"+d+"/input.bin")),y=B+"/"+d;
K(y,{recursive:!0});
W(y+"/stdout.bin",Buffer.from(O));
W(y+"/exit.txt",e+"");
});
