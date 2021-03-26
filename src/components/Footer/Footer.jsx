import React from 'react'
import './Footer.scss'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__img">
                <img src="http://goldphim.com/wp-content/uploads/2020/03/logo-moi-1.png" alt=""/>
            </div>
            <div className="footer--right">
                <div className="footer--right__item">
                    <p>Phim lẻ</p>
                    <p>Phim hành động</p>
                    <p>Phim kiếm hiệp</p>
                    <p>Phim phim hài hước</p>
                    <p>Phim viễn tưởng</p>
                </div>
                <div className="footer--right__item">
                    <p>Phim bộ</p>
                    <p>Phim bộ Hàn Quốc</p>
                    <p>Phim bộ Trung Quốc</p>
                    <p>Phim bộ Việt Nam</p>
                    <p>Phim bộ Hồng Kông</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
