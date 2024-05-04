import React from 'react'

function Header({ coin }) {
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });

    return (
        <>
            <header>
                <div className='header_flex'>
                    <div>
                        <h1>
                            TyconnTech
                        </h1>
                    </div>
                    <div className='current_price'>
                        Güncel Para : <span>{formatter.format(coin)}</span>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
