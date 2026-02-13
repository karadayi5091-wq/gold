async function getir(){
  const r = await fetch("/api/prices");
  const d = await r.json();

  usd.innerText = d.usd;
  eur.innerText = d.eur;
  gram.innerText = d.gram;
  ceyrek.innerText = d.ceyrek;
  ata.innerText = d.ata;
}

getir();
setInterval(getir, 10000);