import React from "react";
import { FaCartPlus } from 'react-icons/fa'

const Post = (brg) => {
    return (

        <div className="col-lg-4 col-sm-6 portofolio-item mt-4">
            <div className="card h-100">
                <img src={brg.gambar} alt="Gambar Kulkas" className="card-img-top mh-100" />
                <div className="card-body">
                    <h4 className="card-title mb-4">{brg.nama}</h4>
                    <button className="btn btn-md btn-primary btn-block" onClick={brg.tambahKipas.bind(this, brg.id)}><FaCartPlus /></button>
                    <br />
                    <hr />
                    <p className="card-text">Harga : Rp. {brg.harga}</p>
                    <p className="card-text"> Stok : {brg.stok} </p>
                </div>
            </div>
        </div>

    )
}

export default Post;