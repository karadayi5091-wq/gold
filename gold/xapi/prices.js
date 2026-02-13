export default async function handler(req, res) {

  const r = await fetch("https://api.genelpara.com/embed/para-birimleri.json");
  const data = await r.json();

  const usd = data.USD.satis;
  const eur = data.EUR.satis;
  const gram = data.GA.satis;

  res.status(200).json({
    usd,
    eur,
    gram,
    ceyrek: (gram*1.75).toFixed(2),
    ata: (gram*7).toFixed(2)
  });
}