import React, { Component } from "react";
import './Kipas.css';
import Post from "../../component/Kipas/Post";

class Kipas extends Component {
    state = {
        listKipas: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/kipas')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKipas: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

    handleGetKipas = data => {
        fetch(`http://localhost:3001/kipas/${data}`, { method: "GET" })
            .then(response => response.json())
            .then(res => {
                // this.handleUpdateList(data, res);
                var dataKipas = { ...this.state.insertKeranjang };
                dataKipas["id"] = res["id"];
                dataKipas["nama"] = res["nama"];
                dataKipas["harga"] = res["harga"];
                dataKipas["stok"] = res["stok"];
                dataKipas["qty"] = 1;
                this.setState({
                    insertKeranjang: dataKipas
                });
            })
            .then(() => {
                this.handleCekKeranjang(data);
            })
            .then(() => {
                this.handleTombolSimpan();
            });
    };

    handleCekKeranjang = data => {
        fetch(`http://localhost:3003/keranjang/${data}`, { method: "GET" }).then(
            response => {
                if (response.ok) {
                    response.json().then(res => {
                        this.handleUpdateKeranjang(data, res);
                        this.ambilDataDariServerAPI();
                    });
                } else {
                    this.handleTombolSimpan();
                }
            }
        );
    };

    handleUpdateKeranjang = (data, res) => {
        fetch(`http://localhost:3003/keranjang/${data}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: res["id"],
                nama: res["nama"],
                harga: res["harga"],
                stok: res["stok"],
                qty: res["qty"] + 1
            })
        });
    };

    handleTombolSimpan = () => {
        fetch('http://localhost:3003/keranjang', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertKeranjang)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="post-kipas">
                {
                /* <div className="form pb-2 border-bottom">
                    <button type="submit" className="btn btn-primary" onClick={this.handleTombolSimpan}>Simpan</button>
                </div> */}
                <center><h2>Daftar Barang</h2></center>
                <div className="tgh">
                    {
                        this.state.listKipas.map(kipas => {
                            return (
                                <Post
                                    key={kipas.id}
                                    id={kipas.id}
                                    nama={kipas.nama}
                                    harga={kipas.harga}
                                    gambar={kipas.gambar}
                                    stok={kipas.stok}
                                    tambahKipas={this.handleGetKipas} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Kipas;