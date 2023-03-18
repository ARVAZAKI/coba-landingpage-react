import Hero from './Hero'
import CardKegiatan from './CardKegiatan'
import CardJurusan from './CardJurusan'
import jurusan1 from './../assets/jurusanrpl.jpg'
import jurusan2 from './../assets/jurusan2.png'
import jurusan3 from './../assets/jurusan 3.png'
import kegiatan1 from './../assets/kegiatansatu.jpg'
import kegiatan2 from './../assets/kegiatan2.jpg'
import kegiatan3 from './../assets/kegiatan3.jpg'
function MainContent(){
    return(
        <div>
            <Hero/>
            <div className = 'container'>
                <div className = 'row justify-content-center'>
                    <div className = 'col-12 text-center my-5'>
                        <h1>Jurusan sekolah</h1>
                    </div>
                    <div className = 'col-lg-4'>
                        <CardJurusan image = {jurusan2} jurusan = "Akuntansi Dan keuangan Lembaga"/>
                    </div>
                    <div className = 'col-lg-4'>
                        <CardJurusan image = {jurusan3} jurusan = "Teknik Komputer Dan Jaringan"/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <div className='col-12 text-center my-5'>
                        <h1>Kegiatan</h1>
                    </div>
                    <div className='col-lg-4 col-12'>
                    <CardKegiatan image={kegiatan1} judul="Pameran karya multiverse"/>
                    </div>
                    <div className='col-lg-4 col-12'>
                    <CardKegiatan image={kegiatan2} judul="lomba pbb"/>
                    </div>
                </div>
            </div>
        </div>
        );
}
export default MainContent