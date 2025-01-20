import Navbar from "./components/Navbar.jsx"

import virusIcon from './assets/virus@2x.png'
import calendarIcon from './assets/ic_outline-date-range.png'
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

            <div className="row news-card my-3">
              <div className="col-4">
                <img className="img-fluid" src="https://s3-alpha-sig.figma.com/img/e910/f547/856ddde0d5f64f965c08fc302bba2a48?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ce1mus~JN-pkTqkM8OsMZBLw-vqDVbu3KGeco9N-g~RS0aQnvVtRpEyfe4AnyE8u3hsaJ4FU-Vxy~mYioQEnJVdXI9QOTYW0~hktj6ik9kThodqaKKuYvYEYBsiinKVTOPhUs8qF9EAnnPwDcxzUhFpeXMHUnVyTx5FdU3PSvjhbi~8Pre0bUyRbOZUpGCvKuMM4aAXaJtz6P62fQEM8DgQ5yAgT8617Ssz4IJFfTiWskSFktxwnQyX57Nsp6GUdbEObDX2zBQ2swgCkYnCdp56PtOObBAX1xlms8PciFT-7-cG5F1vD6DytiaaI4e4-7RVhzokDsvc4pDfGqDht2g__" alt="" />
              </div>
              <div className="col-8 d-flex flex-column justify-content-between">
                <p className="title">По факту прорыва Сардобинского водохранилища возбуждено уголовное дело</p>
                <p className="content">После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.</p>
                <p className="date m-0"><img src={calendarIcon} alt="" />11:31 / 15.05.2020</p>
              </div>
            </div>
            

          </div>
          <div className="col-4">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
