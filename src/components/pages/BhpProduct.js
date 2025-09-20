import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function BhpProduct() {
    const products = [
        { id: 1, name: "xe hơi " },
        { id: 2, name: "xe máy " },
        { id: 3, name: "xe đạp " },
        { id: 5, name: "xe lăn  " },
        { id: 3, name: "xe cứu thương  " },
    ]
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <hr />
            <ul>
                {
                    products.map((p) => (
                        <li>
                            <Link to={`/products/${p.id}`}>{p.name}</Link>
                        </li>
                    ))
                }
                <hr />
                <Outlet />
            </ul>
        </div>
    )
}