
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function formatBitcoin(value) {
   // Usa en-US para formatação decimal, você pode alterar para outra localidade se preferir
   let formatter = new Intl.NumberFormat('en-US', {
       style: 'decimal',
       minimumFractionDigits: 2,
       maximumFractionDigits: 8 // Bitcoin tem até 8 dígitos decimais
   });

   return formatter.format(value) + ' BTC';
}

function formataMoeda(tipo,currency,valor){
  return new Intl.NumberFormat(tipo, {
      style: "currency",
      currency: currency
   }).format( valor );
}

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")   // valor em real
   const currencyValueConverted = document.querySelector(".currency-value")  // outras moedas

   const dolarToday = 5.2
   const euroToday = 6.2
   const libraToday = 7.5
   const bitcoinToday = 127849.25

   let valorEmreal = inputCurrencyValue;
   let formatandoValorBRL = formataMoeda("pt-BR","BRL",valorEmreal);
   currencyValueToConvert.innerHTML = formatandoValorBRL;

   //caso esteja selecionado dolar vai cair aqui 
   if (currencySelect.value == "dolar") {
      let valorEmDolar = (inputCurrencyValue / dolarToday).toFixed(2); 
      let formatandoValorUSD = formataMoeda("en-US","USD",valorEmDolar);
      currencyValueConverted.innerHTML = formatandoValorUSD; //setendo valor no campo de dolar
   }

   //caso seja euro
   if (currencySelect.value == "euro") {
      let valorEmEuro = (inputCurrencyValue / euroToday).toFixed(2);
      let formatEURO  = formataMoeda("de-DE","EUR",valorEmEuro); 
      currencyValueConverted.innerHTML = formatEURO; ////setendo valor no campo do euro
   }

   //caso seja libra
   if (currencySelect.value == "libra") {
      let valorEmLibra = (inputCurrencyValue / libraToday).toFixed(2);
      let formatLIBRA  = formataMoeda('en-GB','GBP',valorEmLibra); 
      currencyValueConverted.innerHTML = formatLIBRA; ////setendo valor no campo do euro
   }

   //caso seja bitcoin
   if (currencySelect.value == "bitcoin") {
      let valorEmBitcoin = (inputCurrencyValue / bitcoinToday);
      let formatBITCOIN  = formatBitcoin(valorEmBitcoin); 
      currencyValueConverted.innerHTML = formatBITCOIN; ////setendo valor no campo do euro
   }


  
}

//troca a imagem quando seleciona a moeda
function changeCurrency() {
   const currencyName = document.getElementById("currency-name")
   const currencyImage = document.querySelector(".currency-img")

   switch (currencySelect.value) {
      case "dolar":
         currencyName.innerHTML = "Dólar americano"
         currencyImage.src = './assets/dolar.png'
         break;

      case "euro":
         currencyName.innerHTML = "Euro"
         currencyImage.src = './assets/euro.png'
         break;

      case "libra":
         currencyName.innerHTML = "Libra"
         currencyImage.src = './assets/libra.png'
         break;

        case "bitcoin":
         currencyName.innerHTML = "Bitcoin"
         currencyImage.src = './assets/bitcoin.png'
         break; 

      default:
         console.log('tipo de moeda não localizado!')
         break;
   }
   convertValues()
}



   currencySelect.addEventListener("change", changeCurrency)
   convertButton.addEventListener("click", convertValues)
