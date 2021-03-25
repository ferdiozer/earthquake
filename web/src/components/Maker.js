const Maker = ({ item, key, text, clicked = false, onClick = () => { } }) =>
    <div title={item.yer} key={key}
        onClick={(e) => onClick(item)}>
        <div className="custom-maker-dot" style={{
            height: 10, width: 10,
            borderRadius: 5,
            backgroundColor: parseInt(item.intensity) > 3 ? 'red' : 'gray',
            zIndex: 2
        }}
        ></div>
        {clicked &&
            <>
                <div>
                    <h3>{item.region}</h3>
                    Yer:{item.region}<br />
                    Şehir:{item.city}<br />
                    Tarih:{item.date}<br />
                    Saat:{item.time}<br />
                    Büyüklük:{item.intensity}<br />
                    Derinlik:{item.depth}<br />
                </div>
            </>}
    </div>;

export default Maker