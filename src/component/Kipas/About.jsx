import react from 'react';
import profile from '../../foto.JPG';

const About = () => {
    return (
        <div className="container mb-5">
            <div className="d-flex justify-content-center">
                <div className="card mt-5" style={{ width: "20rem" }}>
                    <img className="card-img-top w-100" src={profile} alt="Card image cap" />
                    <div className="card-body text-center">
                        <h5 className="card-title">Biodata Mahasiswa</h5>
                        <p className="card-text">Nama : Altalarik Yusuf Erdinanta</p>
                        <p className="card-text">NIM : 1841720197</p>
                        <p className="card-text">Kelas : TI - 3H / 04</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;