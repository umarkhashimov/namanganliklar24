import Navbar from "./components/Navbar.jsx"

import virusIcon from './assets/virus@2x.png'
import calendarIcon from './assets/ic_outline-date-range.png'
import NewsCard from "./components/NewsCard.jsx"
import MiniCard from "./components/MiniCard.jsx"
function App() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row subheading px-4">
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
          <div className="col-3 py-4 d-flex justify-content-center">
            <div className="d-flex align-items-center gap-3 h-100">
              <img src={virusIcon} alt="" className="img-fluid" />
              <p className="m-0">Коронавирус COVID-19 в Узбекистане</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <h4>Политика</h4>
        <div className="row">
          <div className="col-8">
            <NewsCard newsTitle="По факту прорыва Сардобинского водохранилищавозбуждено уголовное дело" img="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WgaQ4COK8puNLcFD2R9r9rkl8wyVO-slKhPq~-wslAfqjMusTZ5x5kbN3dt-V0wysIoGiQaIWPBIihB7SmNUeBhQiO-LrBg69HOju4s3UUyBws0l4~xc22ZlUFSWFB1nWS-zpVJh7hcyQnBsh8JSzqoNAzl3U0uwGYPU4sMv6GKJEHe7q5UNQ7q3xTVhIF0czEl0MmzXuyrVc7Y2S9WgFKf15okZPhBBUFyIRi~~msKSmvYhFJJbFX2LQX0iVzpXCGCwgpWqjtny9~KHiv9dNg~K~DceLhJAbg1v9sgiZir6PCwfkpT8PbLky86~JF97wP2WlvZ43mj8ggkR3DDJzg__" />
            <NewsCard img="https://s3-alpha-sig.figma.com/img/c0f3/1d6e/4008ba3214bf3516140990d3b4535a71?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=czecs7vpUCxrCth6Y4GTigsju3ak2Lhfqg~JrJHc2p8pmwj7E89kcgp3F6yQqekr~iJclaTBvx6EmjFLKhhgprY7IaUsk01kKjHcuzLNA0XvrSfGe0YFDvehdo36O3BGDtaSMWDnkVaBI-zu9~KklPxAVvcY1cD3tSoHHoGo3j07PhIaUbamol--BlsbF03Qg73lmf80RLH27eLGFBw7BoZFUeyDxNxo1MaSWUq7DiW7sV2xJ0P~w61ZcNzimF5Qm-GzQuRsCwxd-LZTALvgkjiIsMPX7ZKBRM3M8aCgODgDozS4GjOEBZkM9gok46Gh-OuSBkffuupyZd47ytss4w__" />
            <NewsCard />
          </div>
          <div className="col-4">
            <div className="row popular-news px-2">
              <h5 className="mb-3">Cамые популярные новости</h5>
              <MiniCard/>
              <div className="mini-card-divider px-3">
                <hr />
              </div>
              <MiniCard/>
              <div className="mini-card-divider px-3">
                <hr />
              </div>
              <MiniCard/>
              <div className="mini-card-divider px-3">
                <hr />
              </div>
              <MiniCard/>

            </div>
          </div>
        </div>
      </div>


      <div>
        <h1>Footer :)</h1>
      </div>
    </>
  )
}

export default App
