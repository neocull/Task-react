import React from 'react'
import { Article } from './Article'

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            window: true,
            items: [
                {
                    id: '',
                    name: '',
                    price: '',
                    quantity: ''
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            items: this.state.data.map((item, key) => {
                return <tr key={key}>
                    <Article key={item.id} data={item}/>
                    <td className="article__buttons">
                        <button onClick={this.addQuantity(item.id)}
                                className="article__buttons_minus">+</button>
                    </td>
                </tr>
            })
        })
    }

    addQuantity(id) {
        this.setState({
                ...this.state,
                items: this.state.items.map(item => {
                    if (item.id !== id) {
                        return item;
                    }
                    return {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                })
            }
        );
    };

    render() {

        return (

            <>
                <table className="products">
                    <caption></caption>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Стоимость</th>
                        <th>Количество</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map((item, key) => {
                            return <tr key={key}>
                                <Article key={item.id} data={item}/>
                                <td className="article__buttons">
                                    <button onClick={this.addQuantity(item.id)}
                                        className="article__buttons_minus">+</button>
                                </td>
                                </tr>
                        })
                    }
                    </tbody>
                </table>
                <div className="controls">
                    <button
                        onClick={() => { this.props.updateData(this.state.window)}}
                        className="controls__link">Корзина</button>
                </div>
            </>
        )
    }

}

export { Products }