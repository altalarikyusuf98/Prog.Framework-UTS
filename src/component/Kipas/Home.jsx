import react from 'react';

const Home = () => {
    return (
        <div class="jumbotron text-center">
            <h1 class="display-4">Hello, Customer!</h1>
            <p class="lead">Selamat Datang di KipasAngin.com</p>
            <hr class="my-4"></hr>
            <p>Jelajahi pusat perbelanjaan mobile, KipasAngin.com ! Jual Beli dalam 30 detik. Kapanpun, Dimanapun. Garansi | Gratis Ongkir | 100% Bebas Biaya.</p>
            <p class="lead">
                <a class="btn btn-success btn-lg" href="/list-product" role="button">Belanja Sekarang</a>
            </p>

        </div>
    )
}

export default Home;