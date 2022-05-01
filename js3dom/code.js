var items = [
    ['001', 'Keyboard Logitek', 60000, 'Keyboard yang mantap untuk kantoran', 'logitek.jpg'], 
    ['002', 'Keyboard MSI', 300000, 'Keyboard gaming MSI mekanik', 'msi.jpg'],
    ['003', 'Mouse Genius', 50000, 'Mouse Genius biar lebih pinter', 'genius.jpeg'],
    ['004', 'Mouse Jerry', 30000, 'Mouse yang disukai kucing', 'jerry.jpg']
]
var tampungBarang =document.getElementById('listBarang');
function tampilBarang(data){              
    var tampung = "";
    console.log(data);
    for(var i=0; i<data.length; i++){
        tampung +=`
            <!-- Component Card dari Bootstrap --> 
            <div class ="col-4 mt-2"> 
                <div class="card" style="width: 18rem;">
                    <img src="${data[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" id="itemName">${data[i][1]}</h5>
                            <p class="card-text" id="itemDesc">${data[i][3]}</p>
                            <p class="card-text">${"Rp"+data[i][2]}</p>
                            <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                        </div>
                </div>
            </div>

        `
    }
tampungBarang.innerHTML=tampung;
}
tampilBarang(items);

////////////////////////////////
//release 1
function filter(katakunci){
        var filteredItem = [];
        for(var a = 0; a < items.length; a++){ 
                var barang=items[a]; 
                console.log(a);
                var namaBarang = barang[1];
                var isMatch = namaBarang.toLowerCase().includes(katakunci.toLowerCase())
                //console.log(isMatch);
                if(isMatch == true){
                        filteredItem.push(barang);
                }

        }
        return filteredItem; 
}
var formPencarian = document.getElementById("formItem");
//27:46

formPencarian.addEventListener("submit", function (event){
    event.preventDefault();
    var inputanKeyword=document.getElementById("keyword").value;
    console.log(inputanKeyword)
    var terfilter =filter(inputanKeyword);
    tampilBarang(terfilter);
})