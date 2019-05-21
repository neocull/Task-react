import React from 'react'

class Article extends React.Component {

    render() {
        const {name, price, quantity} = this.props.data;

        return (
            <>
                <td className="article__name">{name}</td>
                <td className="article__price">{price}</td>
                <td className="article__quantity">{quantity}</td>
            </>
        );
    }

}

export { Article }