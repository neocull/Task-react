import React from 'react'
import { Article } from './Article';

class Basket extends React.Component {

    state = {
        window: false
    };

    renderProducts = () => {
        const {data} = this.props;
        let productsTapmlate;

        productsTapmlate = data.map((item) => {
                if (item.quantity) {
                    return (
                        <tr className="article">
                            <Article key={item.id} data={item}/>
                            <td className="article__buttons">
                                <button className="article__buttons_minus">+</button>
                            </td>
                        </tr>
                    )
                }
        });


        return productsTapmlate
    };

    render() {

        return (
            <>
                <table className="products">
                    <caption>Корзина</caption>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderProducts()}
                    </tbody>
                </table>
                <div className="controls">
                    <button
                        onClick={() => { this.props.updateData(this.state.window)}}
                        className="controls__link">
                        Перейти в список товаров
                    </button>
                    <button className="controls__clear">Очистить корзину</button>
                </div>
            </>
        )
    }

}

export { Basket }