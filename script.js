// let utama = document.querySelector('.main');
// let deal = (0.56 * utama.scrollWidth)+80;
// utama.style.height = `${deal}px`;

// let layar = document.querySelector('.content');
// let layarFix = 0.56 * layar.scrollWidth;
// layar.style.height = `${layarFix}px`;
// let kontenUtama = document.querySelector('.eiyo');
// document.querySelector('.content').style.height = `${deal}px`

document.documentElement.addEventListener('click', function(e){
    let whei = document.documentElement.offsetHeight;
    let wwid = document.documentElement.offsetWidth;
    let stop = document.documentElement.scrollTop;
    let sheight = document.documentElement.scrollHeight;
    let swidth = document.documentElement.scrollWidth;

    let ohei = e.target.scrollHeight;
    let owi = e.target.scrollWidth;

    document.querySelector('.info').innerHTML = `w.hei ${whei} w.wid ${wwid} <br> s.top ${stop} s.height ${sheight} s.width ${swidth} <br> o.hei ${ohei} o.wid ${owi}`
    //  <br> main ${utama.scrollWidth} x ${deal} <br> layar ${layar.scrollWidth} x ${layarFix}`;

    if(e.target.classList.contains('step')){
        let targetAksi = e.target.dataset.aksi;
        let ukuran = 100 - ((targetAksi - 1) * 20);
        const proses = document.querySelectorAll('.step');
        
        proses.forEach((p)=>{
            p.classList.remove('active');
            // if(p.dataset.aksi)
            if(p.dataset.aksi<=targetAksi){
                p.classList.add('active')
            };
        for(i=1;i<=6;i++){
            document.querySelector('.eiyo').classList.remove(`slide${i}`);
        }
        document.querySelector('.eiyo').classList.add(`slide${targetAksi}`);
        });
        document.querySelector('.progress div').style.transform = `translateX(-${ukuran}%)`;
        // e.target.classList.toggle('active');
        document.querySelector('.info').innerHTML = document.querySelector('.container .main').scrollWidth;
        
    }
})
