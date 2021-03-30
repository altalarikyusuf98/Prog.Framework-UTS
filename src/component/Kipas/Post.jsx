import React from "react";

const Post = (brg) => {
    return (

        <div className="kipas">
            <div className="konten-kipas">
                <div className="gambar-kipas"><img src={brg.gambar} width="150" height="150" alt="" /></div>
                <div className="isi-kipas">
                    ID : {brg.id}<br />
                    Nama : {brg.nama}<br />
                    Harga : {brg.harga}<br />
                    Stok : {brg.stok}
                </div>
                <button className="btn btn-sm btn-warning" onClick={brg.tambahKipas.bind(this, brg.id)}>Beli</button>
            </div>
        </div>

    )
}

export default Post;