import './style.css';
import Header from '../../layout/header';
// import products from '../../layout/container/sp';
// import Bill from './layout/Bill';
// import '../../style.css'

function Buy() {
    return (
        <div>
            <Header />
            <div className="bill">
                <div>
                    <div className="picBill"></div>
                    <div className="nameBill">
                        Bàn ủi hơi nước cầm tay Philips STH1000 /10|900W|nhỏ gọn ngăn chứa nước 85ml có thể tháo
                    </div>
                    <div className="priceBill">100.000đ</div>
                    <div className="sold">Đã bán: 3.6K</div>
                    <div className="contactBill">Đặt hàng nhanh</div>
                    <div className="detalsBill">
                        <ul>
                            COMBO GỒM
                            <li>Đùi Gà Nướng</li>
                            <li>Cô ca</li>
                            <li>Khoai Tây Chiên</li>
                            <li>Sting</li>
                        </ul>
                    </div>
                    <button
                        className="buyBill"
                        onClick={() => {
                            window.scrollBy(0, 550);
                        }}
                    >
                        Đặt ngay
                    </button>
                </div>
                <div className="infoBill">
                    <div className="alertBill">Vui lòng điền thông tin đơn hàng</div>
                    <div className="infoInput">
                        <div className="nameAll nameSp">Tên sản phẩm</div>
                        <textarea className="inputAll nameInput" multiple lines></textarea>
                        <div className="nameAll fullName">Họ và tên người nhận</div>
                        <textarea className="inputAll fullInput"></textarea>
                        <div className="nameAll numberPhone">Số điện thoại</div>
                        <textarea className="inputAll phoneInput"></textarea>
                        <div className="nameAll adrress">Địa chỉ người nhận</div>
                        <textarea className="inputAll addInput"></textarea>
                        <button
                            className="continute"
                            onClick={() => {
                                window.scrollBy(0, 560);
                            }}
                        >
                            Tiếp tục
                        </button>
                    </div>
                </div>
                <div className="pay">
                    <ul className="infoBank">
                        <div className="logoBank"></div>
                        <li className="stkBank font-thin">
                            STK: <div className="bold">1027524923</div>
                        </li>
                        <li className="nameBank font-thin">
                            Người nhận: <div className="bold">Nguyễn Thành Long</div>
                        </li>
                        <li className="ndBank font-thin">
                            Nội dung chuyển khoản:{' '}
                            <div className="symbol">
                                TS{Math.floor(Math.random() * 10)}
                                {Math.floor(Math.random() * 10)}
                                {Math.floor(Math.random() * 10)}
                                {Math.floor(Math.random() * 10)}
                                {Math.floor(Math.random() * 10)}
                                {Math.floor(Math.random() * 10)}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Buy;
