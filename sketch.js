//variabel tak bebas
let P1 = []; 
let P2 = []; 
let t = [];
//parameter model 
let a;
let b;
let c;
let d;

let P10 = 20;
let P20 = 40
let dt = 0.1;
let tMax = 100;

let grafik;

function setup() {
  createCanvas(400, 400);
  
  P10 = createInput("20");
  P10.position(20, 410);
  P20 = createInput("40");
  P20.position(100, 410);

  a = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  a.position(20,450);

  b = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  b.position(20,500);

  c = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  c.position(150,450);

  d = createSlider(0.1,2,0.4,0.01);//min,max,value,step
  d.position(150,500);

  

  let p = createP('kondisi awal');
  p.style('font-size','14px')
  p.position(20,380)
  let q = createP('parameter a');
  q.style('font-size','14px')
  q.position(20,420)
  let r = createP('parameter b');
  r.style('font-size','14px')
  r.position(20,460)
  let s = createP('parameter c');
  s.style('font-size','14px')
  s.position(150,420)
  let t = createP('parameter d');
  t.style('font-size','14px')
  t.position(150,460)

  grafik = new Chart(this, config);
  
  solve();
  P10.changed(solve);//ketika nilainya berganti panggil fungsi solve
  P20.changed(solve);
  a.changed(solve);
  b.changed(solve);
  c.changed(solve);
  d.changed(solve);
}

function draw() {
  background(220);
  grafik.update();
}

function solve(){
  P1[0] = float(P10.value());//jangan lupa float
  P2[0] = float(P20.value());
  t[0] = 0;
  let as = float(a.value());
  let bs = float(b.value());
  let cs = float(c.value());
  let ds = float(d.value());
  let iterNum = int(tMax / dt);
  
  for  (i=0; i < iterNum; i++){
    P1[i+1] = P1[i] + dt * as  * P1[i] - dt*bs*P1[i]*P2[i];
    P2[i+1] = P2[i] + dt * cs  * P1[i+1]*P2[i] - dt*ds*P2[i];
    t[i+1] = round((i + 1)*dt,3);
  }
}