

ort = 0;
sonuc = '';

function salla(){
    document.getElementById("sonuc").value='';
    ort = 0;
    sonuc = ''

    var defa = Math.floor(document.getElementById("num").value);
    var maxs = Math.floor(document.getElementById("max").value);
    
    for (var i =1; i < defa + 1; i++){
        var zar = ((Math.floor(Math.random() * maxs) + 1));
        ort = ort + zar;

        sonuc = sonuc + i + ".    Sayı: " + zar + "    Toplam: " + ort + "    Ortalama: " + (ort / i) + "\n"; 
        
        
    }
    document.getElementById("sonuc").value = sonuc;
}
