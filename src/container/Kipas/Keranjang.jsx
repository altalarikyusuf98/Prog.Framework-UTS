import React, { Component } from "react";
import PostKeranjang from "../../component/Kipas/PostKeranjang";

class Kipas extends Component {
    state = {
        listKeranjang: []
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3002/keranjang')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listKeranjang: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()
    }

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
        var no = 0;
        var total = 0;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className="mt-3">Keranjang</h2>
                    <table className="table table-bordered mt-3" border="1" cellpadding="5" width="100%">
                        <tr>
                            <th align="center">No</th>
                            <th align="center">ID Produk</th>
                            <th align="left">Nama</th>
                            <th align="center">Harga</th>
                            <th align="center">Qty</th>
                            <th align="center">Subtotal</th>
                        </tr>
                        {
                            this.state.listKeranjang.map(kipas => {
                                no += 1;
                                total += kipas.harga * kipas.qty
                                return (
                                    <PostKeranjang
                                        no={no}
                                        key={kipas.id}
                                        id={kipas.id}
                                        nama={kipas.nama}
                                        harga={kipas.harga}
                                        gambar={kipas.gambar}
                                        stok={kipas.stok}
                                        qty={kipas.qty}
                                        tambahKipas={this.handleGetKipas} />
                                )
                            })
                        }
                        <tr>
                            <td colspan="5" align="right">Total : </td>
                            <td align="center">{total}</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Kipas;