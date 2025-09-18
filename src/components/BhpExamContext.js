import React, { useContext } from 'react'
import BhpExamInfo from './BhpExamInfo'

import { ThemeContext } from './BhpExampleContext';

export default function BhpExamContext() {
    let theme = useContext(ThemeContext);

    return (
        <div>
            <p className={theme}>
                Áp dụng:
                <br />
                <span className={theme}>
                    useContext là một React Hook cho phép truy cập dữ liệu từ Context mà không cần phải truyền props qua nhiều cấp (tránh tình trạng props drilling).
                </span>
            </p>
            <BhpExamInfo />
        </div>
    )
}
