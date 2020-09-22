process.stdout.write('hello from spinner1.js... \rheyyy\n')
for( let time = 0; time < 10000; time += 1000) {
setTimeout(() => {process.stdout.write('\r|  ');
}, time);
setTimeout(()=>{ process.stdout.write('\r/  ');
}, time + 250);
setTimeout(() =>{process.stdout.write('\r-  ')
}, time + 500);
setTimeout(() => {process.stdout.write('\r\\   ')
},time + 750);}
