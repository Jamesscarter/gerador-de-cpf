function generateCPF() {
  let n = Array.from({length:9}, () => Math.floor(Math.random()*10));
  let d1 = (n[0]*10 + n[1]*9 + n[2]*8 + n[3]*7 + n[4]*6 + n[5]*5 + n[6]*4 + n[7]*3 + n[8]*2) % 11;
  d1 = (d1 < 2) ? 0 : 11 - d1;
  let d2 = (n[0]*11 + n[1]*10 + n[2]*9 + n[3]*8 + n[4]*7 + n[5]*6 + n[6]*5 + n[7]*4 + n[8]*3 + d1*2) % 11;
  d2 = (d2 < 2) ? 0 : 11 - d2;
  document.getElementById('result').innerText = n.join('') + d1 + d2;
}

