import React from 'react'

class Data extends React.Component {
    render () {
        return(
            
            <div  class="shadow-lg p-3 mb-5 bg-dark rounded">
             
                
                <p class="text-white bg-dark"><h2>------- KASUS COVID '19   --------------------------- PETA SEBARAN COVID JAWA TIMUR -------</h2><hr/></p>
                <img src="sebar.png" class="rounded float-right"></img>
               
            <div  class="card col-sm-4 auto m-6">
                <img src="berita1.jpeg" width="100%"></img>
            <div class="card-body" >
                <h5 class="card-title"><strong>.</strong></h5>
                <p class="card-text">belasan warga</p>
                <a href="https://www.liputan6.com/regional/read/4287106/belasan-warga-satu-kampung-di-kota-malang-positif-covid-19" class="btn btn-primary">Baca Selengkapnya</a>
            </div>

            <div class="card-body" >
            <img src="berita2.jpg" width="100%"></img>
                <h5 class="card-title"><strong>.</strong></h5>
                <p class="card-text">Satgas Covid-19 </p>
                <a href="https://www.liputan6.com/regional/read/4314299/rekor-tertinggi-penambahan-pasien-positif-covid-19-di-malang-dalam-sehari" class="btn btn-primary">Baca Selengkapnya</a>
            </div>

            <div class="card-body" >
            <img src="berita3.jpg" width="100%"></img>
                <h5 class="card-title"><strong>.</strong></h5>
                <p class="card-text">RSUD SAIFUL..</p>
                <a href="https://www.liputan6.com/regional/read/4305991/drama-kaburnya-pasien-positif-covid-19-dari-rsud-saiful-anwar-malang" class="btn btn-primary">Baca Selengkapnya</a>
            </div>
                </div>

                
            </div>
         
        )
    }
}

export default Data;