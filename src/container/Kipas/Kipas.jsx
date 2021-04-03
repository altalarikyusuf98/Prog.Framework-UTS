import React, { Component } from "react";
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
        fetch(`http://localhost:3002/keranjang/${data}`, { method: "GET" }).then(
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
        fetch(`http://localhost:3002/keranjang/${data}`, {
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
        fetch('http://localhost:3002/keranjang', {
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
            <div className="container post-mahasiswa mt-3 mb-3">
                <h2 className="text-center">Daftar Kipas</h2>
                <div className="row justify-content-center">
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