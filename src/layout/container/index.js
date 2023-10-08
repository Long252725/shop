import './container.css';
import products from './sp';


function Container() {
    return (
        <div className="Container">
            {products.map((product, index) => {
                return (
                    <a href={product.href} key={index}>
                        <div className="sp" index={product.id}>
                            <div
                                className="pic"
                                style={{
                                    backgroundImage: `url(${product.pic})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            ></div>
                            <div className="name">{product.name}</div>
                            <div className="price">{product.price}</div>
                            <div className="detals"> Đã bán: {product.detals}</div>
                            <div className="buy">Mua Ngay</div>
                        </div>
                    </a>
                );
            })}

            
        </div>
    );
}

export { Container };
