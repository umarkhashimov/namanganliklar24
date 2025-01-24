import calendarIcon from '../assets/ic_outline-date-range.png'

function NewsCard(props) {

    return (
        <>
            <div className="row news-card my-3">
                <div className="col-4">
                    <img className="img-fluid" src={props.img} alt="" />
                </div>
                <div className="col-8 d-flex flex-column justify-content-between">
                    <p className="title">{props.newsTitle}</p>
                    <p className="content">После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.</p>
                    <p className="date m-0"><img src={calendarIcon} alt="" />11:31 / 15.05.2020</p>
                </div>
            </div>
        </>
    )
}

export default NewsCard